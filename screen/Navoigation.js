import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BizTv from './BizTv/BizTv';
import BizC from "./BizTv/BizC"

const Stack = createNativeStackNavigator();

const Navoigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BizTv" component={BizTv} />
        <Stack.Screen name="BizC" component={BizC} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navoigation