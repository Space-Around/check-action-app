import React from 'react';
import { Dimensions } from 'react-native';
import { Svg, Path, Rect } from 'react-native-svg';
import { line, curveBasis } from 'd3-shape';

const lineGenerator = line()
.x(({ x }) => x)
.y(({ y }) => y);

const TabsShape = () => {

    let width = Dimensions.get('window').width,
        height = 64,
        tabWidth = width/5;

        const left = lineGenerator([
            { x: 0, y: 0 },
            { x: tabWidth * 2, y: 0 },
        ]);
        const right = lineGenerator([
            { x: tabWidth * 3, y: 0 },
            { x: width, y: 0 },
            { x: width, y: height },
            { x: 0, y: height },
            { x: 0, y: 0 },
        ]);

        const center = lineGenerator.curve(curveBasis)([
            { x: tabWidth * 2, y: 0 },
            { x: tabWidth * 2 - 5, y: 0 },
            { x: tabWidth * 2 + 10, y: height * 0.6 },
            { x: tabWidth * 3 - 10, y: height * 0.6 },
            { x: tabWidth * 3 + 5, y: 0 },
            { x: tabWidth * 3, y: 0 },
        ]);

        let d = `${left} ${center} ${right}`;

    return (
        <Svg width={width} height={height} style={{evaluate: 0, backgroundColor: '#E4E9F2'}}>
            <Path fill="white" {...{d}} />
        </Svg>
    );
}


export default TabsShape;
