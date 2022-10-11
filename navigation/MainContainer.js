import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
//Nav Bar Imports
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
// Screens
import HomeScreen from './HomeScreen';
import RecipeScreen from './RecipeScreen';
import ProfileScreen from './ProfileScreen';

const homeName = 'Home';
const recipeName = 'Recipe';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer> 
            <Tab.Navigator
            initialRouteName={homeName} screenOptions= {({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn == homeName){
                        iconName = focused ? 'home': 'home-outline';
                    } else if (rn == recipeName){
                        iconName = focused ? 'list':'list-outline';
                    } else if (rn == profileName){
                        iconName = focused ? 'settings':'settings-outline';
                    }
                    return <Ionicons name = {iconName} size={size} color={color}/>
                }
            })}> 

            <Tab.Screen name={homeName} component = {HomeScreen}/>
            

        </Tab.Navigator>
        </NavigationContainer>
    )
}