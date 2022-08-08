import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BizTv from '../BizTv/BizTv';
import BizC from "../BizTv/BizC"
import Player from '../BizTv/Player';
import TabMenu from "./TabMenu"
import BarchaY from '../Yangiliklar/BarchaY';
import KorsatuvDataPage from '../Yangiliklar/KorsatuvDataPage';
import InfoK from '../Korsatuvlar/infoK';
import Teledasturlar from '../Boshqa/Teledasturlar';
import LoyihaH from '../Boshqa/LoyihaqHaqida';


const Stack = createNativeStackNavigator();

const Navoigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tab" component={TabMenu} options={{ headerShown: false }} />
        <Stack.Screen name="BizTv" component={BizTv} options={{ headerShown: false }} />
        <Stack.Screen name="BizC" component={BizC} options={{ headerShown: false }} />
        <Stack.Screen name="Player" component={Player} options={{ headerShown: false }} />
        <Stack.Screen name="Markaziy Studio" component={KorsatuvDataPage}  />
        <Stack.Screen name="To'liq ma'lumot" component={InfoK}  />
        <Stack.Screen name="Teledasturlar" component={Teledasturlar}  />
        <Stack.Screen name="Loyiha haqida" component={LoyihaH}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navoigation