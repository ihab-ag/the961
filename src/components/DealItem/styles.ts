import { Dimensions, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default StyleSheet.create({
    container: {
        aspectRatio: 6 / 5,
        width: Dimensions.get('screen').width * 0.7,
        borderRadius: 15,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.lightGrey
    },
    imageContainer: {
        flex: 1,
        width: '100%',
    },
    imageContainerWrapper: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        padding: 10
    },
    pointsContainer: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 6,
        backgroundColor: colors.white,
        borderRadius: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.lightGrey
    },
    pointsIcon: {
        width: 15,
        height: 15,
        resizeMode: 'contain'
    },
    pointsText: {
        fontSize: 12,
        color: colors.darkGrey,
        fontWeight: 600,
        marginRight: 2
    },
    favConatiner: {
        padding: 7,
        borderRadius: 50,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        justifyContent: 'center',
        alignItems: 'center'
    },
    favIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        tintColor: colors.darkGrey
    },
    favIconActive: {
        tintColor: colors.red
    },
    itemName: {
        fontSize: 16,
        fontWeight: '800',
        color: colors.black,
        marginBottom: 4
    },
    itemCategory: {
        fontSize: 10,
        fontWeight: '600',
        color: colors.darkGrey
    },
    itemSubCategory: {
        fontWeight: '400'
    },
    itemRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 4,
    },
    ratingIcon: {
        height: 15,
        width: 15,
        marginRight: 3,
        resizeMode: 'contain'
    },
    ratingText: {
        fontSize: 12,
        fontWeight: 600,
        color: colors.black
    },
    itemlocationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    locationIcon: {
        height: 10,
        width: 10,
        marginRight: 3,
        resizeMode: 'contain'
    },
    locationText: {
        color: colors.darkGrey,
        fontSize: 10,
        fontWeight: 400
    },
    itemInfoTopConatiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    offersContainer: {
        flexDirection: 'row',
        gap: 5
    },
    offerWrapper: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        backgroundColor: colors.red,
        borderRadius: 6
    },
    offerText: {
        fontSize: 14,
        color: colors.white,
        fontWeight: 600,
        maxWidth: 80
    },
    infoWrapper: {
        height: '40%',
        padding: 10,
        justifyContent: 'space-between'
    }
})