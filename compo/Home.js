import React, {Component} from 'react';
import {
  Text,
  View,ToolbarAndroid,
  TouchableHighlight,
  StyleSheet,
  Navigator,ScrollView,
  TextInput,ViewPagerAndroid,
  Image,DrawerLayoutAndroid,
  StatusBar,Alert,
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

     };
   };


   navigate(){
    this.props.history.push('/Cart');
  }

    render() {
      var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ';

      var navigationViewleft = (
        <View style={styles.navigationcontainer}>
          <View style={styles.drawersmallblockheader}>
            <Text style={{margin:20,color:'white',fontSize: 17,fontWeight: "500"}}>
              Hello Ankur
            </Text>
          </View>
          <View>
              <View style={{paddingTop: 10}}>
                <TouchableHighlight underlayColor='rgba(220, 220, 222, 0.65)'
                  style= {{opacity:0.7}}
                  onPress={() => Alert.alert('Hello Ankur',alertMessage,)}>
                  <View style={styles.drawerItem}>
                    <Image   source={require('./images/home.png')} />
                    <Text style={styles.drawerItemText}>Home</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='rgba(220, 220, 222, 0.65)'
                  style= {{opacity:0.7}}
                  onPress={() => Alert.alert('Alert Title',alertMessage,)}>
                  <View style={styles.drawerItem}>
                    <Image source={require('./images/cart.png')} />
                    <Text style={styles.drawerItemText}>Orders</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='rgba(220, 220, 222, 0.65)'
                  style= {{opacity:0.7}}
                  onPress={() => Alert.alert('Alert Title',alertMessage,)}>
                  <View style={styles.drawerItem}>
                    <Image source={require('./images/account.png')} />
                    <Text style={styles.drawerItemText}>My Account</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor='rgba(220, 220, 222, 0.65)'
                  style= {{opacity:0.7}}
                  onPress={() => Alert.alert('Alert Title',alertMessage,)}>
                  <View style={styles.drawerItem}>
                    <Image source={require('./images/store.png')} />
                    <Text style={styles.drawerItemText}>Store Locator</Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight underlayColor='rgba(220, 220, 222, 0.65)'
                  style= {{opacity:0.7}}
                  onPress={() => Alert.alert('Alert Title',alertMessage,)}>
                  <View style={styles.drawerItem}>
                    <Image source={require('./images/call.png')} />
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
                <Button transparent onPress={this.navigate.bind(this)}>
                  <Image source={require('./images/cart.png')} />
                  </Button>
                </Right>
              </Header>
              <View style={styles.maincontain}>

                <View   style={styles.viewPager}>
                  <ViewPagerAndroid
                    style={styles.Pager}
                    initialPage={0}>
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
                </View>

                <View style={styles.viewstyle}>
                  <View style={{alignItems:'stretch'}}>
                    <Text style={styles.texttitle}>
                      Top Favourites
                    </Text>
                  </View>
                  <ScrollView horizontal={true} style={{marginLeft:10}}>
                    <View style={styles.cardView}>
                      <Card cardRadius={50}>
                        <CardItem>
                          <Body style={{alignItems:'center',justifyContent:'center'}}>
                            <Link
                              underlayColor= 'white'
                              to={{ pathname: '/burgerfullinfo'
                            }}>

                            <Image style={styles.imagesize} source={require('./images/a.png')}/>

                          </Link>
                          <Text style={styles.cardtext}>
                            Zappy(Chicken)
                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </View>
                  <View style={styles.cardView}>
                    <Card>
                      <CardItem>
                        <Body style={{alignItems:'center',justifyContent:'center'}}>
                          <Link
                            underlayColor= 'white'
                            to={{ pathname: '/burgerfullinfo'
                          }}>
                          <Image style={styles.imagesize} source={require('./images/a.png')}/>
                        </Link>
                        <Text style={styles.cardtext}>
                          Zappy(Chicken)
                        </Text>
                      </Body>
                    </CardItem>
                  </Card>
                </View>
              </ScrollView>
            </View>

            <View  style={styles.lastcontainer}>
              <Link
                underlayColor= 'white'
                to={{
                  pathname: '/Chicken',
                  state: { mobile: this.state.mobile }
                }}>
                <View style={styles.blockspace}>
                  <View>
                    <Text style={styles.text2}>Chicken</Text>
                  </View>
                  <View>
                    <Image source={require('./images/aerrow.png')}/>
                  </View>
                  </View>
                </Link>
                <View   style={styles.singleline}
                />
                <Link
                  underlayColor= 'white'
                  to={{ pathname: '/Chicken',
                  state: { mobile: this.state.mobile }
                }}>
                <View style={styles.blockspace2}>
                  <View>
                    <Text style={styles.text2}>Tuna & Salmon</Text>
                  </View>
                  <View>
                    <Image source={require('./images/aerrow.png')}/>
                  </View>
                </View>
              </Link>
              <View   style={styles.singleline}
              />
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
    flexDirection:'column',
  },

  imagesize:{
    height:80,
    width:80,
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
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
  },
    pageStyle: {
      alignItems: 'center',

    },
    viewPager:{
      height:'35%',
      flex:2,
    },
    Pager:{

      height:'100%',
      width:'100%',
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
      marginBottom:20,

      justifyContent:'center',

    },
    viewstyle:{
      flex:2,
      justifyContent:'center',
      backgroundColor:'#87dd18',
      flexDirection:'column',
    },
    navigationcontainer:{
    height:'100%',
    },
      imagecontainer:{
      height:'100%',
      width:'100%',
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
   color:'#000',
   flexDirection: "row",
   justifyContent: "flex-start",

 },
    lastcontainer:{
      flex:1.5,
      backgroundColor:'#ffffff',
    },
      });
