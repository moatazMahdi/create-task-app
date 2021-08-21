import React, { useRef } from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView, ScrollView,TextInput,TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { store, persistor } from '../redux/store/store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { connect } from 'react-redux';
import {firstName,lastName,phoneNumber,saconderyphoneNumber} from '../redux/actions/counterActions'


export default function ComfirmDatacomponent({navigation}) {
    const [text, onChangeText] = React.useState(null);
    const [text2, onChangeText2] = React.useState(null);
    const [text3, onChangeText3] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    const [numbertwo, onChangeNumbertwo] = React.useState(null);
    const ref_input2 = useRef();
    const ref_input3 = useRef();
    const ref_input4 = useRef();
    const ref_input5 = useRef();

    return (
        <View  style = {{flex:1}}>
        <ScrollView >
         <View style={styles.contener}>
        
           
                    <View style  = {{flex:1}}>
                        <Text style = {styles.headtext}>First Name</Text>
                        <TouchableOpacity 
                       // onPress={() =>reduxFirstname()}
                        >
                        <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="First Name"
                        placeholderTextColor="rgba(0,0,0,0.2)"
                        keyboardType= "default"
                        onSubmitEditing={() => ref_input2.current.focus()}
                    />
                    </TouchableOpacity>
                    </View>
                    <View style  = {styles.firstname}>
                        <Text style = {styles.headtext}>List Name</Text>
                        <TextInput
                        style={styles.input}
                        onChangeText={onChangeText2}
                        value={text2}
                        placeholder="List Name"
                        placeholderTextColor="rgba(0,0,0,0.2)"
                        keyboardType= "default"
                        ref={ref_input2}
                        onSubmitEditing={() => ref_input3.current.focus()}

                      //  onPress={() =>reduxLastname()}
                    />
                    </View>
                    <Text style = {{marginTop:20}}>Phone Number</Text>
                    <View style = {{flexDirection:"row",marginTop:5}}>
                        <TouchableOpacity style = {styles.phonenumbertouch}>
                            <Text>+20</Text>
                        </TouchableOpacity>
                        <TextInput
                        style={styles.input2}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="Phone Number"
                        placeholderTextColor="rgba(0,0,0,0.2)"
                        keyboardType= "numeric"
                        ref={ref_input3}
                        onSubmitEditing={() => ref_input4.current.focus()}
                     //   onPress={() =>reduxPhonenumber()}
                    //  ref={ref_input2}
                    />
                    </View>
                    <Text style = {{marginTop:20}}>Secondary Phone Number(Optional)</Text>
                    <View style = {{flexDirection:"row",marginTop:5}}>
                        
                        <TouchableOpacity style = {styles.saconderyphoneNumber}>
                            <Text>+20</Text>
                        </TouchableOpacity>
                        <TextInput
                        style={styles.input2}
                        onChangeText={onChangeNumbertwo}
                        value={numbertwo}
                        placeholder="Phone Number"
                        placeholderTextColor="rgba(0,0,0,0.2)"
                        keyboardType= "numeric"
                        ref={ref_input4}
                        onSubmitEditing={() => ref_input5.current.focus()}
                    //    onPress={() =>reduxsaconderyPhonenumber()}
                    //  ref={ref_input2}
                    />
                    </View>
                    <View style = {{flexDirection:"row",marginTop:15,width:"60%"}}>
                    <View style = {{marginRight:10}}>
                        <Text style = {styles.selectcontener}>City</Text>
                        <TouchableOpacity style = {styles.city}>
                            <Text>Cairo</Text>
                            <View>
                                <Icon style={{marginRight:5,marginLeft:25}} name="angle-up" size={15} color="#000"/>
                                <Icon style={{marginRight:5,marginLeft:25}} name="angle-down" size={15} color="#000"/>
                            </View>
                        </TouchableOpacity>
                        </View>
                        <View style = {{marginLeft:10}}>
                        <Text style = {styles.selectcontener}>Area</Text>
                        <TouchableOpacity style = {styles.area}>
                            <Text>Maadi</Text>
                            <View>
                                <Icon style={{marginRight:5,marginLeft:25}} name="angle-up" size={15} color="#000"/>
                                <Icon style={{marginRight:5,marginLeft:25}} name="angle-down" size={15} color="#000"/>
                            </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.searchSection}>
                        
                        <TextInput
                        style={styles.input3}
                        onChangeText={onChangeText3}
                        value={text3}
                        placeholder="Address"
                        placeholderTextColor="rgba(0,0,0,0.4)" 
                        ref={ref_input5}
                        />
                        <Icon style={{marginRight:20}} name="map" size={20} color="#000"/>
                    </View>
         </View>
         <TouchableOpacity style = {styles.Nextbt} onPress = {() => navigation.navigate('Home')}>
                <Text style = {styles.titlesty2}>Next</Text>
            </TouchableOpacity>
    </ScrollView>
    </View>
    )
}


const styles = StyleSheet.create({
    contener:{
        flex:1,
        padding:5,
        margin:15,
        height:'100%'
    },
    headtext:{
        marginTop:15,
        fontSize:20,
    },
    firstname:{

    },
    input:{
        width:"100%",
        height:50,
        borderWidth:1,
        padding:10,
        borderRadius:4,
        color: '#424242',
    },
    input2:{
        width:"82%",
        height:50,
        borderWidth:1,
        padding:10,
        marginRight:5,
        marginLeft:5,
        borderRadius:4,
        color: '#424242',
    },
    selectcontener:{
        width:"50%", 
        marginBottom:5,
        borderRadius:4,
    },
    phonenumbertouch:{
        borderWidth:1,
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:"center", 
        borderRadius:3, 
    },
    saconderyphoneNumber:{
        borderWidth:1,
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:"center", 
        borderRadius:3, 
    },
    city:{
        borderWidth:1,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        flexDirection:"row",
        width:"100%", 
        borderRadius:4,
    },
    area:{
        borderWidth:1,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        flexDirection:"row",
        width:"100%"
    },
    searchSection: {
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        height: 50,
        borderRadius: 5,
        marginTop:20
    },
    input3: {
        flex: 1,
        width:'100%',
        height: 50,
        margin: 12,
        padding:10,
        color: '#424242',
      },
    mapstyle:{
        width:"100%",
        height:50,
        flexDirection:"row",
        borderWidth:1,
        marginTop:20,
        borderRadius:4,
        alignItems:"center"
    },
    titlesty2:{
        marginLeft:10,
        marginRight:10,
        color:"#fff"
    },
    titlesty:{
        marginLeft:10,
        color:"#000"
    },
    Nextbt:{
        flex:1,
        width:"90%",
        height: 50,
        backgroundColor:"#3333ff",
        marginTop:60,
        justifyContent:"center",
        alignItems:"center",
        bottom: 0,
        marginBottom:25,
        marginRight:20,
        marginLeft:20,
        borderRadius:5
    },

});
const mapStateToProps = (state) => {
    // Redux Store --> Component
    return {
        firstname: state.counterReducer.firstname,
        lastname: state.counterReducer.lastname,
        phonenumber: state.counterReducer.phonenumber,
        saconderyphonenumber: state.counterReducer.saconderyphonenumber,
    };
  };
  
  // Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
  const mapDispatchToProps = (dispatch) => {
    // Action
      return {
        reduxFirstname: () => dispatch(firstName()),
        reduxLastname: () => dispatch(lastName()),
        reduxPhonenumber: () => dispatch(phoneNumber()),
        reduxsaconderyPhonenumber: () => dispatch(saconderyphonenumber()),

     };
  };
 // export default connect(mapStateToProps, mapDispatchToProps)(ComfirmDatacomponent);

