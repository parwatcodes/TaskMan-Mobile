import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import SignedInStack from './SignedInStack';
import SignedOutStack from './SignedOutStack';

const RootStack = () => {

  return (
    <NavigationContainer>
      <StainerContainer />
    </NavigationContainer>
  )
};

const StainerContainer = () => {
  let isAuthorized = auth();

  if (!!isAuthorized) {
    return  <SignedInStack />
  } else {
    return <SignedOutStack />
  }
}

function auth() {
  return 1;
}


export default RootStack;
