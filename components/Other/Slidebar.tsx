import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Slider } from "react-native-elements";

interface SlidebarProps {
  initialValue?: number; 
}

const Slidebar: React.FC<SlidebarProps> = ({ initialValue = 0 }) => { 
  const [sliderValue, setSliderValue] = useState(initialValue);

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        value={Math.round(sliderValue)}
        onValueChange={(val) => setSliderValue(Math.round(val))}
        minimumTrackTintColor="#B4E37B"
        trackStyle={{ height: 30 }}
        maximumTrackTintColor="#E6D5F7"
        thumbTintColor="#fff"
        thumbStyle={{ width: 25, height: 25 }}
      />
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>{sliderValue.toFixed(0)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#c39ef8", // Purple
    borderRadius: 20,
    backgroundColor: "#e0e0e0", // Light
  },
  slider: {
    width: "100%",
    height: 40,
  },
  valueContainer: {
    marginTop: 10,
    padding: 5,
    backgroundColor: "#c39ef8", // Purple
    borderRadius: 5,
    alignItems: "center",
    width: "20%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  valueText: {
    color: "#fff", // White
    fontWeight: "bold",
  },
});

export default Slidebar;
