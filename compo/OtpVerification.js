import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Navigator,
  TextInput,
  Image,
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
     this.state = {

     };
   };
    render() {
        return (
          <View style={{height: '100%'}}>
            <View style={styles.container}>
              <View>
                <Image
                  source = {require('./images/logoz.png')} />
              </View>
              <View style={styles.content}>
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholder='Enter OTP'
                  textAlign='center'
                  placeholderTextColor='#BDBDBD'
                  underlineColorAndroid='#5cb85c'
                  keyboardType='numeric'
                  ref='mobile'
                  value={this.state.mobile}
                  maxLength={4} />
                  <View style={{ margin:10,justifyContent:'center', alignItems: 'center'}} >
                    <Text style={{fontSize: 15,color: '#757575',fontWeight:'bold'}}>
                    Re-Send OTP
                    </Text>
                  </View>
              </View>

            </View>
            <View style={{backgroundColor: '#5cb85c',padding: 15, justifyContent:'center', alignItems: 'center',position: 'absolute', bottom: 0, left: 0, right: 0}}>
                <Link
                  to={{
                        pathname: '/Home',
                        state: { mobile: this.state.mobile }
                  }}
                   >
                  <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}>VERIFY</Text>
                </Link>
            </View>
          </View>
        );
      }
      }
      const styles = StyleSheet.create({
      container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      },
      content: {
      paddingTop: 60,
      },
      input: {
        paddingTop:10,
      marginBottom:30,
        width: '45%',
      },
      welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      },
      instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
      },
      });
