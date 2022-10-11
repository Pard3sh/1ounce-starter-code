import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';



// First Screen, will have buttons
export default function HomeScreen({navigation}){
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
          {'\n'}
        </Text>
        <Text style = {styles.warningText}>Warning: Making cat food at home is not for every cat parent! It is good for cats who have very specific allergies and/or cat parents who have the time and resources to give their cat(s) a balanced diet. The recipe below has a veterinarian formulated recipe. </Text> 
      </View>
      <View style = {styles.warningContainer}>
      <Text style = {styles.warningText}>  </Text> 
    </View>
      <View style={styles.tapWrapper}>
        {/* Menu Screen Options */}
        <Text
          onPress={() => navigation.navigate('Recipe')} style={styles.tap}>Recipe</Text>
        <Text onPress={() => navigation.navigate('Profile')} style={styles.tapProfile}> Profile </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1600,
    backgroundColor: '#FA95F6',
    justifyContent: 'center',
  },
  bodyContainer: {
    backgroundColor: '#F14BEA',
    justifyContent: 'center',
    marginTop: 0,
    flex: 8,

  },
  bodyText: {
    alignText: 'center',
    color: '#fff',
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,

  },
  warningText: {
    alignSelf: 'center',
    color: '#fff',

    fontSize: 12,
    marginLeft: 20,
    marginRight: 20,

  },
  headerText: {
    color: '#fff',
    fontSize: 40,
    alignSelf: 'center',

    marginTop: 40
  },
  tapWrapper: {
    flex: 1,
    marginTop: 0,
    marginBottom: 300,
    flexDirection: 'row',
    alignSelf: 'center',
    flexWrap: 'wrap'
  },
  tap: {
    backgroundColor: '#F571EF',
    width: 150,
    height: 150,
    alignSelf: 'center',
    margin: 15,
    marginTop: 120,
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
    marginTop: 120,
    color: '#fff',
    lineHeight: 150,
    textAlign: 'center',
    fontSize: 30
  },
  topHeaderText: {
    color: '#fff',
    fontSize: 50,
    alignSelf: 'center',

  },
  topRecipeText: {
    color: '#fff',
    fontSize: 25,
    alignSelf: 'center',

    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15
  },
  messageBox: {
    backgroundColor: '#F41CEA',
    width: 1600,
    paddingTop: 25,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    alignSelf: 'center'
  },
  userContainer: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#FA95F6', 
  },
  contactContainer: {
    alignContent: 'center',
    marginTop: 10
  },
  contactText: {
    alignSelf: 'center',
    color: '#fff',

    fontSize: 20
  },
  profileContainer: {
    marginTop: 70,
    marginBottom: 15
  },
  levelContainer: {
    marginTop: 110,
    backgroundColor: '#F57CF0',
    alignContent: 'center',
    height: 150
  },
  levelHeaderText: {
    color: "#fff",
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 30,
    marginBottom: 8

  },
  ingredientsHeaderText: {
    color: "#fff",
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 30,
    marginBottom: 0

  },
  levelText:{
    color: "#fff",
    alignSelf: 'center',
    fontSize: 15,

    marginTop: 10
  },
  ingredientContainer: {
    backgroundColor: '#F571EF',
    flex: 0.47
  }, 
  ingredientText: {
    color: "#fff",
    font: 30,
    textAlign: 'center',
    marginLeft: 15
  }, 
  instructionsContainer: {
    marginTop: 0,
    backgroundColor: '#F57CF0',
    flex: 0.38
  }, 
  instructionsText: {
    color: "#fff",
    font: 30,
    textAlign: 'center',
    marginLeft: 15
  },
  foodImageContainer: {
    marginBottom: 15,
    marginTop: 40
  }
});
