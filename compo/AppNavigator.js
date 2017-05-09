import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,StatusBar,
  Navigator,
  TextInput,
  Image
} from 'react-native';
import { NativeRouter, Route, Link,Router } from 'react-router-native';
import Login from './Login';
import OtpVerification from './OtpVerification';
 import Chicken from './Chicken';
import Home from './Home';
import Cart from './Cart';
import burgerfullinfo from './burger_full_info';

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
            <StatusBar
                  backgroundColor="#757575"
                  barStyle="light-content"  />
            <Route  exact path="/" component={Login}/>
            <Route  exact path="/Home" component={Home}/>
            <Route path="/OtpVerification" component={OtpVerification} />
            <Route path="/Chicken" component={Chicken}/>
            <Route path="/burgerfullinfo" component={burgerfullinfo}/>
            <Route path="/Cart" component={Cart}/>
          </View>
        </NativeRouter>

      );
    }
  }
