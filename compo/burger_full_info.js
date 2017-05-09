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
  Input,List,ListItem,
  Button,Header,Title,Right,Content,
  Label,Container, Icon, Card, CardItem, Thumbnail, Left, Body,
} from 'native-base';



export default class burger_full_info extends Component {
  constructor(props) {
     super(props);
     this.state = {

     };
   };

      cart(){
        this.props.history.push('/Cart');
      }
      navigate(){
       this.props.history.push('/Chicken');
     }


    render()  {
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
              <Title style={{color:'#4c4c4c',marginLeft:-30}}>Big Brown</Title>
            </Body>
            <Right >
              <Button transparent onPress={this.cart.bind(this)}
                    >
                <Image source={require('./images/cart.png')} />
              </Button>
            </Right>
            </Header>
          <ScrollView>
            <View style={{marginBottom:70}}>
          <View style={styles.innercontainer}>
            <Image
              style={styles.imagecontainer}
              source= {require('./images/a.png')} />
              </View>

            <View>
              <View   style={styles.singleline}
              />
              <Text style={{fontSize:30,marginLeft:20,marginTop:20,marginBottom:10,color:"#4c4c4c"}}>
                Big Brown Burger
              </Text>
              <Text style={{fontSize:15,marginLeft:20,borderWidth:1,fontWeight:'600',padding:1,textAlign:'center',width:80,borderColor:'red',color:'#F44336'}}>
                CHICKEN
              </Text>
              <Text style={{fontSize:20,fontWeight:'800',margin:20,color:"#4c4c4c"}}>
                  Start from $3.00
              </Text>

              <Text style={{fontSize:15,lineHeight:30,marginLeft:20,marginBottom:20,marginRight:20}}>
              Hamburgers are often served with cheese, lettuce, tomato, bacon, onion, pickles, or chiles; condiments such as mustard, mayonnaise, ketchup, relish,etc.
              </Text>

            </View>

</View>
        </ScrollView>
          <View style={styles.textcontainer}>


              <View style={styles.smallblock1}>

                    <Text style={styles.text}>CUSTOMIZE & ADD TO CART</Text>

                </View>
              </View>

            </View>
      );
    }
}



const styles = StyleSheet.create({
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
