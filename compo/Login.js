import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Navigator,
  TextInput,
  Image,ScrollView,

} from 'react-native';
import {
  Item,
  Container,
  Input,
  Button,Content,
  Label,
} from 'native-base';
import { NativeRouter, Route, Link,Router,browserHistory  } from 'react-router-native';
var ApiService =require( './ApiService');

export default class Login extends Component {
  constructor(props) {
     super(props);
     this.state = {

     };
   };

   navigate(){
     this.props.history.push('/OtpVerification');
   }

    render()  {
      return (

        <View style={styles.container}>

            <Image
              style={styles.logocontainer}
              source= {require('./images/banner.jpg')} >
              <View style={{bottom:0,position:'absolute'}}>
                <Button rounded success style={{marginBottom:100}} onPress={this.navigate.bind(this)}>
                  <Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>Find My restaurant  </Text>
                </Button>
              </View>
            </Image>


            </View>
      );
    }
}



const styles = StyleSheet.create({
  container: {
    height: '100%',
  },

  logocontainer: {
    flexDirection:'column',
    alignItems:'center',
    height:'100%',
    width:'100%',
  }
});
