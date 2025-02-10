import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


const InputScreen = () => {
  const [selectedFont, setSelectedFont] = useState("Font");
  const [percentage, setPercentage] = useState("");
  const [switchEnabled, setSwitchEnabled] = useState(false);

  const toggleSwitch = () => setSwitchEnabled((prev) => !prev);


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Input</Text>

      {/* Dropdown Menu */}
      <View style={styles.inputContainer}>
        <Picker
          selectedValue={selectedFont}
          onValueChange={(itemValue) => setSelectedFont(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Font" value="Font" />
          <Picker.Item label="Arial" value="Arial" />
          <Picker.Item label="Times New Roman" value="Times New Roman" />
        </Picker>
      </View>

      {/* Disabled Input */}
      <View style={[styles.inputContainer, styles.disabled]}>
        <Icon name="text-format" size={25} color="#000" />
        <TextInput
          style={styles.textInput}
          placeholder="Font"
          editable={false}
        />
      </View>

         {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Icon name="text-format" size={25} color="#000" />
        <TextInput
          style={styles.textInput}
          placeholder="Font"
          value={percentage}
          onChangeText={(text) => setPercentage(text)}
          keyboardType="numeric"
        />
        <Text style={styles.unit}>%</Text>
      </View>

      {/* Another Dropdown Menu */}
      <View style={styles.inputContainer}>
        <Picker
          selectedValue={selectedFont}
          onValueChange={(itemValue) => setSelectedFont(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Font" value="Font" />
          <Picker.Item label="Arial" value="Arial" />
          <Picker.Item label="Times New Roman" value="Times New Roman" />
        </Picker>
      </View>

      {/* Toggle Switch */}
      <View style={styles.switchContainer}>
        <Icon name="text-format" size={25} color="#000" />
        <Text style={styles.text}>Font</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#cfeb92" }}
          thumbColor={switchEnabled ? "#ffffff" : "#ffffff"}
          onValueChange={toggleSwitch}
          value={switchEnabled}
          
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6a0dad",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  picker: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
  },
  unit: {
    fontSize: 16,
    color: "#aaa",
    marginRight: 125,
  },
  disabled: {
    backgroundColor: "#e0e0e0",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  switchText: {
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    marginLeft: -50,
  },

});

export default InputScreen;
