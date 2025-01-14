import React from "react";
import { View, StyleSheet } from "react-native";
import ArrowPointer from "./ArrowPointer";

const AutoLayout = () => {
  return (
    <View style={styles.container}>
      <ArrowPointer />
      <View style={styles.box} />
      <View style={styles.box} />
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    padding: 10,
  },
  box: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: "#000", 
    backgroundColor: "transparent", 
  },
});

export default AutoLayout;
