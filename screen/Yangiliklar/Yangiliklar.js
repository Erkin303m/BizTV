import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ScrollspyNav from "react-scrollspy-nav";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BarchaY from './BarchaY';
import Korsatuvlar from "./Korsatuvlar"

const Tab = createMaterialTopTabNavigator();


const Yangiliklar = () => {
  return (
    <Tab.Navigator style={styles.TabMenu}>
      <Tab.Screen name="Barcha yangiliklar" component={BarchaY} />
      <Tab.Screen name="Korsatuvlar" component={Korsatuvlar} />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
  TabMenu:{
    paddingTop:30,
    backgroundColor:"white"
  }
})
export default Yangiliklar