import React from 'react';
import TabsShape from './TabsShape';
import TabsHandler from './TabsHandler';

const BottomNavCustom = () => {

    return (
        <>
            <TabsShape />
            <TabsHandler style={{position: 'absolute', zIndex: 10, bottom: 0}}/>
        </>
    );
}

export default BottomNavCustom;
