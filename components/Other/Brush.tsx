import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Brush = () => {
  return (
    <View style={styles.brush}>
      <Image
        source={{ uri: 'https://example.com/tree-icon.png' }}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  brush: {
    width: 48,
    height: 64,
    backgroundColor: '#F7F7F7',
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});

export default Brush;
