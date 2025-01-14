import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Component10 = () => {
  return (
    <View style={styles.component10}>
      <View style={styles.iconWrapper}>
        <View style={styles.circle}>
          <Text style={styles.icon}>✏️</Text>
        </View>
        <Text style={styles.text}>New Design</Text>
        <Text style={styles.plus}>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component10: {
    width: 237,
    height: 96,
    backgroundColor: "#EBE7FE",
    borderRadius: 12,
    paddingTop: 16,
    paddingRight: 24,
    paddingBottom: 16,
    paddingLeft: 24,
    justifyContent: "center",
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  icon: {
    fontSize: 20,
    color: "#000000",
  },
  text: {
    fontSize: 16,
    color: "#000000",
  },
  plus: {
    fontSize: 24,
    color: "#AAAAAA",
    marginLeft: 'auto',
  },
});

export default Component10;
