import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Categories from '../components/Categories';
import TrendingNews from '../components/TrendingNews';

import config from '../config/config';

export default class HomeScreen extends Component {
  state = {
    news: [],
  };

  render() {
    return (
      <View>
        <Categories navigation={this.props.navigation} />
        <TrendingNews navigation={this.props.navigation}/>
      </View>
    );
  }
}


