import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imagePlaceholder}>
        <Image
          source={{ uri: "https://example.com/tree-icon.png" }}
          style={styles.icon}
        />
      </View>
      <Text style={styles.text}>Poster</Text>
      <Text style={styles.subtext}>Edited 3 days ago</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 214,
    width: 237,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    alignItems: "center",
  },
  imagePlaceholder: {
    height: 120,
    width: "100%",
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtext: {
    fontSize: 14,
    color: "#999",
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});

export default Card;
