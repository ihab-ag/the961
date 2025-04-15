import { Text } from "react-native";
import icons from "../assets/icons";
import { BottomtabScreen, TopTabScreen } from "../navigation/types";
import { ETheme } from "./types.ts";
import NewsScreen from "../screens/NewsScreen/index.tsx";
import DealsScreen from "../screens/DealsScreen/index.tsx";
import PulseScreen from "../screens/PulseScreen/index.tsx";
import images from "../assets/images/index.ts";
import NewsItemScreen from "../components/NewsItemScreen/index.tsx";
import PulseItemScreen from "../components/PulseItemScreen/index.tsx";

export const bottomtabScreens: BottomtabScreen[] = [
    {
        name: 'News',
        icon: icons.news,
        component: () => <NewsScreen />,
        index: 0,
        theme: ETheme.dark
    },
    {
        name: 'Deals',
        icon: icons.deals,
        component: DealsScreen,
        index: 1,
        theme: ETheme.light
    },
    {
        name: 'Pulse',
        icon: icons.pulse,
        component: () => <PulseScreen />,
        index: 2,
        theme: ETheme.light
    },
]

export const newsTabsScreens: TopTabScreen[] = [
    {
        name: 'Live',
        image: images.liveLogo,
        component: () => <NewsItemScreen name={'Live'} />,
        index: 0
    },
    {
        name: 'Politics',
        component: () => <NewsItemScreen name={'Politics'} />,
        index: 1
    },
    {
        name: 'Pepsi',
        image: images.pepsiAdLogo,
        component: () => <NewsItemScreen name={'Pepsi'} />,
        index: 2
    },
    {
        name: 'Business',
        component: () => <NewsItemScreen name={'Business'} />,
        index: 3
    },
    {
        name: 'Managment',
        component: () => <NewsItemScreen name={'Managment'} />,
        index: 4
    },
]

export const pulseTabsScreens: TopTabScreen[] = [
    {
        name: 'Following',
        component: () => <PulseItemScreen name={'Live'} />,
        index: 0
    },
    {
        name: 'For You',
        component: () => <PulseItemScreen name={'Politics'} />,
        index: 1
    },
    {
        name: 'News',
        
        component: () => <PulseItemScreen name={'Pepsi'} />,
        index: 2
    },
    {
        name: 'Eat & Drink',
        component: () => <PulseItemScreen name={'Business'} />,
        index: 3
    },
    {
        name: 'Pepsi',
        image: images.pepsiAdLogo,
        component: () => <PulseItemScreen name={'Pepsi'} />,
        index: 4
    },
]



export default {
    bottomtabScreens
}