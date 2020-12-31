import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@ui-kitten/components';

const TabsButton = (props) => {
    console.log(props);
    return (
        <TouchableOpacity
            onPress={() => {}}
            style={props.styleBtn}
        >
            <Icon
                name={props.icon}
                style={props.styleIcon}
                fill={props.color}
            />
        </TouchableOpacity>
    );
}

export default TabsButton;
