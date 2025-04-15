import { View, Text, Dimensions, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { FunctionComponent, useEffect, useState } from 'react'
import icons from '../../assets/icons'
import colors from '../../constants/colors'
import styles from './styles'
import { Deal } from '../../types'
import { Props } from './types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/types'
import { like, unlike } from '../../redux/slices/favoritesSlice'

const DealItem: FunctionComponent<Props> = ({
    item
}) => {
    const favorites = useSelector((state: RootState) => state.favorites.favoriteDeals)
    const dispatch = useDispatch()
    const [isLiked, setIsLiked] = useState(false)
    useEffect(() => {
        if (favorites.includes(item.id)) {
            setIsLiked(true)
        } else {
            setIsLiked(false)
        }
    }, [favorites])

    const toggleLike = () => {
        if (favorites.includes(item.id)) {
            dispatch(unlike(item.id))
        } else {
            dispatch(like(item.id))
        }
    }
    return (
        <View style={styles.container}>
            {/* Image Section */}
            <ImageBackground
                resizeMode='cover'
                style={styles.imageContainer}
                source={{ uri: item.image }}>
                <View style={styles.imageContainerWrapper}>
                    <View style={styles.pointsContainer}>
                        <Image
                            style={styles.pointsIcon}
                            source={icons.points} />
                        <Text style={styles.pointsText}>{item.points}pts</Text>
                    </View>
                    <TouchableOpacity
                        onPress={toggleLike}
                        style={styles.favConatiner}>
                        {isLiked ? <Image
                            style={[styles.favIcon, styles.favIconActive]}
                            source={icons.heartFilled} />
                            : <Image
                                style={styles.favIcon}
                                source={icons.heartOutlined} />}
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            {/* Info Section */}
            <View style={styles.infoWrapper}>
                <View style={styles.itemInfoTopConatiner}>
                    <View>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemCategory}>{item.category} • <Text style={styles.itemSubCategory}>{item.subcategory}</Text></Text>
                    </View>
                    <View>
                        <View style={styles.itemRatingContainer}>
                            <Image style={styles.ratingIcon} source={icons.rating} />
                            <Text style={styles.ratingText}>{item.rating}</Text>
                        </View>
                        <View style={styles.itemlocationContainer}>
                            <Image style={styles.locationIcon} source={icons.pin} />
                            <Text style={styles.locationText}>{item.location}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.offersContainer}>
                    {
                        item.offers.map((offer, index) => {
                            if (index < 2) {
                                return (<View style={styles.offerWrapper}>
                                    <Text numberOfLines={1} style={styles.offerText}>{offer}</Text>
                                </View>)
                            }
                            if (index == 2) {
                                return (<View style={[styles.offerWrapper, {
                                    backgroundColor: colors.lightPink,
                                    borderRadius: 8
                                }]}>
                                    <Text style={[styles.offerText, {
                                        color: colors.red,
                                    }]}>+{item.offers.length - 2}</Text>
                                </View>)
                            }
                        })
                    }
                </View>
            </View>
        </View>
    )
}

export default DealItem