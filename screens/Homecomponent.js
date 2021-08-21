import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function HomeComponent() {
  return (
    <View style = {{flexDirection:"row",width:'100%',height:50,borderBottomWidth:0.3,borderBottomColor:"rgba(0,0,0,0.1)"}}>
        <View style = {styles.textstyle}>
            <Text style = {{fontSize:18,color:'#1a1aff',fontWeight:'bold'}}>RN Social</Text>
        </View>
        <View  style={styles.iconstyle}>
            <Icon style = {styles.iconsty} name="plus" size={20} color="rgba(0, 0, 255,0.7)"/>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
    iconstyle:{
        width:'40%',
        alignItems:'flex-end',
        marginTop:10,
        paddingRight:10
    },
    iconsty:{
        marginLeft:15
    },
    textstyle:{
        width:'59%',
        alignItems:'flex-end',
        marginTop:10,
        
    }
   
});

export default HomeComponent;