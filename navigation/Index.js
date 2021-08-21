import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LogIn from '../screens/LoginScreen';
import Home from '../screens/Home';
import ComfirmDatacomponent from '../screens/ComfirmDatacomponent';
import LogInComponent from '../screens/Logincomponent';
import Setting from '../screens/Setting';

const RootStack = createStackNavigator(
  {

   Login: LogIn,
    ComfirmDatacomponent: ComfirmDatacomponent,
    Home: {
      screen: Home,
      navigationOptions: {
        title: "Home",
        headerStyle: {
          elevation: 1,
        },
      },
    },
   // Home :Home,
    Setting:Setting,
  },
   
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Index extends React.Component {
  render() {
    return <AppContainer />;
  }
}