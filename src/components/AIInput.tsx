import React from "react";
import { StyleSheet, View, Image, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const AIInput = () =>{
    return(
        <View style = {styles.container}>
            <View style = {styles.backgroundImage}>
                <View style = {styles.ImageDesign}>
                    <Image source={{uri:"https://cellphones.com.vn/sforum/wp-content/uploads/2023/06/tai-hinh-nen-dep-nhat-the-gioi-57.jpg"}} style={styles.image}/>
                    <Image source={{uri:"https://cellphones.com.vn/sforum/wp-content/uploads/2023/06/tai-hinh-nen-dep-nhat-the-gioi-57.jpg"}} style={styles.image}/>
                    <Image source={{uri:"https://cellphones.com.vn/sforum/wp-content/uploads/2023/06/tai-hinh-nen-dep-nhat-the-gioi-57.jpg"}} style={styles.image}/>
                    <Image source={{uri:"https://cellphones.com.vn/sforum/wp-content/uploads/2023/06/tai-hinh-nen-dep-nhat-the-gioi-57.jpg"}} style={styles.image}/>
                </View>
            </View>
            <View style = {styles.backgroundAI}>
                <View style = {styles.designSearch}>
                   <Ionicons name="sparkles-outline" size={20} color="black" style = {styles.Icon1}/>
                   <TextInput style={styles.input} placeholder="Describe the image you want to generate" placeholderTextColor="#aaa"  multiline={true} scrollEnabled={true}/>
                </View>
                <TouchableOpacity>
                    <Ionicons name="paper-plane-outline" size={25} color="black" style = {styles.paperPlane1} />
                </TouchableOpacity>
            </View>
            <View style = {styles.backgroundAI}>
                <View style = {styles.designSearch}>
                        <Ionicons name="sparkles-outline" size={20} color="black" style = {styles.Icon1}/>
                        <TextInput style={styles.input} placeholder="Describe the image you want to generate" placeholderTextColor="#aaa" multiline={true} scrollEnabled={true}/>
                    <TouchableOpacity>
                        <Ionicons name="paper-plane-outline" size={25} color="black" style = {styles.paperPlane2} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f4f4f4",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
    },
    backgroundImage: {
        backgroundColor: "#E8E8E8",
        padding: 10,
        borderRadius: 10,
        
    },
    ImageDesign: {
        flexDirection: "row",
        gap: 10,
    },
    input: {
        marginRight: 20,
        marginLeft: 8,
        color: 'black',
        fontSize: 15,

        height: 55, 
        padding: 10, 
        textAlignVertical: 'top', 
        maxHeight: 100, 
        maxWidth: 300, 
    },
    backgroundAI: {
        backgroundColor: "#E8E8E8",
        marginTop: 10,
        borderRadius: 10,
    },
    Icon1: {
       marginLeft: 10,
       marginTop: 10,
    },
    paperPlane1: {
       marginBottom: 10,
       marginLeft: 400,
       marginRight: 10,
    },
    paperPlane2: {
       marginTop: 15,
       marginLeft: 45,
       
     },
    designSearch:{
        flexDirection: "row",
    },
  
});

export default AIInput;