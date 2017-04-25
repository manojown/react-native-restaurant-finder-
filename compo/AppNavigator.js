import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Navigator,
  TextInput,
  Image
} from 'react-native';
import { NativeRouter, Route, Link,Router } from 'react-router-native';
import Login from './Login';
import OtpVerification from './OtpVerification';
// import OTP from './OTP';
import Home from './Home';

export default class AppNavigator extends Component {

  constructor(props){
    super(props);
    this.state = {
      counter: 0
    };
  }

  increaseCounter() {
      this.setState({
        counter: (this.state.counter + 1)
      });
  }


    render() {
      return (
        <NativeRouter>
          <View>
            <Route  exact path="/" component={Login}/>
            <Route  exact path="/Home" component={Home}/>
            <Route path="/OtpVerification" component={OtpVerification} />
          </View>
        </NativeRouter>

      );
    }
  }
