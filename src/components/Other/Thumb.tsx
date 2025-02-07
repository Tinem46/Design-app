import React from "react";
import { View, StyleSheet, Image } from "react-native";

const Thumb = () => {
  return (
    <View style={styles.thumb}>
      <Image
        source={{ uri: "https://example.com/tree-icon.png" }}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  thumb: {
    width: 104,
    height: 104,
    borderRadius: 10,
    backgroundColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#c39ef8",
    gap: 10,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});

export default Thumb;
