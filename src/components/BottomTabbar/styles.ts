import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import dimensions from "../../constants/dimensions";

export default StyleSheet.create({
    wrapper: {
        backgroundColor: colors.black,
        height: dimensions.tabbar.height,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    wrapperLight: {
        backgroundColor: colors.white,
    },
    logo: {
        height: 25,
        resizeMode: 'contain',
    },
    logoWrapper: {
        width: 60,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabItemWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabItemIcon: {
        tintColor: colors.white,
        height: 30,
        resizeMode: 'contain'
    },
    tabItemIconActive: {
        tintColor: colors.red,
    },
    tabItemIconLight : {
        tintColor: colors.black
    },
    tabItemText: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 12,
        alignSelf: 'center',
        fontWeight: 400,
    },
    tabItemTextLight: {
        color: colors.black
    },
    tabItemTextActive: {
        fontWeight: 600,
    },
    tabItemTextActiveLight: {
        fontWeight: 600,
        color: colors.red
    }
})