import * as React from 'react';
import { View, Text } from 'react-native';

export default function RecipeScreen({navigation}){
    return(
    <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}> 
        <Text
        onPress={() => navigation.navigate('Home')}
        style = {{ fontSize: 26, fontWeight: 'bold'}} > DetailsScreen </Text> 
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
      fontSize: 15
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
      fontSize: 15
    },
    topHeaderText:{
      color: '#fff',
      fontSize: 50,
      alignSelf: 'center',
    },    
    messageBox:{
      backgroundColor:'#F41CEA',
      width: 1600,
      paddingTop:0,
      paddingBottom:20,
      paddingLeft:20,
      paddingRight:20, 
      borderRadius:10,
      alignSelf: 'center'
    },
    userContainer: {
    flex: 1,
    backgroundColor: '#FA95F6', // #DAF7A6 #CBC3E3
    }
  });
  