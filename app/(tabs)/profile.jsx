import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function Profile() {
  // Load Montserrat fonts
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require('../../assets/fonts/Montserrat-Regular.ttf'),
    "Montserrat-Bold": require('../../assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      {/* Search Bar with Icon inside */}
      <View style={styles.searchContainer}>
       
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F0CCFF',
    paddingTop: 20,
  },

  searchContainer: {
    position: 'relative',
    width: 340,
    marginBottom: 20,
  },

  searchBar: {
    backgroundColor: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 50,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#333',
    borderColor: '#ddd',
    borderWidth: 1,
  },

  searchIcon: {
    position: 'absolute',
    left: 10,
    top: '50%', // Center vertically
    transform: [{ translateY: -10 }], // Adjust for centering
    width: 20,
    height: 20,
  },

  banner: {
    width: 370,
    height: 170,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#de88ff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});

