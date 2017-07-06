import React from 'react';
import { AppRegistry, View, FlatList, Text, Button } from 'react-native';
import { connect } from 'react-redux'
import { loadData } from '../actions'

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
    this.props.loadDataTriger()
    // axios.get('http://swapi.co/api/people/')
    // .then((people)=>{
    //   // console.log(people);
    //   this.setState({dataSource:people.data.results.map((result, index) => {
    //     return {
    //       key: index,
    //       ...result,
    //     }
    //   })})
    // })
  }

  render() {
    const navigate = this.props.navigate;
    return (
      <View>
        <FlatList
          data={this.props.peoples}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    peoples:state.peoples
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    loadDataTriger:()=>dispatch(loadData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (People)
