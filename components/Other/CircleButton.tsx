import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const CircleButton = () => {
  return (
    <TouchableOpacity style={styles.circleButton}>
      <Text style={styles.buttonText}>‹</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#DADADA",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    fontSize: 24,
    color: "#000000",
  },
});

export default CircleButton;
