/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './app/screens/HomeScreen';
import GetNews from './app/screens/GetNews';
import OnboardingScreen from './app/screens/OnboardingScreen';
import LoginScreen from './app/screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WebViewComponent from './app/components/WebView';

const AppStack = createStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLanuch').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <AppStack.Navigator headerMode="none">
          <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
          <AppStack.Screen name="Login" component={LoginScreen} />
          <AppStack.Screen name="Trending" component={HomeScreen} />
          <AppStack.Screen name="GetNews" component={GetNews} />
          <AppStack.Screen
            name="WebView"
            component={WebViewComponent}
            options={{headerShown: false}}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <LoginScreen />;
  }
};

export default App;
