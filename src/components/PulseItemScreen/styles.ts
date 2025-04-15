import { Dimensions, NativeModules, StyleSheet } from "react-native";
import dimensions from "../../constants/dimensions";
import colors from "../../constants/colors";
const { StatusBarManager } = NativeModules

export default StyleSheet.create({
    wrapper: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height - dimensions.tabbar.height,
        flexDirection: 'row',
        paddingTop: StatusBarManager.getConstants().HEIGHT + 10,
        paddingHorizontal: 10,
        paddingBottom: 5
    },
    text: {
        fontSize: 32,
        fontWeight: 600
    },
    buttonsWrapper: {
        width: 60,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonWrapper: {
        width: 80,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonImage: {
        resizeMode: 'contain',
        width: 60
    },
    buttonText: {
        marginTop: 2,
        color: colors.white,
        fontSize: 12,
        fontWeight: 600,
        textAlign: 'center'
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        gap: 8
    },
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 12
    },
    profileImageWrapper: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: colors.red
    },
    profileImage: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
    profileText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 600
    },
    followButton: {
        backgroundColor: `${colors.white}7`,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 15
    },
    followText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: 600
    },
    collabContainer: {
        backgroundColor: `${colors.white}2`,
        paddingHorizontal: 4,
        paddingVertical: 2,
        borderRadius: 2
    },
    collabText: {
        color: `${colors.white}C`,
        fontSize: 12,
        fontWeight: 600
    },
    description: {
        color: colors.white,
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 16
    }
})