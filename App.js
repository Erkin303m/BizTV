import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screen/Home';
import Korsatuvlar from './screen/Korsatuvlar/Korsatuvlar';
import Boshqa from './screen/Boshqa/Boshqa';
import BizFm from './screen/BizFm/BizFm';
import BizTv from './screen/BizTv/BizTv';
import Yangiliklar from "./screen/Yangiliklar/Yangiliklar"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BizC from './screen/BizTv/BizC';
import Player from './screen/BizTv/Player';
import Entypo from 'react-native-vector-icons/Entypo';



export default function App() {
  const Tab = createBottomTabNavigator();

  const Stack = createNativeStackNavigator();
  const TabStack = () => {
    return <Tab.Navigator>
      <Tab.Screen name="Home" 
       component={Home} 
       options={{
        headerShown: false,
        tabBarLabel: 'Biz Tv',
        tabBarIcon: ({ color, size }) => (
          <Entypo name="tv" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="BizFm" component={BizFm}   options={{
        headerShown: false,
        tabBarLabel: 'Biz Fm',
        tabBarIcon: ({ color, size }) => (
          <Entypo name="radio" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Yangiliklar" component={Yangiliklar}   options={{
        headerShown: false,
        tabBarLabel: 'Yangiliklar',
        tabBarIcon: ({ color, size }) => (
          <Entypo name="news" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Korsatuvlar" component={Korsatuvlar}   options={{
        headerShown: false,
        tabBarLabel: "Ko'rsatuvlar",
        tabBarIcon: ({ color, size }) => (
          <Entypo name="video-camera" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="Boshqa" component={Boshqa}  options={{
        headerShown: false,
        tabBarLabel: "Boshqa",
        tabBarIcon: ({ color, size }) => (
          <Entypo name="dots-three-horizontal" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
    
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={TabStack} />
        <Stack.Screen name="BizTv" component={BizTv} />
        <Stack.Screen name="BizC" component={BizC} />
        <Stack.Screen name="Player" component={Player} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
