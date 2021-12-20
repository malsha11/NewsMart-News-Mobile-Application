import React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <Text>Login Screen</Text>
      
      <Button
        title="Click Here"
        onPress={() => navigation.navigate('Trending')}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
