import { ImageURISource } from "react-native/types"

export type Deal = {
    id: number
    points: number
    image: string
    name: string
    category: string
    subcategory: string
    rating: number,
    location: string,
    offers: string[]
}