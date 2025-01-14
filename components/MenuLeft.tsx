import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MenuLeft = () => {
    const progress = 0.3; 

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menuItem}>
                <Icon name="home" size={24} color="#333" />
                <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Icon name="explore" size={24} color="#333" />
                <Text style={styles.menuText}>Discovery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Icon name="folder" size={24} color="#333" />
                <Text style={styles.menuText}>My Project</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Icon name="delete" size={24} color="#333" />
                <Text style={styles.menuText}>Trash</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Icon name="settings" size={24} color="#333" />
                <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Icon name="help" size={24} color="#333" />
                <Text style={styles.menuText}>Get Help</Text>
            </TouchableOpacity>
            <View style={styles.projectsContainer}>
                <Text style={styles.projectsTitle}>Projects</Text>
                <Text style={styles.projectsCount}>6/20</Text>
                <Text style={styles.projectsInfo}>Monthly usage resets in 29 days</Text>
                
                <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
                </View>

                <TouchableOpacity style={styles.upgradeButton}>
                    <Text style={styles.upgradeText}>Upgrade</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 20, 
        width: 292,
        height: 1024, 
        justifyContent: 'space-between', 
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        marginBottom: 5,
    },
    menuText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 15, 
    },
    projectsContainer: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
    },
    projectsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    projectsCount: {
        fontSize: 16,
        color: '#666',
    },
    projectsInfo: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
    progressBarContainer: {
        height: 6,
        backgroundColor: '#e0e0e0',
        borderRadius: 3,
        marginTop: 10,
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#4CAF50',
        borderRadius: 3,
    },
    upgradeButton: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginTop: 15,
        alignItems: 'center',
        borderWidth: 1,
    },
    upgradeText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default MenuLeft;
