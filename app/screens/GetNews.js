import React, {Component} from 'react';
import {Text, View} from 'react-native';
class GetNews extends Component {
  state = {
      news:[]
  };
  componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.category,
    });

    fetch(
        `https://newsapi.org/v2/top-headlines?
        category=${}&country=in&apiKey=${config.API_KEY}`,
      )
        .then(res => res.json())
        .then(response => {
          this.setState({
            news: response.articles,
          });
          setLoading(false)
        })
        .catch(error => {
          console.log(error);
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
