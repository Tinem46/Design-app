import { View, StyleSheet, Text } from "react-native";
import React from "react";
import DynamicThumb from "@/src/components/Other/DynamicThumb";
import Thumb from "@/src/components/Other/Thumb";
import Brush from "@/src/components/Other/Brush";
import User from "@/src/components/Other/User";
import Folder from "@/src/components/Other/Folder";
import CircleButton from "@/src/components/Other/CircleButton";
import Component10 from "@/src/components/Other/Component10";
import Frame191 from "@/src/components/Other/Frame191";
import Card from "@/src/components/Other/Card";
import Title from "@/src/components/Other/Title";
import Slidebar from "@/src/components/Other/Slidebar";
import Logo from "@/src/components/Other/Logo";
import MenuLeft from "@/src/components/MenuLeft";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOME</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 0.1,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
});

export default Index;
