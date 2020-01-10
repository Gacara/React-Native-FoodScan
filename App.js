import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/views/Home';
import FavScreen from './src/views/Favoris';
import ApiScreen from './src/views/Api';
import ScanScreen from './src/views/Scan';
import ProduitScreen from './src/views/Produit';




class SettingsScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>test</Text>
        </View>
    );
  }
}


const HomeStack = createStackNavigator({
 
    Scanifood: ScanScreen,
    Produit: ProduitScreen
  },
    
  {
    initialRouteName: 'Scanifood',
  }
);



const TabNavigator = createBottomTabNavigator({

  Home: {screen: HomeStack,
    navigationOptions: {
      
      tabBarIcon: () => { 
        return <Image
          source={require('./src/img/home.png')}
          style={styles.icon}/> 
      }
    }},
  
  
  Favoris: {screen: FavScreen,
    navigationOptions: {
      
      tabBarIcon: () => { 
        return <Image
          source={require('./src/img/match.png')}
          style={styles.icon}/> 
      }
    }},
  Sojasun: {screen: ApiScreen,
    navigationOptions: {
      
      tabBarIcon: () => { 
        return <Image
          source={require('./src/img/logo.png')}
          style={styles.icon}/> 
      }
    }},


});

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})

export default createAppContainer(TabNavigator);