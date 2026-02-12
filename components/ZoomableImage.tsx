import React, { useCallback, useEffect } from 'react';
import {
    ImageLoadEventData,
    NativeSyntheticEvent,
    Platform,
    StyleProp,
    StyleSheet,
    View,
    ViewStyle,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    clamp,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    withTiming,
} from 'react-native-reanimated';

type Size = { width: number; height: number };

type ZoomableImageProps = {
  uri: string;
  style?: StyleProp<ViewStyle>;
  doubleTapScale?: number;
  maxScale?: number;
  onZoomChange?: (zoomed: boolean) => void;
};

const DEFAULT_DOUBLE_TAP_SCALE = 2.5;
const DEFAULT_MAX_SCALE = 4;

function clampToBounds(
  value: number,
  containerSize: number,
  contentSize: number
): number {
  'worklet';
  const max = Math.max(0, (contentSize - containerSize) / 2);
  return clamp(value, -max, max);
}

export default function ZoomableImage({
  uri,
  style,
  doubleTapScale = DEFAULT_DOUBLE_TAP_SCALE,
  maxScale = DEFAULT_MAX_SCALE,
  onZoomChange,
}: ZoomableImageProps) {
  const containerW = useSharedValue(0);
  const containerH = useSharedValue(0);

  const imageW = useSharedValue(0);
  const imageH = useSharedValue(0);

  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panStartX = useSharedValue(0);
  const panStartY = useSharedValue(0);

  const reportZoomChange = useCallback(
    (nextScale: number) => {
      onZoomChange?.(nextScale > 1.01);
    },
    [onZoomChange]
  );

  const toggleZoom = useCallback(() => {
    const nextScale = scale.value > 1.01 ? 1 : Math.min(doubleTapScale, maxScale);

    scale.value = withTiming(nextScale, { duration: 180 });
    translateX.value = withTiming(0, { duration: 180 });
    translateY.value = withTiming(0, { duration: 180 });

    reportZoomChange(nextScale);
  }, [doubleTapScale, maxScale, reportZoomChange, scale, translateX, translateY]);

  useEffect(() => {
    scale.value = 1;
    translateX.value = 0;
    translateY.value = 0;
    onZoomChange?.(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uri]);

  const onContainerLayout = useCallback(
    (event: any) => {
      const { width, height } = event.nativeEvent.layout as Size;
      containerW.value = width;
      containerH.value = height;
    },
    [containerW, containerH]
  );

  const onImageLoad = useCallback(
    (event: NativeSyntheticEvent<ImageLoadEventData>) => {
      const { width, height } = event.nativeEvent.source;
      imageW.value = width;
      imageH.value = height;
    },
    [imageW, imageH]
  );

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      runOnJS(toggleZoom)();
    });

  const pan = Gesture.Pan()
    .onBegin(() => {
      panStartX.value = translateX.value;
      panStartY.value = translateY.value;
    })
    .onUpdate((event) => {
      if (scale.value <= 1.01) return;

      const cw = containerW.value;
      const ch = containerH.value;
      if (cw <= 0 || ch <= 0) return;

      const iw = imageW.value;
      const ih = imageH.value;

      const baseScale = iw > 0 && ih > 0 ? Math.min(cw / iw, ch / ih) : 1;
      const displayedW = iw > 0 ? iw * baseScale : cw;
      const displayedH = ih > 0 ? ih * baseScale : ch;

      const contentW = displayedW * scale.value;
      const contentH = displayedH * scale.value;

      const nextX = panStartX.value + event.translationX;
      const nextY = panStartY.value + event.translationY;

      translateX.value = clampToBounds(nextX, cw, contentW);
      translateY.value = clampToBounds(nextY, ch, contentH);
    })
    .onEnd(() => {
      const cw = containerW.value;
      const ch = containerH.value;
      if (cw <= 0 || ch <= 0) return;

      const iw = imageW.value;
      const ih = imageH.value;

      const baseScale = iw > 0 && ih > 0 ? Math.min(cw / iw, ch / ih) : 1;
      const displayedW = iw > 0 ? iw * baseScale : cw;
      const displayedH = ih > 0 ? ih * baseScale : ch;

      const contentW = displayedW * scale.value;
      const contentH = displayedH * scale.value;

      const clampedX = clampToBounds(translateX.value, cw, contentW);
      const clampedY = clampToBounds(translateY.value, ch, contentH);

      translateX.value = withSpring(clampedX, { damping: 18, stiffness: 180 });
      translateY.value = withSpring(clampedY, { damping: 18, stiffness: 180 });
    });

  const composed = Gesture.Simultaneous(doubleTap, pan);

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
    };
  });

  const containerStyle = [
    styles.container,
    style,
    Platform.OS === 'web' && styles.webGestureBlock,
  ];

  return (
    <View
      onLayout={onContainerLayout}
      style={containerStyle}
      // RN Web: 鼠标双击事件兜底，确保“双击放大/还原”可用
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(Platform.OS === 'web' ? ({ onDoubleClick: toggleZoom } as any) : {})}
    >
      <GestureDetector gesture={composed}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <Animated.Image
            source={{ uri }}
            onLoad={onImageLoad}
            resizeMode="contain"
            style={[StyleSheet.absoluteFill, animatedImageStyle]}
          />
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  webGestureBlock: {
    // RN Web style passthrough
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(Platform.OS === 'web'
      ? ({ touchAction: 'none', userSelect: 'none' } as any)
      : null),
  },
});
