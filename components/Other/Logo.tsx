import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Logo = () => {
  return (
    <View style={styles.logo}>
      <Image
        source={{ uri: "https://example.com/tree-icon.png" }}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 40,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});

export default Logo;
