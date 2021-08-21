import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected})=>{
    let backgroundColor;
    backgroundColor = selected? 'rgba(0,0,0,0.8)': 'rgba(0,0,0,0.2)';

    return(
        <View 
        style = {{width:5,height:5,marginHorizontal:3,backgroundColor}}
        />
    );
}
const Skip = ({...props})=>(
    <TouchableOpacity style = {{marginHorizontal:10}} {...props}>
        <Text>Skip</Text>
    </TouchableOpacity>
);
const Next = ({...props})=>(
    <TouchableOpacity style = {{marginHorizontal:10}} {...props}>
        <Text>Next</Text>
    </TouchableOpacity>
);
const Done = ({...props})=>(
    <TouchableOpacity style = {{marginHorizontal:10}} {...props}>
        <Text>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
      <Onboarding
       SkipButtonComponent={Skip}
       NextButtonComponent={Next}
       DoneButtonComponent={Done}
       DotComponent={Dots}
       onSkip={() => navigation.replace("Index")}
       onDone={() => navigation.navigate("Index")}
        //Login
        pages={[
          {
            backgroundColor: '#a6e4d0',
            image: <Image style = {{width:200,height:200}} source={require('../images/slide1.png')} />,
            title: 'Connect to the World',
            subtitle: 'A New Way To Connect With The World',
          },
          {
            backgroundColor: '#fdeb93',
            image: <Image style = {{width:200,height:200}} source={require('../images/slide2.png')} />,
            title: 'Share Your Favorites',
            subtitle: 'Share Your Thoughts With Similar Kind of People',
          },
          {
            backgroundColor: '#e9bcbe',
            image: <Image style = {{width:200,height:200}} source={require('../images/slide3.png')} />,
            title: 'Become The Star',
            subtitle: "Let The Spot Light Capture You",
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});