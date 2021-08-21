/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useEffect} from 'react';
 import type {Node} from 'react';
 import {
   StyleSheet,
   View,
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import OnboardingScreen from './screens/OnboardingScreen';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import Index from './navigation/Index';
 import Home from './screens/Home';
 
 const AppStack = createStackNavigator();
 
 const App: () => Node = () => {
      const [isFirstLanuch, setIsFirstLanuch] = React.useState(null);
      let routeName;
  
   useEffect(() => {
     AsyncStorage.getItem('alreadyLaunched').then(value => {
       if(value == null){
         AsyncStorage.setItem('alreadyLaunched','true');
         setIsFirstLanuch(true);
       }else{
         setIsFirstLanuch(false);
       }
     });
   }, []);
   if(isFirstLanuch === null){
     return null;
   }else if(isFirstLanuch === true){
     return(
       <NavigationContainer>
      <AppStack.Navigator>
         <AppStack.Screen name = "Onboarding" component = {OnboardingScreen} options = {{header:() =>null}}/>
         <AppStack.Screen name = "Index" component = {Index} options = {{header:() =>null}} />
      </AppStack.Navigator>
    </NavigationContainer>
     );
   }else{
    return(
     <Home/>
     );
   }
   
 };
 
 const styles = StyleSheet.create({
 });
 
 export default App;
 