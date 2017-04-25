
import React, { Component } from 'react';
import {
StyleSheet,
View,
Text
} from 'react-native';

var ToolbarAndroid = require('ToolbarAndroid');

export default class Toolbar extends Component {
render() {
  var navigator = this.props.navigator;
   return (
    <ToolbarAndroid
     title={this.props.title}
     navIcon={require('./icons/ic_menu_white_24dp.png')}
     style = {{backgroundColor:'#000',height:13}}
     titleColor={'white'}
     onIconClicked={this.props.sidebarRef}/>
    );
 }

const styles = StyleSheet.create({
//define your own style
}
 });
