import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
    wrapper: {
        paddingVertical: 15
    },
    title: {
        color: colors.black,
        fontSize: 22,
        fontWeight: 800,
        paddingHorizontal: 15,
        paddingBottom: 10
    },
    listContent: {
        gap: 15,
        paddingHorizontal: 15
    }
})