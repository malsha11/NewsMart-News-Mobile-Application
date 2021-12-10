import React, {Component} from 'react';
import {ActivityIndicator, ScrollView, Text, View, Image} from 'react-native';
import config from '../config/config';

class GetNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }
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
        {this.state.news.length === 0 ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <ScrollView>
            {this.state.news.map((news, index) => (
              <View key={index}>
              <Image
                  source={{uri: `${news.urlToImage}`}}
                  style={{height: 200, width: 200, borderRadius: 10}}
                />
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}
export default GetNews;
