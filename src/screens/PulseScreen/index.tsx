import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, ImageBackground, StyleSheet, View } from 'react-native'
import NewsScreenTopbar from '../../components/NewsScreenTopbar'
import { pulseTabsScreens } from '../../constants/navigation'
import ScreenWrapper from '../../layout/ScreenWrapper'
import { TopTabScreen } from '../../navigation/types'
import PulseScreenTopbar from '../../components/PulseScreenTopbar'
import images from '../../assets/images'

const SCREEN_WIDTH = Dimensions.get('window').width

const PulseScreen = () => {
    const [index, setIndex] = useState(pulseTabsScreens[0].index)
    const flatListRef = useRef<FlatList>(null)

    const navigateToScreenindex = (index: number) => {
        flatListRef.current?.scrollToIndex({
            animated: true,
            index
        })
    }

    useEffect(() => {
        navigateToScreenindex(index)
    }, [index])

    return (
        <ScreenWrapper>
            <FlatList
                showsHorizontalScrollIndicator={false}
                style={StyleSheet.absoluteFillObject}
                ref={flatListRef}
                onMomentumScrollEnd={(event) => {
                    const newIndex = Math.round(event.nativeEvent.contentOffset.x / SCREEN_WIDTH)
                    setIndex(newIndex)
                }}
                getItemLayout={(_, index) => ({
                    length: SCREEN_WIDTH,
                    offset: SCREEN_WIDTH * index,
                    index
                })}
                horizontal
                pagingEnabled={true}
                data={pulseTabsScreens}
                renderItem={({ item }) => {
                    const screen = item as TopTabScreen
                    return (<View
                        style={{
                            width: SCREEN_WIDTH
                        }}>
                        {screen.component({})}
                    </View>)
                }}
            />
            <PulseScreenTopbar
                index={index}
                setIndex={setIndex}
                screens={pulseTabsScreens} />
        </ScreenWrapper>
    )
}

export default PulseScreen