import * as React from 'react';
import { View, Text, TabBarIOSItem } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { color } from 'react-native-reanimated';
import HomePage from './HomeScreen';


const recipeName = "Recipe";
const homeName = "Home";
const profileName = "Profile"

const Tab = createBottomTabNavigator()

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName = {homeName}
            screenOptions = {({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn == homeName){
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn == recipeName){
                        iconName = focused ? 'recipe': 'recipe-outline'
                    } else if (rn == profileName){
                        iconName = focused ? 'profile': 'profile-outline'
                    }

                    return <Ionicons name = {iconName} size ={size} color = {color}/>
                },
            })}>

                <Tab.Screen name = {homeName} component = {HomePage}/>
                
            </Tab.Navigator>
            </NavigationContainer>
    );
}