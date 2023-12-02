import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSavedCars } from './SavedCarsContext';

const SettingsScreen = () => {
  const navigation = useNavigation()
  const {isDarkMode} = useSavedCars();

  const handleLogout = () => {
    console.log('User logged out');
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkMode]}>
      <View style={styles.headerSection}>
        <TouchableOpacity>
          <Icon name="user" size={25} color={isDarkMode ? 'white' : 'black'} />
        </TouchableOpacity>

        <Text style={[styles.title, isDarkMode && styles.titleDr]}>Settings</Text>

        <TouchableOpacity style={[styles.button, isDarkMode && styles.buttonDr]} onPress={handleLogout}>
          <Text style={[styles.buttonText, isDarkMode && styles.buttonTextDr]}>Logout</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.featureItem}>
        <Icon name="bell" size={20} color={isDarkMode ? 'white' : 'black'} />
        <Text style={[styles.featureText, isDarkMode && styles.featureTextdr]}>Notification Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.featureItem} >
        <Icon name="cogs" size={20} color={isDarkMode ? 'white' : 'black'}/>
        <Text style={[styles.featureText, isDarkMode && styles.featureTextdr]}>Account Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.featureItem}>
        <Icon name="moon-o" size={20} color={isDarkMode ? 'white' : 'black'} />
        <Text style={[styles.featureText, isDarkMode && styles.featureTextdr]}>Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.featureItem}>
        <Icon name="language" size={20} color={isDarkMode ? 'white' : 'black'} />
        <Text style={[styles.featureText, isDarkMode && styles.featureTextdr]}>Language</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.featureItem}>
        <Icon name="lock" size={20} color={isDarkMode ? 'white' : 'black'} />
        <Text style={[styles.featureText, isDarkMode && styles.featureTextdr]}>Security</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.featureItem} >
        <Icon name="lock" size={20} color={isDarkMode ? 'white' : 'black'} />
        <Text style={[styles.featureText, isDarkMode && styles.featureTextdr]}>Privacy Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.featureItem} >
        <Icon name="star" size={20} color={isDarkMode ? 'white' : 'black'} />
        <Text style={[styles.featureText, isDarkMode && styles.featureTextdr]}>Rate the App</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.featureItem}>
        <Icon name="question-circle" size={20} color={isDarkMode ? 'white' : 'black'} />
        <Text style={[styles.featureText, isDarkMode && styles.featureTextdr]}>Help Center</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.featureItem} >
        <Icon name="file-text-o" size={20} color={isDarkMode ? 'white' : 'black'} />
        <Text style={[styles.featureText, isDarkMode && styles.featureTextdr]}>Terms of Service</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.featureItem}>
        <Icon name="comments" size={20} color={isDarkMode ? 'white' : 'black'} />
        <Text style={[styles.featureText, isDarkMode && styles.featureTextdr]}>Feedback</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
  },
  darkMode:{
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft:20,
  },
  titleDr:{
    fontSize: 20,
    fontWeight: '500',
    marginLeft:20,
    color:'white'
  },
  button: {
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 8,
    marginTop: 5,
  },
  buttonDr:{
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  buttonTextDr:{
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
  headerSection: {
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  featureText: {
    marginLeft: 15,
    fontSize: 16,
  },
  featureTextdr:{
    marginLeft: 15,
    fontSize: 16,
    color:'white'
  },
});

export default SettingsScreen;
