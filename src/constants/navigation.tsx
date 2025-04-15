import { Text } from "react-native";
import icons from "../assets/icons";
import { BottomtabScreen } from "../navigation/types";
import { ETheme } from "./types.ts";
import NewsScreen from "../screens/NewsScreen/index.tsx";
import DealsScreen from "../screens/DealsScreen/index.tsx";
import PulseScreen from "../screens/PulseScreen/index.tsx";

export const bottomtabScreens: BottomtabScreen[] = [
    {
        name: 'News',
        icon: icons.news,
        component: NewsScreen,
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
        component: PulseScreen,
        index: 2,
        theme: ETheme.light
    },
]

export default {
    bottomtabScreens
}