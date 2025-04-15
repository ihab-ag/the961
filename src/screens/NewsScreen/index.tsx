import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, View } from 'react-native'
import NewsScreenTopbar from '../../components/NewsScreenTopbar'
import { newsTabsScreens } from '../../constants/navigation'
import ScreenWrapper from '../../layout/ScreenWrapper'
import { TopTabScreen } from '../../navigation/types'

const SCREEN_WIDTH = Dimensions.get('window').width

const NewsScreen = () => {
    const [index, setIndex] = useState(newsTabsScreens[0].index)
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
            <NewsScreenTopbar
                index={index}
                setIndex={setIndex}
                screens={newsTabsScreens} />
            <FlatList
                showsHorizontalScrollIndicator={false}
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
                data={newsTabsScreens}
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
        </ScreenWrapper>
    )
}

export default NewsScreen