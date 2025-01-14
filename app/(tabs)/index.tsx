import { View, StyleSheet } from "react-native";
import React from "react";
import DynamicThumb from "@/components/Other/DynamicThumb";
import Thumb from "@/components/Other/Thumb";
import Brush from "@/components/Other/Brush";
import User from "@/components/Other/User";
import Folder from "@/components/Other/Folder";
import CircleButton from "@/components/Other/CircleButton";
import Component10 from "@/components/Other/Component10";
import Frame191 from "@/components/Other/Frame191";
import Card from "@/components/Other/Card";
import Title from "@/components/Other/Title";
import Slidebar from "@/components/Other/Slidebar";
import Logo from "@/components/Other/Logo";
import MenuLeft from "@/components/MenuLeft";

const Index = () => {
  return (
    <View style={styles.container}>
      <MenuLeft />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Index;
