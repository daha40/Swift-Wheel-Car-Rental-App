import { View, Text, StyleSheet, SafeAreaView ,Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import data from "./dataset/vehicles.json";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use appropriate icon from the library
import Toast from 'react-native-toast-message';
import { useSavedCars } from './SavedCarsContext';

const backTwo = require('../src/assets/icons/left-arrowTwo.png')
const back = require("../src/assets/icons/left-arrow.png");

const Image_v_1White = require('./assets/vehicles/v-1white.png')
const Image_v_1 = require('./assets/vehicles/v-1.png');
const Image_v_2 = require('./assets/vehicles/v-2.png');
const Image_v_3 = require('./assets/vehicles/v-3.png');
const Image_v_4 = require('./assets/vehicles/v-4.png');
const Image_v_5 = require('./assets/vehicles/v-5.png');
const Image_v_6 = require('./assets/vehicles/v-6.png');
const Image_v_7 = require('./assets/vehicles/v-7.png');
const Image_v_8 = require('./assets/vehicles/v-8.png');
const Image_v_9 = require('./assets/vehicles/v-9.png');
const Image_v_10 = require('./assets/vehicles/v-10.png');

const InfoScreen = ({route}) => {
  const vehicle = data.vehicles.filter(element => element.id == route.params.id)[0];
  const navigation = useNavigation()
  const [isSaved, setIsSaved] = useState(false);
  const { toggleSavedCar } = useSavedCars();
  const { isDarkMode } = route.params;

  const getImage = (id) => {
    if (id == 1) {
      return isDarkMode ? Image_v_1 : Image_v_1White
    } else if (id == 2) {
      return Image_v_2
    } else if (id == 3) {
      return Image_v_3
    } else if (id == 4) {
      return Image_v_4
    } else if (id == 5) {
      return Image_v_5
    } else if (id == 6) {
      return Image_v_6
    } else if (id == 7) {
      return Image_v_7
    } else if (id == 8) {
      return Image_v_8
    } else if (id == 9) {
      return Image_v_9
    } else if (id == 10) {
      return Image_v_10
    }
  }

  const toggleSave = () => {
    setIsSaved(!isSaved);
    toggleSavedCar(route.params.id);
    showSnackbar(!isSaved);

  };

  const showSnackbar = (isSaved) => {
    const message = isSaved ? 'Saved successfully!' : 'Removed from saved.';
    
    Toast.show({
      type: isSaved ? 'success' : 'error',
      text1: message,
      visibilityTime: 2000, 
    });
  };

  return (
    <SafeAreaView style={[styles.safeArea, isDarkMode && styles.safeAreaDark]}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <TouchableOpacity onPress={() => navigation.goBack() }>
            <Image source={isDarkMode? backTwo : back  } resizeMode='contain' style={styles.menuIconStyle}/>
          </TouchableOpacity>   
            <Text style={[styles.HeaderText, isDarkMode && styles.HeaderTextDark]}>Details</Text>
          <TouchableOpacity onPress={toggleSave}>
            <Icon name={isSaved ? 'bookmark' : 'bookmark-o'} size={30} color={isDarkMode ? 'white' : 'black' }/> 
          </TouchableOpacity>    
        </View>

        <View style={styles.imageSection}>
          <Image 
          source={getImage(vehicle.id)} 
          resizeMode='contain' 
          style={styles.vehicleImage}
          />
        </View>

        <View style={styles.headSection}>
          <View style={styles.topTextArea}>
            <Text 
            style={[styles.makemodelText, isDarkMode && styles.makemodelTextDark]}
            >
              {vehicle.make} {vehicle.model}
            </Text>
            <Text style={[styles.price, isDarkMode && styles.priceDark]} >
              <Text style={styles.amount}>€{vehicle.price_per_day}</Text>/Day
            </Text>
          </View> 
          <Text style={[styles.typetranText, isDarkMode && styles.typetranTextDark]}>{vehicle.type}-{vehicle.transmission}</Text>
        </View>
        
        <Text style={[styles.descriptionText, isDarkMode && styles.descriptionTextDark]}>{vehicle.description}</Text>
        <Text style={[styles.propertiesText, isDarkMode && styles.propertiesTextDark]}>Properties:</Text>
        
        <View style={styles.propertiesArea}>
          <View style={styles.level}>
            <Text style={styles.propertyText}> Motor Power:
              <Text style={styles.valueText}> {vehicle.properties.motor_power_hp} Hp</Text>
            </Text>
            <Text style={styles.propertyText}> Fuel:
              <Text style={styles.valueText}> {vehicle.properties.fuel_type}</Text>
            </Text>
          </View>

          <View style={styles.level}>
            <Text style={styles.propertyText}>Engine Capacity:
              <Text style={styles.valueText}> {vehicle.properties.engine_capacity_cc}</Text>
            </Text>
            <Text style={styles.propertyText}>Traction:
              <Text style={styles.valueText}> {vehicle.properties.traction}</Text>
            </Text>
          </View>
        </View>
      

      <TouchableOpacity style={[styles.rentButton, isDarkMode && styles.rentButtonDark]}>
        <Text style={[styles.rentButtonText, isDarkMode && styles.rentButtonTextDark]}>Rent Now</Text>
      </TouchableOpacity>
      <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFEF5",
  },
  safeAreaDark:{
    backgroundColor:'black',
  },
  container: {
    flex: 1,
    paddingRight: 35,
    paddingLeft: 35,
  },
  headerSection: {
    height: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIconStyle: {
    width: 20,
  },
  HeaderText: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: "500",
  },
  HeaderTextDark:{
    fontSize: 20,
    marginLeft: 5,
    fontWeight: "500",
    color:'white'
  },
  faceIconStyle: {
    width: 20,
  },

  imageSection: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  vehicleImage: {
    width: 300,
    height: 300,
  },
  topTextArea: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  makemodelText: {
    fontSize: 20,
    fontWeight: "500",
  },
  makemodelTextDark:{
    fontSize: 20,
    fontWeight: "500",
    color:'white'
  },
  price: {
    fontWeight: "400",
    fontSize:18
  },
  priceDark:{
    fontWeight: "400",
    fontSize:18,
    color:'white'
  },
  amount: {
    fontWeight: "bold",
  },
  typetranText: {
    marginTop: 1,
    color: "#696969",
    fontWeight: "600",
    fontSize: 12,
  },
  typetranTextDark:{
    marginTop: 1,
    color: "#DCD9D9",
    fontWeight: "600",
    fontSize: 12,
  },
  descriptionText: {
    marginTop: 30,
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 18,
    color: "#696969",
    fontWeight: "500",
  },
  descriptionTextDark:{
    marginTop: 30,
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 18,
    color: "#DCD9D9",
    fontWeight: "500",
  },
  propertiesText: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: "500",
  },
  propertiesTextDark:{
    marginTop: 20,
    fontSize: 19,
    fontWeight: "500",
    color:'white'
  },
  propertiesArea: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  level: {
    marginRight: 30,
  },
  propertyText: {
    fontSize: 12,
    color: "#A19F9F",
  },
  valueText: {
    fontSize: 12,
    color: "#A19F9F",
  },
  rentButton: {
    marginTop: 12,
    height: 45,
    alignSelf: "center",
    width: 120,
    backgroundColor: "black",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",   
  },
  rentButtonDark:{
    marginTop: 12,
    height: 45,
    alignSelf: "center",
    width: 120,
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",   
  },
  rentButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize:17,
  },
  rentButtonTextDark:{
    color: "black",
    fontWeight: "bold",
    fontSize:17,
  },
});



export default InfoScreen;