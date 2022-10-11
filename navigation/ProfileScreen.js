import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';


// Second Screen (Will have profile information)
export default function ProfileScreen({navigation}){
    return (
    <View style = {styles.container}> 
      <View style={styles.userContainer}>
        <View style={styles.messageBox}>
          <Text style={styles.topHeaderText}> Profile </Text>
        </View>
        <View style = {styles.profileContainer}>
          <Image source={require('../assets/profile-icon.png')} style={{ width: 150, height: 150, alignSelf: 'center' }}/> 
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
      </View>
    )
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
      marginTop: 50,
      flex: 0.8,
  
    },
    bodyText: {
      alignSelf: 'center',
      color: '#fff',
  
      fontSize: 16,
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
      marginTop: 10,
      marginBottom: 160,
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
      marginTop: 180,
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
      marginTop: 180,
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
      marginTop: 40,
      marginBottom: 15
    },
    levelContainer: {
      marginTop: 40,
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
  