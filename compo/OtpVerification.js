import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Navigator,
  TextInput,
  Image,Alert,
  StatusBar,
  AsyncStorage
} from 'react-native';
import {
  Item,
  Input,
  Button,
  Label,
} from 'native-base';
import { NativeRouter, Route, Link,Router,browserHistory  } from 'react-router-native';
// var ApiService =require( './ApiService');
var ApiService =require( './ApiService');



export default class OtpVerification extends Component {

  constructor(props) {
     super(props);
   };

   state={

   }
   setOtp(){
       var thisComponent=this;



       ApiService.Auth(this.props.location.state.mobile,thisComponent.state.otp)
          .then(function (res) {
              if(res){
                AsyncStorage.setItem("token", res);
                thisComponent.props.history.push('/home');
              }else{
                alert("Enter correct OTP")
              }
          })
          .catch(function (err) {
            alert('err mobile');
            console.log(err);
          });
}

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.innercontainer}>
              <Image
                resizeMode = 'cover'
                style={styles.logocontainer}
                source= {require('./images/banner.jpg')} >
                <View   style={styles.logocontainersmall}>
                  <Image source={require('./images/logo.png')}>
                </Image>
              </View>
            </Image>
          </View>
              <View style={styles.textcontainer}>
                <View style={styles.smallblock}>
                  <Text style={{color:'#ffffff',fontSize:15,margin:1}}>
                      Enter One-time-password sent to your phone
                  </Text>
                </View>
                <View style={styles.smallblock}>
                  <TextInput style={styles.input}
                    fontSize={16}
                    placeholder='XXXX'
                     onChangeText={(otp) => this.setState({otp})}
                    placeholderTextColor='#ffffff'
                    underlineColorAndroid='#ffffff'
                    keyboardType='numeric'
                    ref='otp'
                    value={this.state.otp}
                    maxLength={4} />
                  </View>
                  <View
                      style={styles.blockspace}>
                    <View>
                      <Text
                      //  onPress={this.onButtonPress.bind(this)}
                        style={styles.text}>RE-SEND OTP</Text>
                    </View>
                    <View>
                    <TouchableHighlight onPress={this.setOtp.bind(this)} style={{underlayColor: 'black'}}>
                       <Text style={styles.linkText}>
                         NEXT
                       </Text>
                   </TouchableHighlight>
                      </View>
                    </View>
                  </View>
                </View>
          );
    }
  }

  const styles = StyleSheet.create({
    container: {
      height: '100%',
    },
    innercontainer:{
      flexDirection:'row',
      alignItems:'center',
      height:'70%',
    },
    textcontainer:{
      backgroundColor:'#87dd18',
      height:'30%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    imagecontainer: {
    alignItems:'center',
      height:100,
      width:100,
      },
    logocontainer: {
      flexDirection:'column',
      alignItems:'center',
      height:400,
    width:'100%'
    },
    logocontainersmall: {
      margin:10,
      flexDirection:'column',
      alignItems:'center',

    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    smallblock:{
      margin:15
    },
    blockspace:{
      margin:15,
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    text:{
      margin:5,
      fontSize: 16,
      marginBottom:10,
      textAlign:'right',
      fontWeight:'500',
       color: 'white',
    },
    input: {
    padding:5,
    fontSize:14,
    color:'white',

    },
  });
