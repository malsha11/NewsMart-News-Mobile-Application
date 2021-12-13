import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const categories = [
  'Entertainment',
  'Business',
  'Science',
  'Health',
  'Technology',
  'Sports',
];

export default class Categories extends Component {
  state = {};
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              this.props.navigation.navigate('GetNews', {
                category,
              })
            }>
            <View>
              <Text style={styles.categoryNewsTitle}>{category}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  categoryNewsTitle: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 19,
    margin: 10,
    borderRadius: 10,
    /*backgroundColor:'#bbc5f0',*/
    color: 'black',
  },
});
