import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Navigator,
  TextInput,StatusBar,
  Image,ScrollView,

} from 'react-native';
import { NativeRouter, Route, Link,Router } from 'react-router-native';
import {
  Item,
  Input,List,ListItem,
  Button,Header,Title,Right,Content,
  Label,Container, Icon, Card, CardItem, Thumbnail, Left, Body,
} from 'native-base';
import MapView from 'react-native-maps';

import StarRating from 'react-native-star-rating';

export default class burger_full_info extends Component {
  constructor(props) {
     super(props);
     this.state = {

     };
     console.log('in inf',this.props);
   };

      cart(){
        this.props.history.push('/Cart');
      }
      navigate(){
       this.props.history.push('/restolist');
     }


    render()  {
      console.log('in info',this.props);
      return (

        <View style={styles.container}>
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
              <Body>
              <Title style={{color:'#4c4c4c',marginLeft:-30}}>{this.props.location.state.restaurant.location.locality_verbose}</Title>
            </Body>
            <Right >
              <Button transparent onPress={this.cart.bind(this)}
                    >
                <Image source={{uri: this.props.location.state.restaurant.featured_image}}/>
              </Button>
            </Right>
            </Header>
          <ScrollView>
            <View style={{marginBottom:70}}>
          <View style={styles.innercontainer}>
            <Image
              style={styles.imagecontainer}
              source={{uri: this.props.location.state.restaurant.featured_image}} />
              </View>

            <View>
              <View   style={styles.singleline}
              />
              <Text style={{fontSize:30,marginLeft:20,marginTop:20,marginBottom:10,color:"#4c4c4c"}}>
                {this.props.location.state.restaurant.name}
              </Text>
              <Text style={{fontSize:15,marginLeft:20,borderWidth:1,fontWeight:'600',padding:1,textAlign:'center',width:80,borderColor:'red',color:'#F44336'}}>
            {this.props.location.state.restaurant.cuisines}
              </Text>
              <Text style={{fontSize:20,fontWeight:'800',margin:20,color:"#4c4c4c"}}>
                  Rs  - {this.props.location.state.restaurant.average_cost_for_two} per {this.props.location.state.restaurant.price_range}
              </Text>
              <Text style={{margin:20}}>
                {this.props.location.state.restaurant.location.address}
              </Text>
              <View style={{fontSize:15,lineHeight:30,marginLeft:20,marginBottom:20,marginRight:20}}>
              <Text style={{fontSize:15,lineHeight:30,marginLeft:20,marginBottom:20,marginRight:20}}>
              {this.props.location.state.restaurant.user_rating.votes} Reviewed -   {this.props.location.state.restaurant.user_rating.rating_text}
              </Text>
              <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={this.props.location.state.restaurant.user_rating.aggregate_rating}

                />
                <View style={styles.container1}>
                  <MapView style={styles.map1}
                        initialRegion={{
                    latitude: 23.03082799,
                    longitude: 72.65497596,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                    />
                </View>

              </View>

            </View>

</View>
        </ScrollView>
          <View style={styles.textcontainer}>


              <View style={styles.smallblock1}>
                <Link to={{  pathname: '/zomato',
                  state: { weburl: this.props.location.state.restaurant.url}
                }} >
                    <Text style={styles.text}>Proceed To Place order</Text>
                </Link>


                </View>
              </View>



            </View>
      );
    }
}



const styles = StyleSheet.create({
  container1: {
   position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map1: {
   position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
 },
  container: {
    height: '100%',
    backgroundColor:'white',
  },
  innercontainer:{
marginTop:-20,

    flexDirection:'column',
    alignItems:'center',

  },
  secondimage:{
    alignItems:'center',
      height:150,
      width:220,
  },
  singleline:{
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  textcontainer:{
    backgroundColor:'#87dd18',

    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  imagecontainer: {
  alignItems:'center',
    height:250,
    width:250,
    },
  logocontainer: {
    flexDirection:'column',
    alignItems:'center',
    height:400,
    width:'100%',
  },
  logocontainersmall: {
    margin:10,
    flexDirection:'column',
    alignItems:'center',

  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallblock:{
    margin:10
  },
  smallblock1:{
    margin:15,
    alignItems:'flex-end',
  },
  text:{
      margin:5,

    fontSize: 16,
    marginBottom:10,
    textAlign:'right',
    fontWeight:'500',
     color: 'white',
  },
  text2:{
    margin:1,
    color:'#ffffff',
    fontSize:15,
  },
  input: {

  padding:5,
  fontSize:14,
  color:'white',

  },
});
