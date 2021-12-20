import {useEffect, useState, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AluthStack';

const Routes = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Routes;
