import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
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
    tabItem: {
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        overflow: 'hidden'
    },
    tabbarItemText: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 600
    }
})