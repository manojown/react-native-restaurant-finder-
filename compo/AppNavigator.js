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
import homescreen from './homescreen';
import restolist from './restolist';
 import zomato from './zomato';

import Cart from './Cart';
import restoInfo from './restoInfo';

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
            <Route  exact path="/" component={homescreen}/>

            <Route path="/restolist" component={restolist} />
            <Route path="/zomato" component={zomato}/>
            <Route path="/restoInfo" component={restoInfo}/>
            <Route path="/Cart" component={Cart}/>
          </View>
        </NativeRouter>

      );
    }
  }
