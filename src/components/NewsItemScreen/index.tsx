import React, { FunctionComponent } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import { Props } from './types'

const NewsItemScreen: FunctionComponent<Props> = ({
    name
}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

export default NewsItemScreen