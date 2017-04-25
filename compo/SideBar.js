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
  Drawer,
} from 'native-base';
import { NativeRouter, Route, Link,Router,browserHistory  } from 'react-router-native';
// var ApiService =require( './ApiService');

export default  class SideBar extends Component {

    render() {

        return (
          <View style={{backgroundColor:'#000'}}>


            <Navigator>   <Text> hello my name  ankur</Text></Navigator>

          </View>

        );
      }
      }
