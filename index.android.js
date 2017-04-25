import React, { Component } from 'react'

import {
   View,AppRegistry,
   TouchableHighlight,
   ScrollView,
   TextInput,
   Image,
   AsyncStorage,
   StyleSheet,
   StatusBar
} from 'react-native'

import { Container,
   Content,
   Footer,
    Button,
    InputGroup,
    FooterTab,Input,
    Item,Icon,Form,Label,
    Header,Left,Body,Title,Right,
     Text } from 'native-base';

import AppNavigator from './compo/AppNavigator';

export default class BWA extends Component {


  render() {
    return (

  <AppNavigator />


    );
  }
}


AppRegistry.registerComponent('BWA', () => BWA);
