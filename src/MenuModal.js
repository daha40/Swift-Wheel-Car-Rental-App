import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const MenuModal = ({ isVisible, toggleMenu, isDarkMode }) => {

  const navigation = useNavigation();
  
  return (
    <Modal 
    isVisible={isVisible}
    style={styles.leftModal} 
    swipeDirection={['left']}
    onSwipeComplete={toggleMenu}
    onBackdropPress={toggleMenu}
    animationIn="slideInLeft" 
    animationOut="slideOutLeft" 
    >
      <View style={[styles.modalContainer, isDarkMode && styles.modalContainerDark]}>
        <Text style={[styles.modalTitle, isDarkMode && styles.modalTitleDark]}>Menu</Text>
        
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="home" size={20} color={isDarkMode? "#fff" : "#000"} />
          <Text style={[styles.MenuTxt, isDarkMode && styles.MenuTxtDark]}>Home</Text> 
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="map" size={20} color={isDarkMode? "#fff" : "#000"} />
          <Text style={[styles.MenuTxt, isDarkMode && styles.MenuTxtDark]}>Maps</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="heart" size={20} color={isDarkMode? "#fff" : "#000"} />
          <Text style={[styles.MenuTxt, isDarkMode && styles.MenuTxtDark]}>Favorite Cars</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="cog" size={20} color={isDarkMode? "#fff" : "#000"} />
          <Text style={[styles.MenuTxt, isDarkMode && styles.MenuTxtDark]}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="life-ring" size={20} color={isDarkMode? "#fff" : "#000"}/>
          <Text style={[styles.MenuTxt, isDarkMode && styles.MenuTxtDark]}>Help/Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Icon name="info-circle" size={20} color={isDarkMode? "#fff" : "#000"} />
          <Text style={[styles.MenuTxt, isDarkMode && styles.MenuTxtDark]}>About Us</Text>
        </TouchableOpacity>

        <Text style={[styles.ByTxt, isDarkMode && styles.ByTxtBlack]}>© Abderahmane Kateb</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  modalContainerDark:{
    width: 300,
    height: '100%',
    backgroundColor: 'black',
    padding: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalTitleDark:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white'
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  ByTxt: {
    marginLeft: 80,
    fontSize: 10,
    marginTop: 5,
  },
  ByTxtBlack:{
    marginLeft: 80,
    fontSize: 10,
    marginTop: 5,
    color:'white'
  },
  MenuTxt: {
    marginHorizontal: 10,
  },
  MenuTxtDark:{
    marginHorizontal: 10,
    color:'white',
  }
});



export default MenuModal;
