import React, {Component} from 'react';
import {
  Text,
  View,ToolbarAndroid,
  TouchableHighlight,
  StyleSheet,
  Navigator,ScrollView,
  TextInput,ViewPagerAndroid,
  Image,DrawerLayoutAndroid,
  StatusBar
} from 'react-native';
import {
  Item,
  Input,List,ListItem,
  Button,Header,Title,Right,Content,
  Label,Container, Icon, Card, CardItem, Thumbnail, Left, Body,
} from 'native-base';
import { NativeRouter, Route, Link,Router,browserHistory  } from 'react-router-native';
// var ApiService =require( './ApiService');



export default class Home extends Component {
  constructor(props) {
     super(props);
     this.state = {
       result:this.props.location.state.result
     };
     try {
   AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
  } catch (error) {
  // Error saving data
  }
   };

    render() {
      if(this.state.result.featured){
        let featured = this.state.result.featured;
        var featuredItems = featured.map(function(item) {
        return (
          <View style={styles.cardView}>
            <Card>
              <CardItem>
                <Body style={{alignItems:'center',justifyContent:'center'}}>
                  <Image style={styles.imagesize} source={require('./images/a.png')}/>
                    <Text style={styles.cardtext}>
                    {item.name}
                  </Text>
                </Body>
              </CardItem>
            </Card>
           </View>
        );
       });
      }
      if(this.state.result.subCategory){
        let category = this.state.result.subCategory;
        console.log('category',category)
        var CategoryItems = Object.entries(category).map(([key, value]) => {
          var tempobj = {};
          tempobj.key = key;
          tempobj.value = value;


          return (
            <View>

              <Link
                  underlayColor= 'white'
                to={{
                  pathname: '/Chicken',
                  state: { menu : tempobj }
                }}>


                <View style={styles.blockspace}>
                  <View>
                    <Text style={styles.text2} key={key.toString()}>{key}</Text>
                  </View>
                  <View>
                    <Image source={require('./images/aerrow.png')}/>
                  </View>
                </View>

              </Link>

              <View  style={styles.singleline}></View>
            </View>
          )
        })
      }

      var navigationViewleft = (
        <View style={styles.navigationcontainer}>
          <View style={styles.drawersmallblockheader}>
            <Text style={{margin:20,color:'white',fontSize: 17,fontWeight: "500"}}>
              Hello Rahul
            </Text>
          </View>
          <View>
            <View style={{paddingTop: 10}}>
              <TouchableHighlight underlayColor='#EEE' >
                <View style={styles.drawerItem}>
                  <Icon name='home' style={{color: 'gray'}}/>
                  <Text style={styles.drawerItemText}>Home</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight underlayColor='#EEE'>
                <View style={styles.drawerItem}>
                  <Icon name='cart' style={{color: 'gray'}} />
                  <Text style={styles.drawerItemText}>Orders</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight underlayColor='#EEE'>
                <View style={styles.drawerItem}>
                  <Icon name='person' style={{color: 'gray'}} />
                  <Text style={styles.drawerItemText}>My Account</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight underlayColor='#EEE'>
                <View style={styles.drawerItem}>
                  <Icon name='pint' style={{color: 'gray'}} />
                  <Text style={styles.drawerItemText}>Store Locator</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight underlayColor='#EEE'>
                <View style={styles.drawerItem}>
                  <Icon name='call' style={{color: 'gray'}} />
                  <Text style={styles.drawerItemText}>Contact</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
);
    return (
    <View style={{height: '100%'}}>
      <DrawerLayoutAndroid
        drawerWidth={250}
         ref={'DRAWER_REF'}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationViewleft  }>

          <View style={styles.maincontain}>
            <Header style={{backgroundColor:'#ffffff'}}>
              <StatusBar
                  backgroundColor="#757575"
                  barStyle="light-content"
                />
                <Left >
                  <Button transparent
                    onPress={() => {this.refs['DRAWER_REF'].openDrawer()}}>
                    <Image source={require('./images/nav.png')} />
                  </Button>
                </Left>
                <Body style={{marginLeft:-30}}>
                  <Title style={{color:'#4c4c4c'}}>HOME</Title>
                </Body>
                <Right >
                  <Button transparent>
                    {/* onPress={() => {this.refs['DRAWER_RIG'].openDrawer()}}> */}
                    <Image source={require('./images/cart.png')} />
                  </Button>
                </Right>
              </Header>
              {/* <DrawerLayoutAndroid
                drawerWidth={300}
                 ref={'DRAWER_RIG'}
                drawerPosition={DrawerLayoutAndroid.positions.Right}
                renderNavigationView={() => navigationViewright}>
             */}

                <ViewPagerAndroid
                  style={styles.viewPager}
                  initialPage={3}>
                  <View style={styles.pageStyle}>
                      <Image style={styles.imagecontainer} source={require('./images/banner/deal1.jpg')}/>
                  </View>
                  <View style={styles.pageStyle}>
                    <Image  style={styles.imagecontainer} source={require('./images/banner/deal2.jpg')}/>
                  </View>
                  <View style={styles.pageStyle}>
                    <Image  style={styles.imagecontainer} source={require('./images/banner/deal3.jpg')}/>
                  </View>
                  <View style={styles.pageStyle}>
                    <Image  style={styles.imagecontainer} source={require('./images/banner/deal4.jpg')}/>
                  </View>

                </ViewPagerAndroid>
                <View style={styles.viewstyle}>
                  <View style={{alignItems:'stretch'}}>
                    <Text style={styles.texttitle}>
                      Top Favourite
                    </Text>
                  </View>
                  <ScrollView horizontal={true} style={{marginLeft:10}}>
                    {featuredItems}
                  </ScrollView>
                  </View>
                      <View  style={styles.lastcontainer}>
                        {CategoryItems}
                      </View>
                    </View>
                {/* </DrawerLayoutAndroid> */}
                  </DrawerLayoutAndroid>
                </View>
        );
      }
      }

