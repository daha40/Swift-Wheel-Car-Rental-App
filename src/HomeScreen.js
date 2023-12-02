import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  Image,
  TextInput, 
  ScrollView, 
  TouchableOpacity, 
  Linking,
} from 'react-native';
import React, { useState } from 'react';
import data from './dataset/vehicles.json'
import MenuModal from './MenuModal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSavedCars } from './SavedCarsContext';


const menuOne = require("../src/assets/icons/menuOne.png");
const menu = require("../src/assets/icons/menu.png");
const face = require("../src/assets/face.png");
const manifying_glass = require("../src/assets/icons/magnifying-glass.png");

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


const HomeScreen = ({ navigation }) => {
  const [vehicles, setvehicles] = useState(data.vehicles);
  const [filteredVehicles, setFilteredVehicles] = useState(data.vehicles);
  const [selectedType, setSelectedType] = useState('All');
  const [isMenuVisible, setMenuVisible] = useState(false);
  //const [isDarkMode, setIsDarkMode] = useState(false);
  const {TheDarkMode , isDarkMode} = useSavedCars();


  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

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

  const searchVehicles = (keyword) => {
    const lowerCaseKeyword = keyword.toLowerCase();
    const Results = vehicles.filter(vehicle => {
      return vehicle.make.toLocaleLowerCase().includes(lowerCaseKeyword)
    })
    setFilteredVehicles(Results)
  }

  const handleTypeSelection = (type) => {
    const filteredResults = type.toLowerCase() === 'all'
      ? vehicles
      : vehicles.filter(vehicle => vehicle.type.toLowerCase() === type.toLowerCase());
    setFilteredVehicles(filteredResults);
    setSelectedType(type);
};

  return (
    <SafeAreaView  style={[styles.container, isDarkMode && styles.darkMode]}>
      <View style={[styles.container, isDarkMode && styles.darkMode]}> 
        <View style={styles.headerSection}>
          <TouchableOpacity onPress={toggleMenu}>
            <Image source={isDarkMode? menuOne : menu} resizeMode='contain' style={styles.menuIconStyle}/>
          </TouchableOpacity>  

          <TouchableOpacity
          onPress={TheDarkMode}
          >
            <Icon name={isDarkMode ? 'sun-o' : 'moon-o'} size={20} color={isDarkMode ? 'white' : 'black'} />
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={() => Linking.openURL('https://github.com/daha40')}
          >
              <Image source={face} resizeMode='contain' style={styles.faceIconStyle}/>
          </TouchableOpacity>  
        </View>

        <View style={styles.titleSection}>
          <Text style={[styles.title, isDarkMode && styles.darkMode]}>Car Rental Services</Text>
        </View>

        <View style={styles.searchSection}>
          <View style={styles.searchPallet}>
            <TextInput 
            style={styles.searchInput}
            placeholder='Search Here'
            onChangeText={(text) => searchVehicles(text)}
            />
            <View style={styles.searchIconArea}>
              <Image 
              source={manifying_glass}
              resizeMode='contain'
              style={styles.magnifyingIconStyle}
              />
            </View>
          </View>
        </View>

                <View style={styles.typesSection} >
                  <TouchableOpacity onPress={() => handleTypeSelection('All')}>
                    <Text style={isDarkMode? selectedType === 'All' ? styles.typesTextActiveDark : styles.typesTextDark : selectedType === 'All' ? styles.typesTextActive : styles.typesText} >
                      All
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleTypeSelection('Suv')}>
                    <Text style={isDarkMode? selectedType === 'Suv' ? styles.typesTextActiveDark : styles.typesTextDark : selectedType === 'Suv' ? styles.typesTextActive : styles.typesText}>
                      SUV
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleTypeSelection('Electric')}>
                    <Text style={isDarkMode? selectedType === 'Electric' ? styles.typesTextActiveDark : styles.typesTextDark : selectedType === 'Electric' ? styles.typesTextActive : styles.typesText}>
                      Electric
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleTypeSelection('MPV')}>
                    <Text style={isDarkMode? selectedType === 'MPV' ? styles.typesTextActiveDark : styles.typesTextDark : selectedType === 'MPV' ? styles.typesTextActive : styles.typesText}>
                      MPV
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleTypeSelection('Off-road')}>
                    <Text style={isDarkMode? selectedType === 'Off-road' ? styles.typesTextActiveDark : styles.typesTextDark : selectedType === 'Off-road' ? styles.typesTextActive : styles.typesText}>
                      Off-road
                    </Text>
                  </TouchableOpacity>
                </View>

        <View style={styles.listSection}>
          <Text style={[styles.headText, isDarkMode && styles.darkMode]}>Top Car Rentals</Text>
        
          <ScrollView style={styles.elementPallet} showsVerticalScrollIndicator={false}>
            {
              filteredVehicles.map(vehicle => {
                return(
                  <TouchableOpacity 
                    style={[styles.element, isDarkMode && styles.elementDark]}
                    key={vehicle.id} 
                    onPress={() => navigation.navigate('Info' , {id: vehicle.id , isDarkMode})}>
                    <View style={styles.infoArea}>
                      <Text 
                      style={[styles.infoTitle, isDarkMode && styles.infoTitleDark]}
                      >
                        {vehicle.make} {vehicle.model}
                      </Text>
                      <Text style={[styles.infoSub, isDarkMode && styles.infoSubDark]}>
                        {vehicle.type}-{vehicle.transmission}
                      </Text>
                      <Text style={[styles.infoPrice, isDarkMode && styles.infoPriceDark]}>
                        <Text style={[styles.infoAmount, isDarkMode && styles.infoAmountDark]}>
                          €{vehicle.price_per_day}
                        </Text>/Day
                      </Text>
                    </View>
                    <View style={styles.imageArea}>
                      <Image source={getImage(vehicle.id)} resizeMode='contain' style={styles.vehicleImage}/>
                    </View>
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </View>
        <MenuModal isVisible={isMenuVisible} toggleMenu={toggleMenu} isDarkMode={isDarkMode}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
  },
  container: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
  },
  darkMode: {
    backgroundColor: 'black',
    color:'white',
  },
  headerSection: {
    height: 120,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuIconStyle: {
    width: 30,
  },
  faceIconStyle: {
    width: 40,
  },

  titleSection: {
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
  },

  searchSection: {
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: "center",
  },
  searchPallet: {
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    borderRadius: 8,
    width: "100%",
    height: 30,
    backgroundColor: "white",
    elevation:1
  },
  searchInput: {
    width: 245,
    height: 30,

    backgroundColor: "white",
  },
  searchIconArea: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  magnifyingIconStyle: {
    width: 24,
    height: 24,
    marginRight: 40,
  },

  typesSection: {
    marginTop: 15,
    flexDirection: "row",
  },
  typesTextActive: {
    fontSize: 15,
    marginRight: 34,
    fontWeight: "bold",
    color: "black",
    paddingLeft:5,
    paddingRight:5,
    borderColor:'black',
    borderRadius:5,
    borderWidth:1,
  },
  typesText: {
    fontSize: 14,
    marginRight: 33,
    fontWeight: "500",
    color: "#696969",
  },

  listSection: {
    marginTop: 25,
  },
  headText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  elementPallet: {
    marginLeft: -15,
    paddingLeft: 15,
    paddingRight: 15,
    width: "110%",
    height: 450,

  },
  element: {
    height: 100,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom: 13,
    elevation:1,
  },
  elementDark:{
    height: 100,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#000000",
    flexDirection: "row",
    marginBottom: 13,
    borderBottomColor:'white',
    borderWidth:0.30
  },
  infoArea: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  infoSub: {
    fontSize: 11,
    fontWeight: "600",
    color: "#696969",
  },
  infoPrice: {
    position: "absolute",
    bottom: 0,
    fontSize: 10,
    color: "#696969",
    fontWeight: "bold",
  },
  infoAmount: {
    fontSize: 12,
    color: "black",
    fontWeight: "600",
  },
  infoAreaDark: {
    flex: 1,
    color: "white",
  },
  infoTitleDark: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  infoSubDark: {
    fontSize: 11,
    fontWeight: "600",
    color: "white",
  },
  infoPriceDark: {
    position: "absolute",
    bottom: 0,
    fontSize: 10,
    color: "white",
    fontWeight: "bold",
  },
  infoAmountDark: {
    fontSize: 12,
    color: "white",
    fontWeight: "600",
  },
  imageArea: {
    flex: 1,
  },
  vehicleImage: {
    position: "absolute",
    top: -15,
    left: -15,
    width: "120%",
    height: "140%",
  },
  leftModal: {
    justifyContent: 'flex-start',
    margin: 0,
    marginLeft: 0,
  },
  modalContainer: {
    width: 300,
    height: '100%',
    backgroundColor: 'white',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#001f3f',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  ByTxt:{
    marginLeft:80,
    fontSize:10,
    marginTop:5,
  },
  MenuTxt:{
    marginHorizontal:10
  },
  darkModeMenu:{},
  typesTextActiveDark: {
    fontSize: 15,
    marginRight: 34,
    fontWeight: "bold",
    color: "white",
    paddingLeft:5,
    paddingRight:5,
    borderColor:'white',
    borderRadius:5,
    borderWidth:1,
  },
  typesTextDark: {
    fontSize: 14,
    marginRight: 33,
    fontWeight: "500",
    color: "#E5D8D8",
  },
});

export default HomeScreen;
