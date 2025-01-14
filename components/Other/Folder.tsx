import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Folder = () => {
  return (
    <View style={styles.card}>
      <View style={styles.folderIcon}></View>
      <View style={styles.menuIcon}></View>
      <View style={styles.text}>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.fileCount}>32 Files</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 241,
    height: 148,
    backgroundColor: "#F8F9FA",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  folderIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#007BFF",
    borderRadius: 4,
  },
  menuIcon: {
    position: "absolute",
    top: 16,
    right: 16,
    width: 16,
    height: 16,
    backgroundColor: "#007BFF",
    borderRadius: 4,
  },
  text: {
    marginTop: "auto",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  fileCount: {
    fontSize: 14,
    color: "#6C757D",
  },
});

export default Folder;
