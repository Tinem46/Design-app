import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';




const FrameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Frame 596</Text>
      <View style={styles.frameContainer}>
        
        {/* Nút 1 */}
        <TouchableOpacity style={styles.button}>
          <Icon name='launch' size={25} color="#000"/>
          <Text style={styles.label}>Label</Text>
        </TouchableOpacity>

        {/* Nút 2 */}
        <TouchableOpacity style={styles.button}>
          <Icon name='launch' size={25} color="#000"/> 
          <Text style={styles.label}>Label</Text>
        </TouchableOpacity>

        {/* Nút 3 */}
        <TouchableOpacity style={styles.button}>
          <Icon name='launch' size={25} color="#000"/>
          <Text style={styles.label}>Label</Text>
        </TouchableOpacity>

        {/* Nút 4 */}
        <TouchableOpacity style={styles.button}>
          <Icon name='launch' size={25} color="#000"/>
          <Text style={styles.label}>Label</Text>
        </TouchableOpacity>
        
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
  frameContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginLeft: 20,
  },
});

export default FrameScreen;
