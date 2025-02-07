import React from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import MenuLeft from "../components/MenuLeft";

const SomeScreen = () => {
  const route = useRoute();

  return (
    <View style={{ flex: 1 }}>
      <MenuLeft route={route} />
      {/* Other components */}
    </View>
  );
};

export default SomeScreen;
