import React, { Component } from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Scanner from './screen/scanner'
import Done from "./screen/done"

export default class App extends Component {
  render (){
    return(
    <View style={styles.container}>
                <Image
        style={styles.imageIcon}
        source={require('./assets/scanner.png')}/>
      
        <AppContaner/>

    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 150
  },
});
const TabNavigator = createBottomTabNavigator({
  screen1: { screen:  Scanner },
  screen2: {screen: Done}
})
const AppContaner = createAppContainer(TabNavigator);

