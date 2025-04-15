import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 32,
        fontWeight: 600
    }
})