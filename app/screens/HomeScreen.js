import React, {Component} from 'react';
import {
  View,
  ActivityIndicator,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Categories from '../components/Categories';
import TrendingNews from '../components/TrendingNews';
import config from '../config/config';


const deviceWidth = Dimensions.get('window').width;

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
        <TrendingNews navigation={this.props.navigation} />
        <View style={styles.header}>
          {this.state.news.length === 0 ? (
            <ActivityIndicator
              style={styles.indicater}
              size="large"
              color="black"
            />
          ) : (
            <View>
              {this.state.news.map((news, index) =>
                news.urlToImage ? (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      this.props.navigation.navigate('WebView', {
                        /*getnews from websites*/ url: news.url,
                      })
                    }>
                    <View style={styles.newsBox} key={index}>
                      <Image
                        source={{uri: `${news.urlToImage}`}}
                        style={styles.newsImage}
                      />
                      <Text style={styles.newstitle}>{news.title}</Text>
                    </View>
                  </TouchableOpacity>
                ) : null,
              )}
            </View>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  newsBox: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
    width: deviceWidth - 30,
    marginVertical: 7,
  },
  indicater: {
    width: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },

  newstitle: {
    width: deviceWidth - 130,
    paddingLeft: 10,
    paddingTop: 5,
  },
  newsImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
});