const styles = StyleSheet.create({
  maincontain:{
    flex: 1,
    height: '100%',
    flexDirection:'column',
  },

  imagesize:{
    height:70,
    width:70,
    alignItems:'center',
    justifyContent:'center',
  },
  drawersmallblockheader:{
    height:112,
    alignItems:'flex-end',
    justifyContent:'flex-start',
    flexDirection:'row',

    backgroundColor: '#87dd18',
  },
  singleline:{
    borderBottomColor: '#666666',
    borderBottomWidth: 1,
  },
    pageStyle: {
      alignItems: 'center',
    },
    viewPager:{
      height:'35%',
    },
    texttitle:{
      color:'white',
      marginTop:15,
      marginLeft:15,
      fontSize:18,
      fontWeight:'900',
      alignItems:'center',
      textAlign:'left',
    },
    cardView:{
      marginRight:10,
      marginTop:10,
      marginLeft:10,
      height:120,

    },
    viewstyle:{
      flex:1,
      height:'20%',
      backgroundColor:'#87dd18',
      flexDirection:'column',
    },
    navigationcontainer:{
    height:'100%',
    },
    drawerblock:{
      flex: 2,
      backgroundColor: '#ffffff',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'flex-end',
    },
    imagecontainer:{
      height:200,
      width:400,
    },
    drawersmallblock:{
      height:'20%',

    },
    cardstyle:{
      margin:10,
      height:'30%',
    },
    drawersmallblock2:{
    height:'100%',
      backgroundColor: '#fff'
    },
    drawertext:{
      margin: 10,
      fontSize: 20,
      color:'#000',
      fontWeight:'400',
       textAlign: 'center',
    },
    cardtext:{
    fontSize:12,
    alignItems:'center',
    },
    blockspace:{
      margin:15,
      backgroundColor:'#ffffff',
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    blockspace2:{
      backgroundColor:'#ffffff',
      margin:15,
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    text:{
      fontSize: 1,
      marginBottom:10,
      textAlign:'right',
      fontWeight:'300',
      color: '#000',
    },
    cartstyle:{
      flex:1,
      flexDirection:'row'
    },
    cartimage:{
      flex:1,

    },carttext:{
      flex:2,
      backgroundColor:'#000'

    },
    text2:{
      fontSize: 16,
      marginBottom:5,
      textAlign:'left',
      fontWeight:'300',
      color: '#000',
    },
    drawerItem: {
   height: 48,
   paddingLeft: 25,
   flexDirection: 'row',
   justifyContent: 'flex-start',
   alignItems: 'center',
 },
 drawerItemText: {
   fontSize: 15,
   fontWeight: "500",
   paddingLeft: 40,
   textAlign:'left',
   flexDirection: "row",
   justifyContent: "flex-start",

 },
    lastcontainer:{
      height:'20%',
      backgroundColor:'#ffffff',
    },
      });
