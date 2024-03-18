// SearchTab.js

import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, Image, TextInput, StyleSheet } from 'react-native';

// Define the SearchTab component
const SearchTab = ({ lastSearches }) => {
    // State to store the selected search term and the current search query
    const [selectedTerm, setSelectedTerm] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Function to handle when a search term is clicked
    const handleSearchTermClick = (term) => {
        setSelectedTerm(term);
    };

    // Function to handle clearing search history
    const handleClearHistory = () => {
        // Implement logic to clear search history
        alert('Search history cleared!');
    };

    // Function to filter search terms based on the current search query
    const filteredSearches = lastSearches.filter((term) =>
        term.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <View style={styles.container}>
            {/* Search bar */}
            <TextInput
                style={styles.input}
                placeholder="Search..."
                value={searchQuery}
                onChangeText={setSearchQuery}
            />

            {/* Display the last searched terms */}
            <ScrollView style={styles.searchList}>
                {filteredSearches.map((term, index) => (
                    <Pressable key={index} onPress={() => handleSearchTermClick(term)}>
                        <Text style={styles.searchItem}>{term}</Text>
                    </Pressable>
                ))}
            </ScrollView>

            {/* Display the selected search term's image */}
            {selectedTerm && (
                <View style={styles.selectedItem}>
                    <Text style={styles.selectedItemText}>Selected Term: {selectedTerm}</Text>
                    {/* Replace 'imageUrl' with the actual URL of the image */}
                    <Image source={{ uri: imageUrl }} style={styles.selectedItemImage} />
                </View>
            )}

            {/* Button to clear search history */}
            <Pressable onPress={handleClearHistory} style={styles.clearButton}>
                <Text style={styles.clearButtonText}>Clear Search History</Text>
            </Pressable>

            {/* Handle no search results */}
            {filteredSearches.length === 0 && <Text>No results found.</Text>}
        </View>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    searchList: {
        maxHeight: 150,
    },
    searchItem: {
        paddingVertical: 5,
    },
    selectedItem: {
        marginVertical: 20,
        alignItems: 'center',
    },
    selectedItemText: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    selectedItemImage: {
        width: 200,
        height: 200,
    },
    clearButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    clearButtonText: {
        color: 'white',
    },
});

export default SearchTab;
