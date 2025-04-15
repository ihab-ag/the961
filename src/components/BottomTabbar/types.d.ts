import { BottomtabScreen } from "../../navigation/types"

export type Props = {
    screens: BottomtabScreen[]
    navigate: (index: number) => void
    selectedindex: number
}