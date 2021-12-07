import React, { Component } from 'react';
import{ Text, View } from 'react-native';
class GetNews extends Component{
    state = { }
    render() {
        return ( 
            <View>
                <Text>{this.props.route.params.category}</Text>
            </View>
        );
    }
}
export default GetNews;