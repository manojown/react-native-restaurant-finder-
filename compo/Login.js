import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Navigator,
  TextInput,
  Image,

} from 'react-native';
import {
  Item,
  Input,
  Button,
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
    var drawerContent = (<View style={styles.drawerContent}>
       <View style={styles.leftTop}/>
       <View style={styles.leftBottom}>
         <View><Text>Drawer Content</Text></View>
       </View>
     </View>);
     // customize drawer's style (Optional)
     var customStyles = {
       drawer: {
         shadowColor: '#000',
         shadowOpacity: 0.4,
         shadowRadius: 10
       },
       mask: {}, // style of mask if it is enabled
       main: {} // style of main board
     };

        return (
          <View style={{height: '100%'}}>
            <View style={styles.container}>
              <View>
                <Image
                  source = {require('./images/logoz.png')} />
              </View>
              <View style={styles.content}>
                <Text style={{fontSize: 15,color: '#757575',fontWeight:'bold'}}>
                Sign In with your Phone
                </Text>
              </View>
              <View style={styles.input}>
                <TextInput
                  placeholder='Enter Phone Number'
                  textAlign='center'
                  placeholderTextColor='#BDBDBD'
                  underlineColorAndroid='#5cb85c'
                  keyboardType='numeric'
                  ref='mobile'
                  value={this.state.mobile}
                  maxLength={10} />
              </View>
            </View>
            <View style={{backgroundColor: '#5cb85c',padding: 15, justifyContent:'center', alignItems: 'center',position: 'absolute', bottom: 0, left: 0, right: 0}}>
                <Link
                  to={{
                        pathname: '/OtpVerification',
                        state: { mobile: this.state.mobile }
                  }}
                  onPress={this.getOtp.bind(this)} >
                  <Text style={{fontSize: 15, fontWeight: '500', color: 'white'}}> GENERATE OTP </Text>
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
    width: '65%',
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
