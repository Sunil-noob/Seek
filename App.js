/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React,{useEffect} from 'react';
import {StatusBar,SafeAreaView,StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import LandingScreen from './src/screens/LandingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';


const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
      SplashScreen.hide()
  }, []);
  return (
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="landing" component={LandingScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
  }
})

export default  () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <App />
    </SafeAreaView>
  )
};
