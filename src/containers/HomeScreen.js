import React from 'react';
import { View } from 'react-native';
import * as eva from '@eva-design/eva';
import {Layout, Text } from '@ui-kitten/components';
import { TasksScreen } from './TasksScreen';

const HomeScreen = () => {
    return (
        <Layout level="4" style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgoundColor: 'black', width: '100%', height: '100%'}}>
            <Text category='h1'>Home</Text>
        </Layout>
    );
}

export default HomeScreen;
