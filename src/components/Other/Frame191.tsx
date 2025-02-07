import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Frame191 = () => {
  return (
    <View style={styles.frame191}>
      <Image
        source={{ uri: "https://example.com/tree-icon.png" }}
        style={styles.icon}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.size}>94 Kb</Text>
      </View>
      <View style={styles.closeButton}>
        <Text style={styles.closeButtonText}>×</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame191: {
    width: 216,
    height: 60,
    backgroundColor: "#F7F7F7",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderWidth: 1,
    borderColor: "#D1A3FF",
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  textContainer: {
    flexGrow: 1,
    paddingRight: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  size: {
    fontSize: 12,
    color: "#888888",
  },
  closeButton: {
    width: 20,
    height: 20,
    backgroundColor: "#CCCCCC",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    fontSize: 12,
    color: "#000000",
  },
});

export default Frame191;
