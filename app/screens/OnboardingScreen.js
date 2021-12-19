import React from 'react';
import {View, Text, Button, StyleSheet,TouchableOpacity, Image} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({...props}) => (
    <Button
        title='Skip'
        color='#000000'
        
    />
);

const Next = ({...props}) => (
    <Button
        title='Next'
        color='#000000'
        {...props}
    />
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:8}}
        {...props}>
        <Text style= {{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace("Login")}/* After skip Go to login screen*/
      onDone={() => navigation.navigate("Login")} /* After Done Go to login screen*/
      pages={[
        {
          backgroundColor: '#b7ebc5',
          image: <Image source={require('../assets/images/onboarding-img1.png')} />,
          title: 'Welcome To NewsMart',
          subtitle: 'A New Way To Connect With The World',
        },
        {
          backgroundColor: '#d4b7eb',
          image: <Image source={require('../assets/images/onboarding-img2.png')} />,
          title: 'Easy To Get Breaking News',
          subtitle: 'Ability to get breaking news quickly and esaily',
        },
        {
          backgroundColor: '#ebbdb7',
          image: <Image source={require('../assets/images/onboarding-img3.png')} />,
          title: 'Get News For All Catagories',
          subtitle: 'Technology, Science,Entertainment,Business,Health & Sports',
        },
        {
          backgroundColor: '#eaebb7',
          image: <Image source={require('../assets/images/onboarding-img4.png')} />,
          title: 'Get Treanding News',
          subtitle: 'Access All The Treanding News In A Second',
        },
        {
          backgroundColor: '#b7ebde',
          image: <Image source={require('../assets/images/onboarding-img5.png')} />,
          title: 'Getting Start, It Is Easy',
          subtitle: 'Create Your Account And Get News Easily',
        },

      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
