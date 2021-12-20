import React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Signup Screen</Text>
      <Button
        title="Click Here"
        onPress={() => navigation.navigate('Trending')}
      />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
