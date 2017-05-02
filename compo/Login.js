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


export default class Login extends Component {
  constructor(props) {
     super(props);
     this.state = {

     };
   };
   getOtp(){
       var thisComponent=this;
console.log("dfdgfgdgf")
    // if (thisComponent.state.mobile.length == 10){
      // console.log('hwfduyweh',that);
    //   ApiService.submit(thisComponent.state.mobile)
    //   .then(function (res) {
    //       console.log(res,"Response");
    //     if(!res){
    //       alert ('please enter correct Number');
    //     }
    //   })
    //   .catch(function (err) {
    //     alert('err');
    //     console.log(err);
    //   });
    // } else {
    //   alert("Please enter correct mobile number");
    // }
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
                Your mobile number
              </Text>
            </View>
            <View style={styles.smallblock}>
              <TextInput style={styles.input}
                fontSize={16}
                placeholder='Enter mobile number'
                placeholderTextMargin={10}
                placeholderTextColor='#ffffff'
                underlineColorAndroid='#ffffff'
                keyboardType='numeric'
                ref='mobile'
                value={this.state.mobile}
                maxLength={10} />
              </View>
              <View style={styles.smallblock1}>
                <Link
                  underlayColor= '#87dd18'
                  to={{
                    pathname: '/OtpVerification',
                    state: { mobile: this.state.mobile }
                    }}>
                    <Text style={styles.text}>NEXT</Text>
                  </Link>
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
  secondimage:{
    alignItems:'center',
      height:150,
      width:220,
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
    width:'100%',
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
  smallblock1:{
    margin:15,
    alignItems:'flex-end',
  },
  text:{
      margin:5,
    width:50,
    fontSize: 16,
    marginBottom:12,
    textAlign:'center',
    fontWeight:'500',
     color: 'white',
  },
  text2:{
    margin:1,
    color:'#ffffff',
    fontSize:15,
  },
  input: {

  padding:5,
  fontSize:14,
  color:'white',

  },
});
