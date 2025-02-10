import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';





const ProjectList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.styleList}>
        <Image source={{ uri:"https://png.pngtree.com/element_our/sm/20171118/sm_5a0fed900879e.jpg" }}  style={styles.image}/>
        <Text style={styles.text}>Unnamed Design</Text>
        <Text style={styles.text}>Size</Text>
        <Text style={styles.text}>5 days ago</Text>
        <AntDesign name="ellipsis1" size={20} color="#000" style={styles.icon}/>
      </View>
      <View style={styles.styleList}>
        <Image source={{ uri:"https://png.pngtree.com/element_our/sm/20171118/sm_5a0fed900879e.jpg" }}  style={styles.image}/>
        <Text style={styles.text}>Unnamed Design</Text>
        <Text style={styles.text}>Size</Text>
        <Text style={styles.text}>5 days ago</Text>
        <Fontisto name="history" size={15} color="#000" style={styles.Fontisto}/>
        <AntDesign name="delete" size={15} color="#000" style={styles.AntDesign}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  styleList:{
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    alignItems: "center"
  },

  image:{
    width: 40,
    height: 40,
  },
  text:{
    fontSize: 13,
    marginLeft: 15,
  },
  icon:{
    marginLeft: 50,
  },
  Fontisto:{
    marginLeft: 20,
  },
  AntDesign:{
    marginLeft: 10,
  }

});

export default ProjectList;
