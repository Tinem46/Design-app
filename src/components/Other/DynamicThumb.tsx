import React from "react";
import { View, StyleSheet, Image } from "react-native";

const DynamicThumb = () => {
  return (
    <View style={styles.dynamicThumb}>
      <Image
        source={{ uri: "https://example.com/tree-icon.png" }}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dynamicThumb: {
    width: 64,
    height: 64,
    borderRadius: 8,
    padding: 18,
    backgroundColor: "#e0e0e0", // Light background color
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#c39ef8", // Purple border color
  },
  icon: {
    width: "100%",
    height: "100%",
  },
});

export default DynamicThumb;
