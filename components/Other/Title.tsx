import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
const Title = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Aspect ratio');

    const options = ['Aspect ratio', '4:3', '16:9', '1:1'];

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        setShowDropdown(false);
    };

    return (
        <View>
            <TouchableOpacity style={styles.title} onPress={() => setShowDropdown(!showDropdown)}>
                <Text style={styles.text}>{selectedValue}</Text>
                <AntDesign name="down" size={20} color="#000" style={styles.icon} />
            </TouchableOpacity>
            {showDropdown && (
                <View style={styles.dropdown}>
                    {options.map((option, index) => (
                        <TouchableOpacity key={index} style={styles.dropdownItem} onPress={() => handleSelect(option)}>
                            <Text style={styles.dropdownText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

            )}
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        height: 24,
        width: 288,
        backgroundColor: '#f0f0f0',
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginRight: 5,
    },
    dropdown: {
        width: 288,
        backgroundColor: '#f0f0f0',
        position: 'absolute',
        top: 24,
        left: 0,
        zIndex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    dropdownItem: {
        padding: 10,
    },
    dropdownText: {
        fontSize: 16,
        color: '#000',
    },
    icon: {
        marginLeft: 150,
    },
});

export default Title;
