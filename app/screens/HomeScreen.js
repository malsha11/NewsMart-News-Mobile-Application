import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Categories from '../components/Categories';
import TrendingNews from '../components/TrendingNews';

import config from '../config/config';

class HomeScreen extends Component {
  state = {
    news: [],
  };

  render() {
    return (
      <View>
        <Categories navigation={this.props.navigation} />
        <TrendingNews/>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;
