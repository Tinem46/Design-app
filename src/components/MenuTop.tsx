// MenuTop.js
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import User from "@/src/components/Other/User";
import Logo from "@/src/components/Other/Logo";
import SearchInput from "@/src/components/Other/SearchInput"; // Import the new SearchInput component

const MenuTop = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
        <Text style={styles.title}>All Image</Text>
      </View>

      <SearchInput placeholder="Search files" style={styles.searchContainer} />

      <View style={styles.actionsContainer}>
        <AntDesign
          name="bells"
          size={24}
          color="#000"
          style={styles.actionIcon}
        />
        <AntDesign
          name="setting"
          size={24}
          color="#000"
          style={styles.actionIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: "#f5f5f5",
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  searchContainer: {
    flex: 0.77,
    marginLeft: 700,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionIcon: {
    marginHorizontal: 8,
  },
});

export default MenuTop;
