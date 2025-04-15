import React from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import BottomTabbar from '../../components/BottomTabbar'
import { bottomtabScreens } from '../../constants/navigation'
import { navigate } from '../../redux/slices/navigationSlice'
import { RootState } from '../../redux/types'

const BottomTabsStack = () => {
    const { selectedScreenIndex } = useSelector((state: RootState) => state.navigation)
    const dispatch = useDispatch()

    const navigateToIndex = (index: number) => {
        dispatch(navigate(index))
    }
    return (
        <View style={{
            flex: 1,
        }}>
            {bottomtabScreens[selectedScreenIndex].component({})}
            <BottomTabbar
                selectedindex={selectedScreenIndex}
                screens={bottomtabScreens}
                navigate={navigateToIndex} />
        </View>
    )
}

export default BottomTabsStack