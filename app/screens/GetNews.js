import React, {Component} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import config from '../config/config';

class GetNews extends Component {
  state = {
    news: [],
  };
  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.category,
    });

    fetch(
      `https://newsapi.org/v2/top-headlines?category=${this.props.route.params.category}&country=in&apiKey=${config.API_KEY}`,
    )
      .then(res => res.json())
      .then(response => {
        this.setState({
          news: response.articles,
        });
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <View>
        {
            this.state.news.length === 0 ?
            <ActivityIndicator/>:
        }
      </View>
    );
  }
}
export default GetNews;
