import React from 'react';
import { View, StyleSheet } from 'react-native';

const ArrowPointer = () => {
    return (
        <View style={styles.arrowContainer}>
            <View style={styles.arrow} />
        </View>
    );
};

const styles = StyleSheet.create({
    arrowContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50, // Chiều cao của container
    },
    arrow: {
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderBottomWidth: 20,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#000', 
    },
});

export default ArrowPointer; 