import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity,Switch  } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Aicons from 'react-native-vector-icons/dist/FontAwesome5';
import Aiconss from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Logout from 'react-native-vector-icons/dist/SimpleLineIcons';
import HomeComponent from './Homecomponent';

export default function Setting({navigation}) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View style = {{flex:1,backgroundColor:"#ffffff"}}>
            <HomeComponent/>
        <ScrollView>
            <View  style = {styles.container}>
                <View style = {styles.profilesection}>
                    <Text style = {styles.profiletext}>Profile</Text>
                    <TouchableOpacity style = {styles.personaldata}>
                        <Icon style={{marginRight:5,}} name="user" size={20} color="rgba(0, 0, 0,0.9)"/>
                        <Text style = {styles.personaldatatext}>Personal Details</Text>
                    </TouchableOpacity>
                    <View style = {{borderWidth:0.5,marginTop:8,marginLeft:10,borderColor:'rgba(0,0,0,0.2)'}}></View>
                    <TouchableOpacity style = {styles.personaladdres}>
                        <Icon style={{marginRight:5,}} name="map" size={20} color="rgba(0, 0, 0,0.9)"/>
                        <Text style = {styles.personaldatatext}>Address</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {styles.container}>
                <View style = {styles.profilesection}>
                    <Text style = {styles.profiletext}>Security</Text>
                    <TouchableOpacity style = {styles.personaldata}>
                        <Icon style={{marginRight:5,}} name="shield" size={20} color="rgba(0, 0, 0,0.9)"/>
                        <Text style = {styles.personaldatatext}>Change Password</Text>
                    </TouchableOpacity>
                    <View style = {{borderWidth:0.5,marginTop:8,marginLeft:10,borderColor:'rgba(0,0,0,0.2)'}}></View>
                    <TouchableOpacity style = {styles.personaladdres2}>
                        <Ionicons style={{marginRight:5,}} name="finger-print-outline" size={20} color="rgba(0, 0, 0,0.9)"/>
                        <Text style = {styles.personaldatatext}>Active Face ID Or Finger Print</Text>
                        <Switch
                            style = {{marginLeft:15}}
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {styles.container}>
                <View style = {styles.profilesection}>
                    <Text style = {styles.profiletext}>About Us</Text>
                    <TouchableOpacity style = {styles.personaldata}>
                        <Icon style={{marginRight:5,}} name="file" size={20} color="rgba(0, 0, 0,0.9)"/>
                        <Text style = {styles.personaldatatext}>Terms and conditions</Text>
                    </TouchableOpacity>
                    <View style = {{borderWidth:0.5,marginTop:8,marginLeft:10,borderColor:'rgba(0,0,0,0.2)'}}></View>
                    <TouchableOpacity style = {styles.personaladdres}>
                        <Aiconss style={{marginRight:5,}} name="cellphone-key" size={20} color="rgba(0, 0, 0,0.9)"/>
                        <Text style = {styles.personaldatatext}>Privcy and policy</Text>
                    </TouchableOpacity>
                    <View style = {{borderWidth:0.5,marginTop:8,marginLeft:10,borderColor:'rgba(0,0,0,0.2)'}}></View>
                    <TouchableOpacity style = {styles.personaladdres}>
                        <Aicons style={{marginRight:5,}} name="info-circle" size={20} color="rgba(0, 0, 0,0.9)"/>
                        <Text style = {styles.personaldatatext}>About Xpay</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
            <TouchableOpacity style = {{ alignItems:"flex-end",marginTop:100,marginLeft:15,flexDirection:"row",marginBottom:10}} onPress = {() => navigation.navigate('Login')}>
                <Logout style={{marginRight:5,}} name="logout" size={20} color="red"/>
                <Text style = {{fontSize:16,color:"red"}}>Log out</Text>
            </TouchableOpacity>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        height:"100%"
    },
    profilesection:{
        margin:10,
        marginLeft:5,
        marginBottom:25,
        marginTop:15
    },
    profiletext:{
        fontSize:18,
        fontWeight: 'bold',
        marginLeft:10
    },
    personaldata:{
        flexDirection:'row',
        marginTop:20,
        marginLeft:10,
        alignContent:'center',
        
    },
    personaladdres:{
        flexDirection:'row',
        marginTop:10,
        marginLeft:10,
        alignContent:'center',
        
    },
    personaladdres2:{
        flexDirection:'row',
        marginTop:10,
        marginLeft:10,
        alignContent:'center',
        
    },
    personaldatatext:{
        fontSize:18,
        marginLeft:10
    },
});
