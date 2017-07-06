import React from 'react';
import { Button, View } from 'react-native'
import { Navi } from '../components'

class Home extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <Navi navigation={this.props.navigation}/>
      </View>
    );
  }
}

export default Home
