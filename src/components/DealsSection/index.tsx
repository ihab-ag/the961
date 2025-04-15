import React, { FunctionComponent } from 'react'
import { FlatList, Text, View } from 'react-native'
import DealItem from '../DealItem'
import styles from './styles'
import { Props } from './types'

const DealsSection: FunctionComponent<Props> = ({
    title,
    data
}) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>
                {title}
            </Text>
            <FlatList
                contentContainerStyle={styles.listContent}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => {
                    return <DealItem item={item} />
                }}
            />
        </View>
    )
}

export default DealsSection