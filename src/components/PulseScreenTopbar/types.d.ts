import { TopTabScreen } from "../../navigation/types"

export type Props = {
    screens: TopTabScreen[]
    index: number
    setIndex: (index: number) => void
}