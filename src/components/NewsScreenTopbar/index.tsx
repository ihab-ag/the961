import React, { FunctionComponent, useEffect, useRef } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import images from '../../assets/images'
import { TopTabScreen } from '../../navigation/types'
import styles from './styles'
import { Props } from './types'

const NewsScreenTopbar: FunctionComponent<Props> = ({
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
            <View style={styles.logoWrapper}>
                <Image
                    style={styles.logo}
                    source={images['961NewsLogo']} />
            </View>
            <FlatList
                ref={flatListRef}
                data={screens}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    const screen = item as TopTabScreen
                    return <TouchableOpacity
                        onPress={() =>
                            setIndex(index)}
                        style={styles.tabItem}>
                        {
                            screen.image
                                ? <Image
                                    style={{
                                        height: screen.name == 'Live' ? 60 : 30,
                                        width: screen.name == 'Live' ? 70 : 60,
                                        marginTop: screen.name == 'Live' ? 2 : 0,
                                        resizeMode: 'contain'
                                    }}
                                    source={screen.image} />
                                : <Text style={styles.tabbarItemText}>{screen.name}</Text>}
                    </TouchableOpacity>
                }}
            />
        </View>
    )
}

export default NewsScreenTopbar