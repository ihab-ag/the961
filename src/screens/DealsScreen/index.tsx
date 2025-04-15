import React from 'react'
import { Image, ScrollView, Text, TextInput, View } from 'react-native'
import { deals } from '../../assets/data'
import icons from '../../assets/icons'
import images from '../../assets/images'
import DealsSection from '../../components/DealsSection'
import colors from '../../constants/colors'
import ScreenWrapper from '../../layout/ScreenWrapper'
import styles from './styles'
import { NavigationButton } from './types'

const NAVIGATION_BUTTONS: NavigationButton[] = [{
    name: 'Bookings',
    icon: icons.bookings
}, {
    name: 'Discover',
    icon: icons.discover
}, {
    name: 'Earn',
    icon: icons.gifts
}]

const DealsScreen = () => {
    return (
        <ScreenWrapper>
            <ScrollView>
                {/* Header */}
                <View style={styles.header}>
                    <Image style={styles.headerLogo} source={images['961DealsLogo']} />
                    <Image style={styles.headerDrawerIcon} source={icons.drawer} />
                </View>
                {/* Search Section */}
                <View style={styles.searchSection}>
                    <View style={styles.searchWrapper}>
                        <Image style={styles.searchIcon} source={icons.search} />
                        <TextInput
                            placeholder='Search'
                            placeholderTextColor={colors.darkGrey}
                            style={styles.searchInput} />
                    </View>
                </View>
                {/* Navigation Section */}
                <View style={styles.navigationSection}>
                    {NAVIGATION_BUTTONS.map(button =>
                        <View style={styles.navigationButton}>
                            <Image
                                style={styles.navigationButtonIcon}
                                source={button.icon} />
                            <Text style={styles.navigationButtonText}>{button.name}</Text>
                        </View>
                    )}
                </View>
                {/* Promo Section */}
                <View style={styles.promoSection}>
                    <Image
                        style={styles.promoImage}
                        source={images.promo} />
                </View>
                {/* Sections Section */}
                <View>
                    <DealsSection
                        data={deals}
                        title={'Popular' + "\u{1F525}"} />
                    <DealsSection
                        data={deals}
                        title={'Featured' + "\u{2728}"} />
                </View>
            </ScrollView>
        </ScreenWrapper>
    )
}

export default DealsScreen