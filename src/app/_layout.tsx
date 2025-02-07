import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import MenuLeft from "../components/MenuLeft";
import MenuTop from "../components/MenuTop";

export default function Layout() {
  return (
    <View style={styles.appContainer}>
      <MenuTop />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 0.244 }}>
          <MenuLeft />
        </View>
        <View style={styles.screenContainer}>
          <Stack screenOptions={{ headerShown: false }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding:2,
  },
});
