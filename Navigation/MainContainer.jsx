import * as React from 'react';
import {  Text, View } from 'react-native';
import { NavigationContainer, CommonActions  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'; // Icon from https://github.com/oblador/react-native-vector-icons
import EvilIcons from 'react-native-vector-icons/EvilIcons';// Icon from https://github.com/oblador/react-native-vector-icons
import Entypo from 'react-native-vector-icons/Entypo'; //Icon from https://github.com/oblador/react-native-vector-icons
import IonIcon from 'react-native-vector-icons/Ionicons';
import { EventRegister } from 'react-native-event-listeners';

//Import theme style, light/dark
import themeContext from '../config/themeContext';
import theme from '../config/theme';

//Import text to speech contexts
import ttsContext from "../config/ttsContext";
//imports text to speech choice. true/false
import tts from '../config/tts';

//Screens
import HomeScreen from './Screens/HomeScreen';
import CameraScreen from './Screens/CameraScreen';
import LocateScreen from './Screens/LocateScreen';
import LegoPartScreen from './Screens/LegoPartScreen';
import { useState, useContext } from 'react';
import { useEffect } from 'react';

//Screen Names
const homeName = "Home";
const locateName = "Locate"
const cameraName = "Camera";
const settingsName = "Settings";
const legoPartsName = "Lego";

const Tab = createBottomTabNavigator();


export default function MainContainer(){
    const [themeMode, setThemeMode] = useState(false);
    const [ttsMode, setTtsMode] = useState(false);

    useEffect(() => {
      let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
        setThemeMode(data);
      });
      return() => {
        EventRegister.removeEventListener(eventListener);
      };
    })
  
    useEffect(() => {
      let eventListener = EventRegister.addEventListener("changeTts", (data) => {
        setTtsMode(data);
      });
      return() => {
        EventRegister.removeEventListener(eventListener);
      };
    });

    

    return(

        <ttsContext.Provider value = {ttsMode === true ? tts.true : tts.false}>
        <themeContext.Provider value = {themeMode === true ? theme.dark : theme.light}>
        <NavigationContainer >
          {/* This is the bottom navigator for the app. It initially starts at the home page, then navigates depending on what the user presses*/}
        <Tab.Navigator 
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarButton: [
              legoPartsName,
              settingsName,
            ].includes(route.name)
              ? () => {
                  return null;
                }
              : undefined,

            tabBarShowLabel: false,
            tabBarStyle: { height: 130, backgroundColor: themeMode === true ? "#1a1a1a" : "white" },
            
            tabBarIcon: ({ focused }) => {
              let outlined;
              let rn = route.name;
              
              {/*This will determine which screen is selected and apply the styles to the outlines and the text accordingly. */}
              if (rn === homeName) {
                outlined = focused ? '#ff0000' : '#808080';
                return (
                    <View>
                        <Entypo name="home" size={40} color={outlined} backgroundColor={"#ffffff"} />
                        <Text style={{color:outlined, fontSize:20,position:'relative',left:-5,bottom:-3,textAlign:'center'}}>Home</Text>
                    </View>
                )
                
              } else if (rn === cameraName) {
                outlined = focused ? '#ff0000' : '#808080';
                return (
                    <View>
                        <EvilIcons name="camera" size={50} color={outlined} backgroundColor={"#ffffff"} />
                        <Text style={{color:outlined, fontSize:20,position:'relative',left:-10,bottom:-3,textAlign:'center'}}>Identify</Text>
                    </View>
                )
  
              } 
              else if (rn === settingsName) {
                outlined = focused ? '#ff0000' : '#808080';
                return (
                    <View>
                        <Feather style={{ marginBottom: 0 }} name="menu" size={50} color={outlined} backgroundColor={"#ffffff"} />
                        <Text style={{color:outlined, fontSize:20,position:'relative',left:-5,bottom:-3,textAlign:'center'}}>Menu</Text>
                    </View>
                )
              }
              else if (rn === locateName) {
                outlined = focused ? '#ff0000' : '#808080';
                return (
                    <View>
                        <IonIcon name="locate" size={45} color={outlined} backgroundColor={"#ffffff"} />
                        <Text style={{color:outlined, fontSize:20,position:'relative',left:-5,bottom:-3,textAlign:'center'}}>Locate</Text>
                    </View>
                )
              } 
            },
          })}>
          

          <Tab.Screen options={{ headerShown: false}}name={homeName} component={HomeScreen} />
          <Tab.Screen options={{headerShown: false, unmountOnBlur: true,}} name={cameraName} component={CameraScreen} />
          <Tab.Screen options={{headerShown: false, unmountOnBlur: true,}} name={locateName} component={LocateScreen} />
          <Tab.Screen options={{ headerShown: false}} name={legoPartsName} component={LegoPartScreen} />

        </Tab.Navigator>
      </NavigationContainer>
      </themeContext.Provider>
      </ttsContext.Provider>
    );

}