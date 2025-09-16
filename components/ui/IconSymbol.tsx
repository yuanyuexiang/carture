// Fallback for using text symbols instead of MaterialIcons to avoid font loading issues.

import { SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { OpaqueColorValue, Text, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<SymbolViewProps['name'], string>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Simple text symbols mapping to avoid font loading issues.
 */
const MAPPING = {
  'house.fill': '🏠',
  'paperplane.fill': '✈️',
  'chevron.left.forwardslash.chevron.right': '</>',
  'chevron.right': '>',
  'cart.fill': '🛒',
  'wrench.adjustable': '🔧',
  'storefront': '🏪',
  'person.crop.circle': '👤',
} as IconMapping;

/**
 * An icon component that uses text symbols instead of icon fonts.
 * This avoids font loading issues in web environments.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  return (
    <Text 
      style={[
        { 
          fontSize: size, 
          color, 
          textAlign: 'center',
          lineHeight: size + 2,
        }, 
        style
      ]}
    >
      {MAPPING[name]}
    </Text>
  );
}
