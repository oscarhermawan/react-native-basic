/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import axios from 'axios'
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

import {
  AppRegistry,
  StyleSheet,
  View,
  FlatList
} from 'react-native';

export default class basic extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      dataSource: []
    }
  }

  componentDidMount(){
    axios.get('http://swapi.co/api/people/')
    .then((people)=>{
      // console.log(people);
      this.setState({dataSource:people.data.results.map((result, index) => {
        return {
          key: index,
          ...result,
        }
      })})
    })
  }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>


        <Container>
           <Content>
             <List>
               <ListItem avatar>
                 <Left>
                   <Thumbnail square source={{ uri: 'https://pbs.twimg.com/profile_images/741125472956887040/0HF84IRb.jpg' }} />
                 </Left>
                 <Body>
                   <Text>Kumar Pratik</Text>
                   <Text note>Doing what you like will always keep you happy . .</Text>
                 </Body>
                 <Right>
                   <Text note>3:43 pm</Text>
                 </Right>
               </ListItem>

               <ListItem avatar>
                 <Left>
                   <Thumbnail square source={{ uri: 'https://pbs.twimg.com/profile_images/741125472956887040/0HF84IRb.jpg' }} />
                 </Left>
                 <Body>
                   <Text>Kumar Pratik</Text>
                   <Text note>Doing what you like will always keep you happy . .</Text>
                 </Body>
                 <Right>
                   <Text note>3:43 pm</Text>
                 </Right>
               </ListItem>
             </List>
           </Content>
         </Container>
      </View>
    );
  }
}


AppRegistry.registerComponent('basic', () => basic);
