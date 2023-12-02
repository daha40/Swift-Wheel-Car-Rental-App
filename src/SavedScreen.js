import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useSavedCars } from './SavedCarsContext';
import data from "./dataset/vehicles.json";


const backTwo = require('../src/assets/icons/left-arrowTwo.png')
const back = require("../src/assets/icons/left-arrow.png");

const SavedScreen = ({ navigation }) => {
  const { savedCars, clearSavedCars , isDarkMode} = useSavedCars();

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


  const getMakeModelForCarId = (carId) => {
    const car = data.vehicles.find((car) => car.id === carId);
    return car ? `${car.make} ${car.model}` : '';
  };
  
  const getTypeForCarId = (carId) => {
    const car = data.vehicles.find((car) => car.id === carId);
    return car ? `${car.type}` : '';
  };
  
  const getPriceForCarId = (carId) => {
    const car = data.vehicles.find((car) => car.id === carId);
    return car ? `€${car.price_per_day}/day` : '';
  };
  

  return (
    <SafeAreaView style={[styles.container, isDarkMode && styles.containerDark]}>
      <View style={styles.headerSection}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={isDarkMode? backTwo : back } resizeMode='contain' style={styles.backIconStyle} />
        </TouchableOpacity>
        <Text style={[styles.title, isDarkMode && styles.titleDark]}>Saved Cars</Text>
        <TouchableOpacity onPress={clearSavedCars} style={styles.clearAllBtn}>
          <Text style={[styles.clearAllButtonText, isDarkMode && styles.clearAllButtonTextdark]}>Clear All</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.savedCarsList}>
        {savedCars.map((carId) => (
          <TouchableOpacity
            key={carId} 
            style={[styles.savedCarItem, isDarkMode && styles.savedCarItemDark]}
            onPress={() => navigation.navigate('Info' , {id: carId , isDarkMode})}
          >
            <Image source={getImage(carId)} resizeMode='contain' style={styles.carImage} />
            <View style={styles.carInfo}>
              <Text style={[styles.carMakeModel, isDarkMode && styles.carMakeModelDark]}>{getMakeModelForCarId(carId)}</Text>
              <Text style={[styles.carType, isDarkMode && styles.carTypeDark]}>{getTypeForCarId(carId)}</Text>
              <Text style={[styles.carPrice, isDarkMode && styles.carPriceDark]}>{getPriceForCarId(carId)}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  containerDark:{
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor:'black'
  },
  headerSection: {
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIconStyle: {
    width: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 25,
  },
  titleDark: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 25,
    color:'white'
  },
  savedCarsList: {
  },
  savedCarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    elevation: 2,
  },
  savedCarItemDark:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    elevation: 2,
  },
  carImage: {
    width: 100,
    height: 70,
    borderRadius: 8,
    marginRight: 15,
  },
  carInfo: {
    flex: 1,
  },
  carMakeModel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  carMakeModelDark:{
    fontSize: 16,
    fontWeight: 'bold',
    color:'white'
  },
  carType: {
    fontSize: 14,
    color: '#696969',
  },
  carTypeDark:{
    fontSize: 14,
    color: '#BDBDBD',
  },
  carPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  carPriceDark:{
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color:'white'
  },
  clearAllButton: {
    backgroundColor: 'red', // Customize the button style
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  clearAllButtonText: {
    color: 'black', // Customize the button text style
    fontWeight: '600',
  },
  clearAllButtonTextdark:{
    color: 'white', // Customize the button text style
    fontWeight: '600',
  },
  clearAllBtn:{
    marginTop:6
  }
});

export default SavedScreen;
