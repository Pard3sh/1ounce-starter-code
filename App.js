import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import MainContainer from './navigation/MainContainer';

// First Screen, will have buttons
const HomePage = () => {
  return (

    <View style={styles.container}>
      {/* Header */}
      <View style={styles.messageBox}>
        <Text style={styles.headerText}> Kitty Munches Home</Text>
      </View>
      {/* Body */}
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyText}>
          Welcome to Kitty Munches! Treat your pet to some veterinarian approved home made cat food using our recipes! Select the Recipes button to see available recipes or select the Profile button to see your profile.
        </Text>
      </View>
      <View style={styles.tapWrapper}>
        {/* Menu Screen Options */}
        <Text
          onPress={() => alert('Recipes Button')} style={styles.tap}>Recipes</Text>
        <Text onPress={() => alert('Profile Button')} style={styles.tapProfile}> Profile </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


// Second Screen (Will have profile information)
const UserProfile = () => {
  return (
    <View style={styles.userContainer}>
      <View style={styles.messageBox}>
        <Text style={styles.topHeaderText}> Profile </Text>
      </View>
      <View style = {styles.profileContainer}>
        <Image source={require('../RecipeApplication/assets/profile-icon.png')} style={{ width: 150, height: 150, alignSelf: 'center' }}/> 
      </View> 
      <View style = {styles.contactContainer}>  
        <Text style = {styles.contactText}> Name: Pardesh Dhakal </Text>
        <Text style = {styles.contactText}> Phone: 973-732-8527</Text>
      </View>
      <View style = {styles.levelContainer}>
        <Text style = {styles.levelHeaderText}> Cooking Level: Beginner </Text>
        <Text style = {styles.levelText}> Recipes Cooked: 0 </Text>
        <Text style = {styles.levelText}> Recipes Created: 1</Text>
      </View>
    </View>
  )
}



//Third Screen
const Recipes = () => {
  
}




export default function App() {
  return (
    <UserProfile />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA95F6',
    justifyContent: 'center',
  },
  bodyContainer: {
    backgroundColor: '#F14BEA',
    justifyContent: 'center',
    marginTop: 60,
    flex: 0.3
  },
  bodyText: {
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'sans-serif',
    fontSize: 16
  },
  headerText: {
    color: '#fff',
    fontSize: 50,
    alignSelf: 'center',
    fontFamily: 'sans-serif',
  },
  tapWrapper: {
    flex: 1,
    marginTop: 0,
    marginBottom: 30,
    flexDirection: 'row',
    alignSelf: 'center',
    flexWrap: 'wrap'
  },
  tap: {
    backgroundColor: '#F571EF',
    width: 150,
    height: 150,
    alignSelf: 'center',
    margin: 30,
    color: '#fff',
    lineHeight: 150,
    textAlign: 'center',
    fontSize: 30
  },
  tapProfile: {
    backgroundColor: '#F571EF',
    width: 150,
    height: 150,
    alignSelf: 'center',
    margin: 15,
    color: '#fff',
    lineHeight: 150,
    textAlign: 'center',
    fontSize: 30
  },
  topHeaderText: {
    color: '#fff',
    fontSize: 50,
    alignSelf: 'center',
    fontFamily: 'sans-serif'
  },
  messageBox: {
    backgroundColor: '#F41CEA',
    width: 1600,
    paddingTop: 0,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    alignSelf: 'center'
  },
  userContainer: {
    flex: 1,
    backgroundColor: '#FA95F6', // #DAF7A6 #CBC3E3
  },
  contactContainer: {
    alignContent: 'center',
    marginTop: 10
  },
  contactText: {
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'sans-serif',
    fontSize: 20
  },
  profileContainer: {
    marginTop: 10
  },
  levelContainer: {
    marginTop: 50,
    backgroundColor: '#F57CF0',
    alignContent: 'center',
    flex: 0.5
  },
  levelHeaderText: {
    color: "#fff",
    alignSelf: 'center',
    marginTop: 25,
    fontSize: 30,
    fontFamily: 'sans-serif'
  },
  levelText:{
    color: "#fff",
    alignSelf: 'center',
    fontSize: 15,
    fontFamily: 'sans-serif',
    marginTop: 10
  }
});
