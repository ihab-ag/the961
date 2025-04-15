import { FunctionComponent } from "react"
import { ImageRequireSource } from "react-native/types"
import { ETheme } from "../constants/types.ts"

export type Screen = {
    name: string,
    component: FunctionComponent,
    theme?: ETheme
}

export interface BottomtabScreen extends Screen {
    icon: ImageRequireSource,
    index: number,
}

export interface TopTabScreen extends Screen {
    image?: ImageRequireSource,
    index: number,
}
