import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Auth, Home } from '../../src/pages';

import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
/* import { Platform } from 'react-native';
 */
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

        {/* <Stack.Screen
          name="Home"
          component={Home}


          sharedElementsConfig={(route, otherRoute, showing) => {
            const { item } = route.params;

            if (Platform.OS === 'android') return [];

            return [
              {
                id: `item.${item.id}.photo`
              },
              {
                id: `item.${item.id}.name`,
                animation: "fade",
                resize: "clip",
                align: "left-top",
              }
            ]
          }}
        /> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}