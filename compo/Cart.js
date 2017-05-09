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
import {
  Item,
  Input,Content,List,ListItem,
  Button,Header,Title,Right,
  Label,Container, Icon, Card, CardItem, Thumbnail, Left, Body,
} from 'native-base';



export default class Cart extends Component {
  constructor(props) {
     super(props);
     this.state = {

     };
   };


    render()  {
      return (

        <View style={styles.container}>
          <Header style={{backgroundColor:'#ffffff'}}>
            <StatusBar
                  backgroundColor="#757575"
                  barStyle="light-content"
                />
            <Left>
              <Button transparent>
                <Image source={require('./images/back.png')} />
              </Button>

            </Left>
              <Body>
              <Title style={{color:'#4c4c4c',marginLeft:-30}}>Big Brown</Title>
            </Body>
            <Right >
              <Button transparent>
                <Image source={require('./images/cart.png')} />
              </Button>
            </Right>
            </Header>

            <Card>
              <CardItem style={{height:'100%'}}>
                <Body style={{flex:1,backgroundColor:'green',height:'20%',flexDirection:'row',elevation:30}} >
                  <Image   source={require('./images/nav.png')}/>
                <Text style={{color:'black'}}>
                  Zappy(Chicken)
                </Text>
              </Body>
            </CardItem>
          </Card>
            </View>
      );
    }
}



const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor:'white',
  },

});
