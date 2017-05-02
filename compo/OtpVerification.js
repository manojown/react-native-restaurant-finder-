import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Navigator,
  TextInput,
  Image,Alert,
  StatusBar
} from 'react-native';
import {
  Item,
  Input,
  Button,
  Label,
} from 'native-base';
import { NativeRouter, Route, Link,Router,browserHistory  } from 'react-router-native';
// var ApiService =require( './ApiService');



export default class OtpVerification extends Component {

  constructor(props) {
     super(props);
   };

   state={

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
                     onChangeText={(mobile) => this.setState({mobile})}
                    placeholderTextColor='#ffffff'
                    underlineColorAndroid='#ffffff'
                    keyboardType='numeric'
                    ref='mobile'
                    value={this.state.mobile}
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
                      <Link
                          underlayColor= '#87dd18'
                        to={{
                            pathname: '/Home',
                            state: { mobile: this.state.mobile }
                          }}>
                          <Text style={styles.text}>COMPLETE</Text>
                        </Link>
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
