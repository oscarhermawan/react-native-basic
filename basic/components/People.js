import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  FlatList,
  Text,
  Button,
} from 'react-native';

import axios from 'axios'

class People extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dataSource: []
    }
  }

  static navigationOptions = {
    title: 'Actor Star Wars',
  };

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
    const navigate = this.props.navigate;
    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
}

export default People
