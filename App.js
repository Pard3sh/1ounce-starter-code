import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.headerText}> Kitty Munches Home</Text>
      <View style = {styles.tapWrapper}>
      <Text style = {styles.tap}> Recipes </Text> 
      <Text style = {styles.tap}> Manage Recipes </Text> 
      <Text onPress={()=>alert('hello')} style = {styles.tapProfile}> User Profile </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA95F6', // #DAF7A6 #CBC3E3
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 50,
    alignSelf: 'center',
  }, 
  tapWrapper: {
    flex: 1,
    padding: 50,
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
    fontSize: 20
  },
  tapProfile: {
    backgroundColor: '#F571EF',
    width: 150,
    height: 150,
    alignSelf: 'center',
    margin: 30,
    color: '#fff',
    lineHeight: 150,
    textAlign: 'center',
    fontSize: 20
  }
});
