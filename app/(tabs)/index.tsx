import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductListScreen from '../../screens/ProductListScreen';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ProductListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
