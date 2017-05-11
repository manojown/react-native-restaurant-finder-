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
   getOtp(){
     console.log("hi in  otp");
       var thisComponent=this;
       console.log(thisComponent.state);

          if (thisComponent.state.mobile.length == 10){
            // console.log('hwfduyweh',that);
ApiService.submit(thisComponent.state.mobile)
 .then(function (res) {
     console.log(res,"Response");
   if(!res){
     alert ('please enter correct Number');
   }else{

     thisComponent.props.history.push('/OtpVerification', { mobile: thisComponent.state.mobile })
   }
 })
 .catch(function (err) {
   alert('err');
   console.log(err);
 });
} else {
 alert("Please enter correct mobile number");
}
   }
    render()  {
      return (

        <View style={styles.container}>
          <View style={styles.innercontainer}>
            <Image
              style={styles.logocontainer}
              source= {require('./images/banner.jpg')} >
              <View style={styles.logocontainersmall}>
                <Image
                  source={require('./images/logo.png')}>
              </Image>
              </View>

            </Image>
          </View>
          <View style={styles.textcontainer}>
            <View style={styles.smallblock}>
              <Text style={styles.text2}>
                 Verify your mobile number
              </Text>
            </View>
            <View style={styles.smallblock2}>
              <TextInput style={styles.input}
              //   placeholderStyle={{ fontFamily: "AnotherFont",color:'red',borderColor: 'red' }}
                fontSize={16}
                placeholder='Your mobile number'
                placeholderTextColor='#ffffff'
                underlineColorAndroid='#ffffff'
                //placeholderTextPadding={10}
                keyboardType='numeric'
                ref='mobile'
                value={this.state.mobile}
                 onChangeText={(mobile) => this.setState({mobile})}
                maxLength={10} />
              </View>
              <View style={styles.smallblock1}>
              <TouchableHighlight
                underlayColor='#87dd18'
                 onPress={this.getOtp.bind(this)}
              //  onPress={this.navigate.bind(this)}
                >
                 <Text style={styles.text}>
                   NEXT
                 </Text>
             </TouchableHighlight>
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
    alignItems:'center',
    height:'70%',
  },
  secondimage:{
    alignItems:'center',
      height:170,
      width:220,
  },
  textcontainer:{
    backgroundColor:'#87dd18',
    height:'30%',
    flex:1,

  },
  imagecontainer: {
  alignItems:'center',
    height:120,
    width:120,
    },
  logocontainer: {
    flexDirection:'column',
    alignItems:'center',
    height:'100%',
    width:'100%',
  },
  logocontainersmall: {
    margin:10,
    flexDirection:'column',
    alignItems:'center',

  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallblock:{
    flex:1,
    marginRight:15,
    justifyContent:'center',


  },
  smallblock2:{
    flex:1,

    marginLeft:15,
    marginRight:15,

    justifyContent:'center',
  },
  smallblock1:{
    flex:1,

    marginLeft:15,
    marginRight:15,
  justifyContent:'center',
    alignItems: 'flex-end',
  },
  text:{

    width:50,
    fontSize: 16,

    textAlign:'center',
    fontWeight:'500',
     color: 'white',
  },
  text2:{

    marginLeft:20,
    color:'#ffffff',
    fontSize:15,
    justifyContent:'center',

  },
  input: {

      padding:5,
marginBottom:7,
  fontSize:14,
  color:'white',

  },
});
