import React, { FunctionComponent, useEffect, useRef } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { TopTabScreen } from '../../navigation/types'
import styles from './styles'
import { Props } from './types'
import colors from '../../constants/colors'
import icons from '../../assets/icons'

const PulseScreenTopbar: FunctionComponent<Props> = ({
    screens,
    index,
    setIndex
}) => {
    const flatListRef = useRef<FlatList>(null)

    const onIndexChanged = (index: number) => {
        flatListRef.current?.scrollToItem({
            animated: true,
            item: screens[index],
        })
    }
    useEffect(() => {
        onIndexChanged(index)
    }, [index])
    return (
        <View style={styles.wrapper}>
            <FlatList
                ref={flatListRef}
                data={screens}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    const screen = item as TopTabScreen
                    return <View style={styles.tabItemWrapper}>
                        <TouchableOpacity
                            onPress={() =>
                                setIndex(screen.index)}
                            style={styles.tabItem}>
                            {
                                screen.image
                                    ? <Image
                                        style={styles.tabbarItemImage}
                                        source={screen.image} />
                                    : <Text style={styles.tabbarItemText}>{screen.name}</Text>}
                        </TouchableOpacity>
                        <View style={[styles.tabbarItemindicator,
                        screen.index === index && styles.tabbarItemindicatorActive]} />
                    </View>
                }}
            />
            {/* Buttons here can be handled by redux to trigger open the search screen or handle mute for videos */}
            <View style={styles.buttonsWrapper}>
                <Image
                    source={icons.sound} style={styles.buttonIcon} />
            </View>
        </View>
    )
}

export default PulseScreenTopbar