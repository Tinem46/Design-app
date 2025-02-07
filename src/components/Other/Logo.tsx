import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Logo = () => {
  return (
    <View style={styles.logo}>
      <Image
        source={{ uri: "https://th.bing.com/th/id/OIP.Jn0mye46GSsPFZYHpPAzsgHaHa?rs=1&pid=ImgDetMain" }}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 40,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
});

export default Logo;
