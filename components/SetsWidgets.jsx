import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Switch } from "@react-native-material/core";

import { EventRegister } from 'react-native-event-listeners';
import themeContext from "../config/themeContext";

import ttsContext from "../config/ttsContext";


const MindstormWidget = ({ onPress }) => {
    const theme = useContext(themeContext);
  return (
    <TouchableOpacity onPress={onPress} style={[styles.widgetContainer, {backgroundColor: theme.background}]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.widgetImage}
          source={require('../assets/mslogo.png')} // Make sure this path is correct
        />
      </View>
      <Text style={[styles.widgetText, { color: theme.color }]}>Mindstorm Sets</Text>
    </TouchableOpacity>
  );
};

const BotanicalWidget = ({ onPress }) => {
    const theme = useContext(themeContext);
  return (
    <TouchableOpacity onPress={onPress} style={[styles.widgetContainer, {backgroundColor: theme.background}]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.widgetImage}
          source={require('../assets/bcfLogo.png')} // Make sure this path is correct
        />
      </View>
      <Text style={[styles.widgetText, { color: theme.color }]}>Botanical Sets</Text>
    </TouchableOpacity>
  );
};

const Pending1Widget = ({ onPress }) => {
    const theme = useContext(themeContext);
  return (
    <TouchableOpacity onPress={onPress} style={[styles.widgetContainer, {backgroundColor: theme.background}]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.widgetImage}
          source={require('../assets/bcfLogo.png')} // Make sure this path is correct
        />
      </View>
      <Text style={[styles.widgetText, { color: theme.color }]}>Pending1 Sets</Text>
    </TouchableOpacity>
  );
};

const Pending2Widget = ({ onPress }) => {
    const theme = useContext(themeContext);
  return (
    <TouchableOpacity onPress={onPress} style={[styles.widgetContainer, {backgroundColor: theme.background}]}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.widgetImage}
          source={require('../assets/bcfLogo.png')} // Make sure this path is correct
        />
      </View>
      <Text style={[styles.widgetText, { color: theme.color }]}>Pending2 Sets</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   widgetContainer: {
        alignItems: 'left', // This centers the items horizontally in the container
        marginBottom: 20,
        marginTop: 15 ,
        marginLeft: 25,
   },
   imageContainer: {
    borderRadius: 15, // Adjust this value to control the roundness of the corners
   // overflow: 'hidden', // Ensures the inner image corners are also rounded and do not overflow
    width: 150, // Match these dimensions to those of the widgetImage for a snug fit
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF', // Optional: background color for the container*/
    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    // Android Shadow
    elevation: 4,
    },
  /*widget: {
    // Define your widget styles here
    backgroundColor: '##9ba4b3',
    borderRadius: 50,
    padding: 20,
    width: '100%', // or a specific width
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'center',
    marginBottom: 15,
  },*/
  widgetImage: {
    width: 150, // Set your image dimensions
    height: 150,
    marginRight: 10,
    borderRadius: 15,
  },
  widgetText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center'
  },
});

export { MindstormWidget, BotanicalWidget, Pending1Widget, Pending2Widget };
