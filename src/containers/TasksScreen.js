import React from 'react';
import { View } from 'react-native';
import * as eva from '@eva-design/eva';
import { Layout, Text } from '@ui-kitten/components';

const TasksScreen = () => {
    return (
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text category='h1'>Tasks</Text>
        </Layout>
    );
}

export default TasksScreen;
