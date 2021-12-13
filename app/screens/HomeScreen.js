import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Categories from '../components/Categories';
import TrendingNews from '../components/TrendingNews';

import config from '../config/config';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${config.API_KEY}`,
    )
      .then(res => res.json())
      .then(response => {
        this.setState({
          news: response.articles,
        });
        /*setLoading(false)*/
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    return (
      <View>
        <Categories navigation={this.props.navigation} />
        <TrendingNews navigation={this.props.navigation}/>
      </View>
    );
  }
}


