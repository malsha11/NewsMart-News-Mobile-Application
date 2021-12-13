import React, {Component} from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import config from '../config/config';

export default class TrendingNews extends Component {
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
        {this.state.news.length === 0 ? (
          <ActivityIndicator color="black" size="large" />
        ) : (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.state.news.map((news, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  this.props.navigation.navigate('WebView', {
                    url: news.url,
                  })
                }>
                <View style={{margin: 10}}>
                  <Image
                    source={{uri: `${news.urlToImage}`}}
                    style={styles.trandingNewsImage}
                  />
                  <Text style={styles.trandingNewsTitle}>{news.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  trandingNewsTitle: {
    width: 200,
    height: 70,
    color:'#080707',
    textAlign: 'justify',
    
  },
  trandingNewsImage: {
    height: 200,
    width: 200,
    borderRadius: 10,
  },
});
