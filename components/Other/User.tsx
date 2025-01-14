import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const User = () => {
  return (
    <View style={styles.user}>
      <Image
        source={{ uri: "https://img2.thuthuatphanmem.vn/uploads/2019/03/07/hinh-anh-ca-koi-buom-dep_111106426.png" }} 
        style={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>Audrey Simmons</Text>
        <Text style={styles.comment}>Stunning!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    flexDirection: "row",
    alignItems: "center",
    width: 260, // Fixed width
    height: 46, // Hug height
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    gap: 12, // Space between elements
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15, // Circular image
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  comment: {
    fontSize: 12,
    color: "#666",
  },
});

export default User;
