import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logoWrapper: {
        width: '25%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 18,
        resizeMode: 'contain'
    },
    tabItemWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
    },
    tabItem: {
        paddingHorizontal: 6,
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        overflow: 'hidden',
        opacity: 0.8
    },
    tabbarItemImage: {
        height: 30,
        width: 60,
        resizeMode: 'contain'
    },
    tabbarItemText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 600
    },
    tabbarItemindicator: {
        height: 3,
        width: 0,
        backgroundColor: colors.white,
        marginTop: 3
    },
    tabbarItemindicatorActive: {
        backgroundColor: colors.white,
        width: 30,
    },
    buttonsWrapper: {
        width: 65,
        paddingRight: 10
    },
    buttonIcon: {
        width: '100%',
        height: 25,
        resizeMode: 'contain'
    }
})