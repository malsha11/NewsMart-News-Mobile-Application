import React, {Component} from 'react';
import {Text, View} from 'react-native';
class GetNews extends Component {
  state = {};
  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.category,
    });
  }
  render() {
    return (
      <View>
        <Text>{this.props.route.params.category}</Text>
      </View>
    );
  }
}
export default GetNews;
