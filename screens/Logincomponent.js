import React, { Fragment,useRef } from 'react';
import { StyleSheet, Text, View,Image,SafeAreaView, ScrollView,TextInput,TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Formik } from 'formik'


export default class LogIn extends React.Component{

    state = {
        email: '',
        password: ''
      }
      handleEmailChange = email => {
        this.setState({ email })
      }
    
      handlePasswordChange = password => {
        this.setState({ password })
      }
      onLogin = async () => {
        const { email, password } = this.state
        try {
          if (email.length > 0 && password.length > 0) {
            this.props.navigation.navigate('ComfirmDatacomponent')
          }
        } catch (error) {
          alert(error)
        }
      } 
      
      handleSubmit = values => {
        if (values.email.length > 0 && values.password.length > 0) {
          this.props.navigation.navigate('ComfirmDatacomponent')
        }
      }
   /*  const [text, onChangeText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
    const ref_input2 = useRef();
 */

    render (){
        const { email, password } = this.state
    return (
        <SafeAreaView style={styles.contener}>
        <ScrollView style={styles.scrollView}>
        <View style={styles.contener2}>
            <Image source={require('../images/slide4.png')} style={{ width: 150, height: 150,marginTop:40 }}/>
            <Text style = {styles.headtext}>Rn Socile App</Text>
            <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => {this.handleSubmit(values)}}>
          {formikProps => (
            <Fragment>
            <View style={styles.searchSection}>
                <Icon style={styles.searchIcon} name="user" size={20} color="#000"/>
                <TextInput
                style={styles.input}
                onChangeText={this.handleEmailChange}
                placeholder="Email"
                value={email}
                keyboardType = "email-address"
                placeholderTextColor="rgba(0,0,0,0.4)" 
            />
            </View>
            <View style={styles.searchSection}>
                <Icon style={styles.searchIcon} name="lock" size={20} color="#000"/>
                <TextInput
                style={styles.input}
                onChangeText={this.handlePasswordChange}
                value={password}
                placeholder="Password"
                placeholderTextColor="rgba(0,0,0,0.4)" 
                secureTextEntry={true}
            />
            </View>
            <TouchableOpacity style = {styles.singintext} onPress = {() =>this.props.navigation.navigate('ComfirmDatacomponent')}>
                    <Text style = {styles.textsingin}>Sing In</Text>
            </TouchableOpacity>

            </Fragment>
          )}
        </Formik>
            <TouchableOpacity style = {styles.singintext2} >
                    <Text style = {styles.textsingin2}>Forget Password ?</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.searchSection2}>
              <Icon style={{paddingLeft:10}} name="facebook-f" size={20} color="#3333ff"/>
              <Text style = {{width:"100%",textAlign:"center",color:"#3333ff",}}>Sign In with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.searchSection3}>
              <Icon style={{paddingLeft:8}} name="google" size={20} color="#ff0000"/>
              <Text style = {{width:"100%",textAlign:"center",color:"#ff0000",}}>Sign In with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style = {{color:"#3333ff"}}>Dont have account?<Text style = {{paddingLeft:2,fontSize:15,fontFamily:"bold"}}>CreateOne</Text></Text>
            </TouchableOpacity>

        </View>
        </ScrollView>
      </SafeAreaView>
        
    )
}
}

const styles = StyleSheet.create({
    contener:{
        flex:1,
        padding:5,
        backgroundColor:'#fff'
    },
    contener2:{
      flex:1,
      alignItems:'center',
      margin:5,
      marginTop:15,
      padding:5,
      backgroundColor:'#fff'
  },
    headtext:{
        marginTop:15,
        fontSize:30,
    },
    searchSection: {
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 50,
        borderRadius: 5,
        margin: 10,
    },
    searchSection2: {
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 128, 0.1)',
        height: 45,
        borderRadius: 5,
        margin: 10,
        padding:10
    },
    searchSection3: {
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        height: 45,
        borderRadius: 5,
        margin: 10,
        padding:10
    },
    searchIcon: {
        paddingLeft:10
    },
    input: {
        flex: 1,
        width:'100%',
        height: 50,
        margin: 12,
        padding:10,
        borderLeftWidth:1,
        color: '#424242',
      },
      singintext:{
          width:"100%",
          height:50,
          backgroundColor:"#3333ff",
          marginTop:5,
          justifyContent:"center",
          alignItems:"center",
          borderRadius:5

      },
      textsingin:{
          color:"#ffffff"
      },
      singintext2:{
        width:"100%",
        height:50,
        marginTop:15,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5

    },
    textsingin2:{
        color:"#3333ff",
        fontSize:15
    },
})
