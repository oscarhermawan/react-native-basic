import React from 'react';

import { View, Button, Text, TextInput, TouchableHighlight } from 'react-native';

class AddPeople extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text: 'Input Name People'
    };
  }

  static navigationOptions = {
    title: 'Add Actor',
  };


  render() {
    const navigate = this.props.navigate;
    return (
      <View style={{flex: 1, flexDirection: 'column', marginTop:20}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Text>Name Actor :</Text>
            <TextInput
              style={{height: 35, width:200}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
        </View>
        <View style={{flex: 1, marginTop:-450}}>
          <Button
            title="ADD"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>

      </View>
    );
  }
}

export default AddPeople
