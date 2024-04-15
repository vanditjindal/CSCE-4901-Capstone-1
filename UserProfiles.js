// UserProfile.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, AsyncStorage } from 'react-native';

const UserProfile = () => {
    // State variables for user profile data
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);

    // Load user profile data on component mount
    useEffect(() => {
        loadUserProfile();
    }, []);

    // Function to load user profile data from AsyncStorage
    const loadUserProfile = async () => {
        try {
            const savedUsername = await AsyncStorage.getItem('username');
            const savedEmail = await AsyncStorage.getItem('email');
            if (savedUsername !== null && savedEmail !== null) {
                setUsername(savedUsername);
                setEmail(savedEmail);
            }
        } catch (error) {
            console.error('Error loading user profile:', error);
        } finally {
            setLoading(false);
        }
    };

    // Function to save user profile data to AsyncStorage
    const saveUserProfile = async () => {
        try {
            await AsyncStorage.setItem('username', username);
            await AsyncStorage.setItem('email', email);
            alert('Profile saved successfully!');
        } catch (error) {
            console.error('Error saving user profile:', error);
        }
    };

    // Function to handle profile submission
    const handleSubmit = () => {
        // Validate user inputs
        if (!username.trim() || !email.trim()) {
            alert('Please provide both username and email.');
            return;
        }
        // Save profile data
        saveUserProfile();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>User Profile</Text>
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    {/* Add more input fields for other profile information */}
                    <Button title="Save Profile" onPress={handleSubmit} />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default UserProfile;
