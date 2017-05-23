
'use strict';

import React, {Component} from 'react';
import {
  Text,
  View,ToolbarAndroid,
  TouchableHighlight,ScrollView,
  StyleSheet,StatusBar,
  Navigator,BackAndroid,
  TextInput,Picker,
  Image,DrawerLayoutAndroid,WebView , Linking
} from 'react-native';
import {
  Item,
  Input,Content,List,ListItem,
  Button,Header,Title,Right,
  Label,Container, Icon, Card, CardItem, Thumbnail, Left, Body,
} from 'native-base';
import { NativeRouter, Route, Link,Router } from 'react-router-native';
import GridView from 'react-native-grid-view';
import Login from './Login';


export default class zomato extends Component {

  constructor(props) {
     super(props);
     this.state = {

     };
     console.log('web url',this.props);
   };
   render() {
    const uri = this.props.location.state.weburl;
    return (
      <WebView
        ref={(ref) => { this.webview = ref; }}
        source={{ uri }}
        onNavigationStateChange={(event) => {
          if (event.url !== uri) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />
    );
  }
}
