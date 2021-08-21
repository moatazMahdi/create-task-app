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
 import Desing from './src/Desing'
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import OnboardingScreen from './screens/OnboardingScreen';
 import LoginScreen from './screens/LoginScreen';
 import AsyncStorage from '@react-native-async-storage/async-storage';
 import Confirm from './screens/ConfirmData';
 
 const Stack = createStackNavigator();
 
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
     routeName = 'Onboarding';
   }else{
     routeName = 'Login';
   }
   return(
     <NavigationContainer>
      <Stack.Navigator initialrouteName = {routeName}>
       <Stack.Screen name = "Onboarding" component = {OnboardingScreen} options = {{header:() =>null}}/>
       <Stack.Screen name = "Login" component = {LoginScreen}
        options={{header:() =>null }} />
       <Stack.Screen name = "Confirm" component = {Confirm}  options={{header:() =>null }}/>
 
    </Stack.Navigator>
  </NavigationContainer>
   );
 };
 
 const styles = StyleSheet.create({
 });
 
 export default App;
 