import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Entypo from 'react-native-vector-icons/Entypo';
import BizFm from '../BizFm/BizFm';
import Yangiliklar from '../Yangiliklar/Yangiliklar';
import Boshqa from '../Boshqa/Boshqa';
import KorsatuvTabMenu from '../Korsatuvlar/KorsatuvTabMenu';



export default function App() {
    const Tab = createBottomTabNavigator();

    return <Tab.Navigator tabBarOptions={{activeTintColor: '#E1084D'}} >
        <Tab.Screen name="Home"
            component={Home}
            options={{
                headerShown: false,
                tabBarLabel: 'Biz Tv',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="tv" color={color} size={size} />
                ),
            }} />
        <Tab.Screen name="BizFm" component={BizFm} options={{
            headerShown: false,
            tabBarLabel: 'Biz Fm',
            
            tabBarIcon: ({ color, size }) => (
                <Entypo name="radio" color={color} size={size} />
            ),
        }} />
        <Tab.Screen name="Yangiliklar" component={Yangiliklar} options={{
            headerShown: false,
            tabBarLabel: 'Yangiliklar',
            tabBarIcon: ({ color, size }) => (
                <Entypo name="news" color={color} size={size} />
            ),
        }} />
        <Tab.Screen name="Korsatuvlar" component={KorsatuvTabMenu} options={{
            headerShown: false,
            tabBarLabel: "Ko'rsatuvlar",
            setHidden: true,
            tabBarIcon: ({ color, size }) => (
                <Entypo name="video-camera" color={color} size={size} />
            ),
        }} />
        <Tab.Screen name="Boshqa" component={Boshqa} options={{
            headerShown: false,
            tabBarLabel: "Boshqa",
            tabBarIcon: ({ color, size }) => (
                <Entypo name="dots-three-horizontal" color={color} size={size} />
            ),
        }} />
    </Tab.Navigator>
}
