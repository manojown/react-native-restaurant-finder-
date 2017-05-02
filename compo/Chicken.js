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

            <View>
              {/* <TouchableHighlight onPress={this.next.bind(this)}> */}
              <Link    underlayColor= 'white' to='/burgerfullinfo'>
              <View
                style={{alignItems:'center',borderWidth: 1, borderColor: '#EEEEEE', justifyContent:'center', margin:10}}>
                    <Image style={{height:150,width:150}} source={require('./images/a.png')}/>
                    <Text style={{fontSize:15, margin: 10}}>
                      Zappy(Chicken)
                    </Text>
                    <Text style={{fontSize:17,fontWeight:'800', color:'#4c4c4c',marginBottom: 10}}>
                    $3.00
                  </Text>
                </View>
                </Link>
              {/* </TouchableHighlight> */}
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

        <DrawerLayoutAndroid
          drawerWidth={250}
           ref={'DRAWER_RIG'}
          drawerPosition={DrawerLayoutAndroid.positions.Right}
          renderNavigationView={() => navigationViewright}>
        <View style={styles.maincontaindrawer}>
        <Header style={{backgroundColor:'#ffffff'}}>
          <StatusBar
                backgroundColor="#757575"
                barStyle="light-content"
              />
          <Left>
            <Link
              to={{
                  pathname: '/Home',
                  state: { mobile: this.state.mobile }
                }}>
            <Button transparent>
              <Image source={require('./images/back.png')} />
            </Button>
          </Link>
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
          <View style={{justifyContent:'space-between',alignItems: 'center',marginTop: 10,marginBottom: 65}}>
            <GridView
              items={this.state.dataSource}
              itemsPerRow={ITEMS_PER_ROW}
              renderItem={this.renderItem}
              style={styles.listContainer}
              contentContainerStyle={styles.listContainerx}
            />
          </View>
      </View>
    </DrawerLayoutAndroid>
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
    navigationcontainer:{
      flex: 1,
    },
    drawersmallblockheader:{
      height:112,

      alignItems:'flex-end',
      justifyContent:'center',
      flexDirection:'row',

      backgroundColor: '#87dd18',
    },
    drawersmallblock:{
      height:56,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row',

      backgroundColor: '#ededed',
    },
    drawersmallblock2:{
      flex: 1,
      backgroundColor: '#fff'
    },
    maincontaindrawer:{
      flex: 1,
      height: '100%',
      flexDirection:'column',
    },
    headerstyle:{
    },
    listContainer: {
    },
    bodystyle:{
      marginLeft:-30,
    },
    listContainerx: {
      flexDirection: 'column',
      alignItems:'flex-start',
      borderColor:'red',
    },
    pickerstyle:{
      width:100,
    },
    item:{
      borderColor: 'orange',
      alignItems: 'center',
      justifyContent: 'center'
      },
    burger: {
    },
    title: {
      fontSize: 10,
      marginBottom: 8,
      width: 90,
      textAlign: 'center',
    },
    image: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    drawertext:{
      margin: 10,
      fontSize: 25,
      fontWeight:'800',
       textAlign: 'center',
    },  drawersmallblock3:{
        flex: 1,
        backgroundColor: '#ededed',
      },
      drawersmallblock4:{
        flex: 1,
        backgroundColor: '#fff'
      },
    imageText: {
      justifyContent: 'center',
      alignItems: 'center'
    }
});
