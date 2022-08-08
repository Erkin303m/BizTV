import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BarchaKorsatuvlar from './BarchaKorsatuvlar';
import Madaniyat from './Madaniyat';
import Iqtisodiyot from './Iqtisodiyot';

const Tab = createMaterialTopTabNavigator();


const KorsatuvTabMenu = () => {
  return (
    <Tab.Navigator style={styles.TabMenu}>
      <Tab.Screen name="Barcha korsatuvlar" component={BarchaKorsatuvlar} />
      <Tab.Screen name="Madaniyat" component={Madaniyat} />
      <Tab.Screen name="Iqtisodiyot" component={Iqtisodiyot} />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({
  TabMenu:{
    paddingTop:30,
    backgroundColor:"white"
  }
})
export default KorsatuvTabMenu