'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,TouchableHighlight,TextInput
} from 'react-native';
import {  Container, Content, ListItem, CheckBox, Header,Left,Button,Icon , Item ,Input , Body ,Title ,Right} from 'native-base';
import { NativeRouter, Route, Link,Router } from 'react-router-native';
import GridView from 'react-native-grid-view'
import StarRating from 'react-native-star-rating';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
var API_KEY = 'f86bb6c46b5bcddd4d290139aeaccb70';
var API_URL = 'https://developers.zomato.com/api/v2.1/geocode?lat=23.0308279&lon=72.65497596';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;
var MOVIES_PER_ROW = 2;

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: null,
      area:null,
    }
  }
  navigate(restorent,area){
    this.props.history.push('/burgerfullinfo');
  }

  render() {
      return (

        <View style={{alignItems:'stretch',justifyContent:'center',padding:5,backgroundColor:'white'}}>

        <Link to={{
          pathname: '/burgerfullinfo',

          state: { restaurant: this.props.movie.restaurant,area:this.state.area}
        }}>
             <View
               style={{alignItems:'center',borderWidth: 1, borderColor: '#EEE', justifyContent:'center'}}>
                   <Image style={{height:150,width:150}} source={{uri: this.props.movie.restaurant.featured_image}}/>
                   <Text style={{fontSize:15, margin: 10 , fontFamily: 'Iowan Old Style'}}>{this.props.movie.restaurant.name}</Text>
                   <Text style={{fontSize:15, margin: 10, fontWeight:'bold'}}>
                        Rs  - {this.props.movie.restaurant.average_cost_for_two} per {this.props.movie.restaurant.price_range}
                   </Text>



                   <View style={{alignItems:'center'}}>
                   <Text>
                    {this.props.movie.restaurant.user_rating.votes} Reviewed -   {this.props.movie.restaurant.user_rating.rating_text}
                   </Text>

                   <StarRating
                       disabled={true}
                       maxStars={5}
                       rating={this.props.movie.restaurant.user_rating.aggregate_rating}

                     />
                     </View>
               </View>
            </Link>
          </View>

      );
  }
}

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: null,
      loaded: false,
      area : null,
      latitude:null,
      longitude:null,
      error:null
    }


  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {

        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
          this.fetchData();
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

  }

  fetchData() {
    fetch(API_URL,{
      method: 'GET',
      headers: {
        'user-key':'f86bb6c46b5bcddd4d290139aeaccb70'
      }
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('nearby_restaurants',responseData)
        this.setState({
          dataSource: responseData.nearby_restaurants,
          loaded: true,
          area:responseData.location
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (

      <View>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.state.area.city_name} - {this.state.area.title}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
        <View style={{padding:5,height:60,  backgroundColor: '#58dafe',}}>
          <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={(text) => console.log('searching for ', text)}
          />
        </View>
      <GridView
        items={this.state.dataSource}
        itemsPerRow={MOVIES_PER_ROW}
        renderItem={this.renderItem}
        style={styles.listView}
      />

    </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={{alignItems:'center' , marginTop:200 , height:'100%'}}>
        <Bars size={20} color="green" />
      </View>
    );
  }

  renderItem(item) {
      return <Movie movie={item} />
  }
}

var styles = StyleSheet.create({

    input: {

      flex: 1,
      paddingHorizontal: 8,
      fontSize: 15,
      backgroundColor: '#FFFFFF',
      borderRadius: 2,
    },
  movie: {
    height: 150,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 10,
    marginBottom: 8,
    width: 90,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#58dafe',
  },
  maincontain:{
       height:'100%',
       flexDirection: 'column',
       backgroundColor:'#45ff45',
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
    }
});
