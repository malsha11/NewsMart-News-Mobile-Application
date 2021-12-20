import React from 'react';

import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import FormInput from '../components/FormInput';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/rn-social-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>NewsMart News App</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    //paddingTop: 50,
    flex: 1,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
