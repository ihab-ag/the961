import React, { FunctionComponent, PropsWithChildren } from 'react'
import { NativeModules, Platform, SafeAreaView, View } from 'react-native'
import { useSelector } from 'react-redux'
import colors from '../../constants/colors'
import { bottomtabScreens } from '../../constants/navigation'
import { ETheme } from '../../constants/types.ts'
import { RootState } from '../../redux/types'
const { StatusBarManager } = NativeModules;

const AppWrapper: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const { selectedScreenIndex } = useSelector((state: RootState) => state.navigation)
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: bottomtabScreens[selectedScreenIndex].theme == ETheme.light
                ? colors.white
                : colors.black,
        }}>
            {children}
        </SafeAreaView>
    )
}

export default AppWrapper