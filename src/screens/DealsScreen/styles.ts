import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    headerLogo: {
        resizeMode: 'contain',
        height: 30,
        width: 100
    },
    headerDrawerIcon: {
        resizeMode: 'contain',
        height: 40,
        width: 50
    },
    searchSection: {
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    searchWrapper: {
        backgroundColor: colors.lightGrey,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 0
    },
    searchIcon: {
        height: 20,
        width: 20,
        marginRight: 10,
        tintColor: colors.darkGrey
    },
    searchInput: {
        margin: 0,
        padding: 0,
        flex: 1,
        height: 38,
        fontSize: 16,
        color: colors.black
    },
    navigationSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20
    },
    navigationButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    navigationButtonIcon: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginBottom: 8
    },
    navigationButtonText: {
        color: colors.black,
        fontSize: 12,
        fontWeight: 500,
        textAlign: 'center',
        letterSpacing: 0.4
    },
    promoSection: {
        paddingHorizontal: 15,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 140,
        overflow: 'hidden'
    },
    promoImage: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
    }
})