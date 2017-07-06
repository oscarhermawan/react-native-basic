import React from 'react';
import { Button } from 'react-native'

class Navi extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const navigate = this.props.navigation.navigate;
    return (
      <Button
        title="Go to Star Wars People"
        onPress={() =>
          navigate('People')
        } />
    );
  }
}

export default Navi
