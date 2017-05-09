import React, {Component} from 'react';
import {
  Text,
  View,ToolbarAndroid,
  TouchableHighlight,ScrollView,
  StyleSheet,StatusBar,
  Navigator,BackAndroid,
  TextInput,Picker,
  Image,DrawerLayoutAndroid,
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

class FoodGrid extends Component {
  constructor(props) {
    super(props);
  }
  next() {
    console.log(this.props);
    // this.props.history.push('/');
  }
  render() {
      return (

            <View style={{alignItems:'stretch',justifyContent:'center'}}>

              <Link underlayColor= 'white' to='/burgerfullinfo'>
              <View
                style={{alignItems:'center',borderWidth: 1, borderColor: '#EEE', justifyContent:'center'}}>
                    <Image style={{height:150,width:150}} source={require('./images/a.png')}/>
                    <Text style={{fontSize:15, margin: 10}}>
                      Zappy(Chicken)
                    </Text>
                    <Text style={{fontSize:17,fontWeight:'800',color:'#4c4c4c',marginBottom: 10}}>
                    $3.00
                  </Text>
                </View>
               </Link>
             </View>
          );


  }
}
BackAndroid.addEventListener('hardwareBackPress', function() {
 // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
 // Typically you would use the navigator here to go to the last state.

 return false;
});

let foodData = [
  {'name': 'Ankur'},
  {'name': 'Hiren'},
  {'name': 'Hussain'},
  {'name': 'Hussain'},
  {'name': 'Hussain'},
  {'name': 'Hussain'},
  {'name': 'Hussain'},
  {'name': 'Ashwin'}
];
let ITEMS_PER_ROW = 2;

export default class Chicken extends Component {

  constructor(props){
    super(props);
    this.state = {
      dataSource: foodData
    };
  }

navigate(){
  this.props.history.push('/Home');
}
  renderItem(item) {
    return <FoodGrid food={item} />
  }

    render() {
      var navigationViewright = (
        <View style={styles.navigationcontainer}>
          <View style={styles.drawersmallblockheader}>
            <Text style={styles.drawertext}>CART</Text>
            <Image style={{margin:15}} source={require('./images/cart.png')} />
          </View>
          <View style={styles.drawersmallblock2}>
            <Container>
              <Content>
                <List>
                  <ListItem style={{flexDirection:'column'}}>
                    <Text note>Chicken(sizzy burger){'\n'}</Text>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <Thumbnail square size={80} source={require('./images/a.png')} />
                      <Body>
                        <Text>    *  1  =  400 </Text>
                      </Body>
                    </View>
                  </ListItem>
                </List>
              </Content>
            </Container>
          </View>
        </View>
      );
      return (
        <View style={styles.maincontain}>
          <View style={styles.maincontaindrawer}>
            <Header style={{backgroundColor:'#ffffff'}}>
              <StatusBar
                backgroundColor="#757575"
                barStyle="light-content"
              />
              <Left>
                <Button transparent onPress={this.navigate.bind(this)}>
                  <Image source={require('./images/back.png')} />
                </Button>
              </Left>
              <Body style={styles.bodystyle}>
                <Picker style={styles.pickerstyle}
                  mode="dropdown">
                  <Item label="Popular" value="red" />
                  <Item label="Chiken" value="green" />
                  <Item label="Tuna & Salmon"  value="blue" />
                  <Item label="Big Meals"  value="blue" />
                </Picker>
              </Body>
              <Right >
                <Button transparent
                  onPress={() => {this.refs['DRAWER_RIG'].openDrawer()}}>
                  <Image source={require('./images/cart.png')} />
                </Button>
              </Right>
            </Header>
            <View style={{justifyContent:'space-between',marginTop: 10,marginBottom: 10}}>
              <GridView
                items={this.state.dataSource}
                itemsPerRow={ITEMS_PER_ROW}
                renderItem={this.renderItem}
                style={styles.listContainer}
                contentContainerStyle={styles.listContainerx}
              />
            </View>
          </View>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    maincontain:{
       height:'100%',
       flexDirection: 'column',
       backgroundColor:'#ffffff',
    },
    bodystyle:{
      marginLeft:-30,
    },
    listContainerx: {
      flexDirection: 'column',
      alignItems:'stretch',
      backgroundColor:'#ffffff',
    },
    listContainer:{
      marginBottom:70,
      backgroundColor:'#000',
    },
    pickerstyle:{
      width:100,
    },
    drawertext:{
      margin: 10,
      fontSize: 25,
      fontWeight:'800',
       textAlign: 'center',
    },

});
