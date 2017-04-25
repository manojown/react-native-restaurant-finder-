import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Navigator,
  TextInput,
  Image,DrawerLayoutAndroid,
  StatusBar
} from 'react-native';
import {
  Item,
  Input,
  Button,
  Label,
} from 'native-base';
import { NativeRouter, Route, Link,Router,browserHistory  } from 'react-router-native';


export default class Home extends Component {

  openDrawer() {
           this.refs['myDrawer'].openDrawer();
       }

       closeDrawer() {
           this.refs['myDrawer'].closeDrawer();
       }

       render() {
           var navigationView = (
               <View style={{flex: 1, backgroundColor: '#000'}}>
                   <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>

                   <TouchableHighlight onPress={this.closeDrawer}>
                       <Text>{'Close Drawer'}</Text>
                   </TouchableHighlight>

               </View>
           );

        return (
          <DrawerLayoutAndroid ref="myDrawer"
                            drawerWidth={300}
                            drawerPosition={DrawerLayoutAndroid.positions.Left}
                            renderNavigationView={() => navigationView}>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                                <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>

                                <TouchableHighlight onPress={this.openDrawer}>
                                    <Text>{'Open Drawer'}</Text>
                                </TouchableHighlight>

                            </View>
                        </DrawerLayoutAndroid>

        );
      }
      }
