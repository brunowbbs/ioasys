import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Auth, Details, Home } from '../../src/pages';

import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
const Stack = createSharedElementStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress,
            },
          }),
        }}
      >
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}