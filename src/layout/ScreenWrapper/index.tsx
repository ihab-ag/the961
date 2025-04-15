import React, { FunctionComponent, PropsWithChildren, useEffect } from 'react'
import { NativeModules, Platform, StatusBar, View } from 'react-native'
import { useSelector } from 'react-redux'
import { bottomtabScreens } from '../../constants/navigation'
import { ETheme } from '../../constants/types'
import { RootState } from '../../redux/types'
import colors from '../../constants/colors'
const { StatusBarManager } = NativeModules;
const ScreenWrapper: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const { selectedScreenIndex } = useSelector((state: RootState) => state.navigation)
    useEffect(() => {
        StatusBar.setBarStyle(bottomtabScreens[selectedScreenIndex].theme == ETheme.dark
            ? 'light-content'
            : 'dark-content')
    }, [selectedScreenIndex])
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                backgroundColor: bottomtabScreens[selectedScreenIndex].theme == ETheme.light
                    ? colors.white
                    : colors.black,
                height: Platform.OS === 'android' ? StatusBarManager.getConstants().HEIGHT : 0,
            }} />
            {children}
        </View>
    )
}

export default ScreenWrapper