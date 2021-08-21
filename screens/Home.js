import React from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView, ScrollView,TextInput,TouchableOpacity,StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import IconFeather from 'react-native-vector-icons/dist/Feather';
import {createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Setting from './Setting';
import HomeComponent from './Homecomponent';

function Home({navigation}) {
    return(
        <View style = {{flex:1,backgroundColor:"#ffffff"}}>
               <StatusBar 
                backgroundColor = "rgba(0,0,0,0.9)"
                barStyle = "light-content"
                animated={true}
            />
            <HomeComponent/>
        <ScrollView >
         
        <View style = {styles.container}>
            <View style = {styles.sectionone}>
                <View style = {{flexDirection:'row',margin:10,alignItems:'center'}}>
                    <Image style = {{width: 50, height: 50, borderRadius: 50/ 2}} source={require('../images/slide1.png')} />
                    <View style = {{marginLeft:10}}>
                        <Text style = {{fontSize:15,fontWeight: 'bold'}}>Jenny Doe</Text>
                        <Text>4 mains ago</Text>
                    </View>
                </View>
                <Text style = {{margin:10,marginLeft:15}}>Hey there,this is my test for a post of my social app in React Native</Text>
                <Image style = {{width: '100%', height: 230,}} source={require('../images/slide2.png')} />
                <View style = {{flexDirection:'row',padding:10,width:'100%'}}>
                    <View style = {{width:'50%'}}>
                        <View style = {styles.sociallikeone}>
                            <Icon style={{marginRight:5,}} name="heart" size={20} color="rgba(0, 0, 255,0.7)"/>
                            <Text style = {{color:'rgba(0, 0, 255,0.7)'}}>14 Likes</Text>
                        </View>
                    </View>
                    <View style = {styles.socialcommentone}>
                        <IconFeather style={{marginRight:5,}} name="message-circle" size={20} color = 'rgba(0,0,0,0.4)' />
                        <Text>5 Comments</Text>
                    </View>
                </View>
            </View>
            <View style = {styles.sectionotwo}>
                <View style = {{flexDirection:'row',margin:10,alignItems:'center'}}>
                    <Image style = {{width: 50, height: 50, borderRadius: 50/ 2}} source={require('../images/slide4.png')} />
                    <View style = {{marginLeft:10}}>
                        <Text style = {{fontSize:15,fontWeight: 'bold'}}>Jenny Doe</Text>
                        <Text>2 hours ago</Text>
                    </View>
                </View>
                <Text style = {{margin:10,marginLeft:15}}>Hey there,this is my test for a post of my social app in React Native</Text>
                <View style = {{borderWidth:0.5,marginLeft:5}}></View>
                <View style = {{flexDirection:'row',padding:10,width:'100%'}}>
                    <View style = {{width:'50%'}}>
                        <View style = {styles.socialliketwo}>
                            <IconFeather style={{marginRight:5,}} name="heart" size={20} color="rgba(0, 0, 0,0.4)"/>
                            <Text> Likes</Text>
                        </View>
                    </View>
                    <View style = {styles.socialcommenttwo}>
                        <IconFeather style={{marginRight:5,}} name="message-circle" size={20} color = 'rgba(0,0,0,0.4)' />
                        <Text> Comments</Text>
                    </View>
                </View>
            </View>
            
        </View>
        </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#ffffff',
        padding:15
    },
    sectionone:{
        backgroundColor:'rgba(0,0,0,0.1)',
        width:'100%',
        height:420,
        borderRadius:5,
        paddingRight:5
    },
    sociallikeone:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        backgroundColor:'rgba(0, 0, 255,0.1)',
        padding:10,
        width:'70%',
        borderRadius:5
    },
    socialcommentone:{
        flexDirection:'row',
        justifyContent:"flex-end",
        alignItems:"center",
        padding:10,
        width:'50%'
    },
    sectionotwo:{
        backgroundColor:'rgba(0,0,0,0.1)',
        width:'100%',
        height:190,
        borderRadius:5,
        paddingRight:5,
        marginTop:15
    },
    socialliketwo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        padding:10,
        width:'70%',
        borderRadius:5
    },
    socialcommenttwo:{
        flexDirection:'row',
        justifyContent:"flex-end",
        alignItems:"center",
        padding:10,
        width:'50%'
    },
   
});

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen:Home,
            navigationOptions:{
                tabBarIcon:({tintColor}) => (
                    <View>
                     <Icon style = {[{color:tintColor}]} name="home" size={25}/>
                    </View>
                ),
            }
        },
        Setting: {
            screen:Setting,
            navigationOptions:{
                tabBarIcon:({tintColor}) => (
                    <View>
                     <Icon style = {[{color:tintColor}]} name="cog" size={25}/>
                    </View>
                ),
            }
        }
    },
    {
        initialRouteName: 'Home',
        activeColor: '#1a1aff',
        inactiveColor: 'rgba(15,15,10,0.4) ',
        barStyle: { backgroundColor: '#ffffff' },
      }
)


export default createAppContainer(TabNavigator);