import {StyleSheet, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/HomeScreen';
import MapScreen from './src/MapScreen';
import SavedScreen from './src/SavedScreen';
import SettingsScreen from './src/SettingsScreen';
import InfoScreen from './src/InfoScreen';
import { SavedCarsProvider, useSavedCars } from './src/SavedCarsContext';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const homeIcon_active_dark = require('./src/assets/icons/home-active-dark.png');
const homeIcon_active = require('./src/assets/icons/home-active.png');
const homeIcon= require('./src/assets/icons/home.png');
const compass_active_dark = require('./src/assets/icons/compass-active-dark.png')
const compass_active = require('./src/assets/icons/compass-active.png');
const compass= require('./src/assets/icons/compass.png');
const savedIcon_active_dark = require('./src/assets/icons/saved-active-dark.png')
const savedIcon_active = require('./src/assets/icons/saved-active.png');
const savedIcon= require('./src/assets/icons/saved.png');
const SettingsIcon_active_dark = require('./src/assets/icons/settings-active-dark.png')
const SettingsIcon_active = require('./src/assets/icons/settings-active.png');
const SettingsIcon= require('./src/assets/icons/settings.png');


const HomeStack = () => {
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen name='Initiele' component={HomeScreen} />
      <Stack.Screen name='Info' component={InfoScreen}/>
    </Stack.Navigator>
  );
};


export default function App() {
  return (
    <SavedCarsProvider>
      <AppContent />
    </SavedCarsProvider>
  );
}

function AppContent() {
  const { isDarkMode } = useSavedCars();
  return (
      <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
          headerShown:false,
          tabBarIcon:({focused})=> {
            let IconName;


            if (route.name === 'Home') {
              IconName = focused ? isDarkMode ? homeIcon_active_dark : homeIcon_active : homeIcon;
            } else if (route.name === 'Map') {
              IconName = focused ? isDarkMode ? compass_active_dark : compass_active : compass;
            } else if (route.name === 'Saved') {
              IconName = focused ? isDarkMode ? savedIcon_active_dark : savedIcon_active : savedIcon;
            } else if (route.name === 'Settings') {
              IconName = focused ? isDarkMode ? SettingsIcon_active_dark : SettingsIcon_active : SettingsIcon;
            }

            return(
              <Image source={IconName} resizeMode='contain' style={styles.footerIcon}/>
            );
          },
          tabBarShowLabel:false,
          tabBarStyle:{
            padding:1,
            backgroundColor: isDarkMode ?  '#C8C8C8' : 'black',
            borderRadius:30,
            position:'absolute',
            elevation:1,
            marginBottom:10,
            width:340,
            marginHorizontal:10
          }
      })} 
      >
        <Tab.Screen name="Home" component={HomeStack}/>
        <Tab.Screen name="Map" component={MapScreen}/>
        <Tab.Screen name="Saved" component={SavedScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  footerIcon: {
    width: 25
  }
});


