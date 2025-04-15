import React, { FunctionComponent } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import images from '../../assets/images'
import styles from './styles'
import { Props } from './types'
import { ETheme } from '../../constants/types.ts'

const BottomTabbar: FunctionComponent<Props> = ({
    screens,
    navigate,
    selectedindex
}) => {
    return (
        <View style={[styles.wrapper,
        screens[selectedindex].theme == ETheme.light && styles.wrapperLight
        ]}>
            <View style={styles.logoWrapper}>
                <Image
                    style={styles.logo}
                    source={images['961Logo']} />
            </View>
            {screens.map(screen => <TouchableOpacity
                onPress={() => {
                    navigate(screen.index)
                }}
                key={screen.index}
                style={styles.tabItemWrapper}>
                <Image
                    style={[styles.tabItemIcon,
                    screens[selectedindex].theme == ETheme.light && styles.tabItemIconLight,
                    selectedindex == screen.index && styles.tabItemIconActive,
                    ]}
                    source={screen.icon} />
                <Text style={[styles.tabItemText,
                screens[selectedindex].theme == ETheme.light && styles.tabItemTextLight,
                selectedindex == screen.index && styles.tabItemTextActive,
                (screens[selectedindex].theme == ETheme.light && selectedindex == screen.index) && styles.tabItemTextActiveLight,
                ]}>
                    {screen.name}
                </Text>
            </TouchableOpacity>)}
        </View >
    )
}

export default BottomTabbar