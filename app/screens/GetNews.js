import React, {Component} from 'react';
import {ActivityIndicator, ScrollView, Text, View, Image, Dimensions} from 'react-native';
import config from '../config/config';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width; 

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
        /*setLoading(false)*/
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
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.state.news.map((news, index) =>
              news.urlToImage ? (
                <View
                  style={{display: 'flex', flexDirection: 'row',
                  backgroundColor: 'white', borderRadius:10, elevation: 4}}
                  key={index}>
                  <Image
                    source={{uri: `${news.urlToImage}`}}
                    style={{height: 100, width: 100, borderRadius: 10}}
                  />
                  <Text>{news.title}</Text>
                </View>
              ) : null,
            )}
          </ScrollView>
        )}
      </View>
    );
  }
}
export default GetNews;
