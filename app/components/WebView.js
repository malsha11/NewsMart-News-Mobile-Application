import {WebView} from 'react-native-webview';
import React, {Component} from 'react';
export default class WebViewComponent extends Component {
  render() {
    return (
    <WebView source ={{ uri: `${this.props.route.params.url}`}} />
    );
  }
}


