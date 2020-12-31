import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabsButton: {
        width: 30,
        height: 30,
    },
    tabsButtonMain: {
        width: 70,
        height: 70,
        backgroundColor: "white",
        borderRadius: 100,
        position: 'absolute',
        zIndex: 2,
        left: "57.5%",
        bottom: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabsIconMain: {
        width: 40,
        height: 40,
    },
    tabsIcon: {
        width: "100%",
        height: "100%",
    },
    tabsView: {
        position: 'absolute',
        zIndex: 2,
        height: 65,
        alignItems: 'center',
        bottom: 0,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: "15%",
        paddingRight: "15%",
    }
});

export default styles;
