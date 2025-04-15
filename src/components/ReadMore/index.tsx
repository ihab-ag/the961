import { View, Text, TextLayoutEventData, TextLayoutLine } from 'react-native'
import React, { FunctionComponent, useMemo, useState } from 'react'
import { Props } from './types'

const ReadMore: FunctionComponent<Props> = ({
    text,
    numberOfLines = 2,
    style
}) => {
    const [showReadMore, setShowReadMore] = useState(true)
    const [textArray, setTextArray] = useState<TextLayoutLine[]>([])
    const shortString = useMemo(() => {
        if (textArray.length == 0) {
            return text
        }
        const stringEqualToNumberOfLines = textArray.map((item, index) => {
            if (index < numberOfLines - 1)
                return item.text

            if (index == numberOfLines - 1)
                return item.text.split(' ').slice(0, -3).join(' ').trim()
        }).join(' ')

        return stringEqualToNumberOfLines
    }, [textArray])

    const toggleReadMore = () => {
        setShowReadMore(!showReadMore)
    }

    return (
        <View>
            <Text
                onTextLayout={e => {
                    console.log(e.nativeEvent);
                    if (textArray.length == 0) {
                        setTextArray(e.nativeEvent.lines)
                    }
                }}
                style={style}
            >{(showReadMore && textArray.length > numberOfLines) ? shortString.trim() : text}
                {textArray.length > numberOfLines && <Text
                    onPress={toggleReadMore}
                    style={{
                        fontWeight: 600
                    }}>{showReadMore
                        ? '...Read more'
                        : ' Read less'}
                </Text>}
            </Text>

        </View>
    )
}

export default ReadMore