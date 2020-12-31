import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../containers/HomeScreen';
import SettingsScreen from '../containers/SettingsScreen';
import BottomNavCustom from '../components/BottomNavCustom';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => (
    <Tab.Navigator screenOptions={{ tabBarVisible: false }} tabBar={props => <BottomNavCustom {...props}/>}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer >
        <HomeNavigator />
    </NavigationContainer>
);
