import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { BottomNavigation, BottomNavigationTab, Icon, Button } from '@ui-kitten/components';
import styles from '../styles/styles'
import TabsButton from './TabsButton';

const TabsHandler = () => {

    return (
        <View
            style={styles.tabsView}
        >
            <TabsButton icon="home-outline" color="#000000" styleBtn={styles.tabsButton} styleIcon={styles.tabsIcon} />
            <TabsButton icon="plus-outline" color="#000000" styleBtn={styles.tabsButtonMain} styleIcon={styles.tabsIconMain} />
            <TabsButton icon="settings-outline" color="#000000" styleBtn={styles.tabsButton} styleIcon={styles.tabsIcon} />
        </View>
    );
}

export default TabsHandler;
