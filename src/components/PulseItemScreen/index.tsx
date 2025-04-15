import React, { FunctionComponent } from 'react'
import { Image, ImageBackground, NativeModules, Text, View } from 'react-native'
import images from '../../assets/images'
import styles from './styles'
import { ActionButton, Props } from './types'
import icons from '../../assets/icons'
import colors from '../../constants/colors'
import ReadMore from '../ReadMore'
const { StatusBarManager } = NativeModules

const ACTION_BUTTONS: ActionButton[] = [{
    icon: images.deals,
    name: 'Get deals here!'
},
{
    icon: icons.like,
    name: 'Like'
},
{
    icon: icons.gift,
    name: 'Gift'
},
{
    icon: icons.comment,
    name: 'Comment'
},
{
    icon: icons.share,
    name: 'Share'
},
{
    icon: icons.more,
},
]

const dummyLongText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos unde eos cupiditate expedita! Laboriosam, animi illo impedit, minima corrupti quae distinctio assumenda nihil unde ducimus voluptatum nobis officiis natus eveniet.'

const PulseItemScreen: FunctionComponent<Props> = () => {
    return (
        <ImageBackground
            resizeMode='stretch'
            style={styles.wrapper}
            source={images.pulseBg} >
            <View style={styles.infoContainer}>
                <View style={styles.userContainer}>
                    <View style={styles.profileImageWrapper}>
                        <Image
                            style={styles.profileImage}
                            source={images.avatar} />
                    </View>
                    <Text style={styles.profileText}>
                        961 News
                    </Text>
                    <View style={styles.followButton}>
                        <Text style={styles.followText}>
                            Follow
                        </Text>
                    </View>
                    <View style={styles.collabContainer}>
                        <Text style={styles.collabText}>
                            7 collab
                        </Text>
                    </View>
                </View>
                <View>
                    <ReadMore
                    style={styles.description}
                    text={dummyLongText} />
                </View>
                <View>
                    <Image source={images.ad} />
                </View>
            </View>
            <View style={styles.buttonsWrapper}>
                {ACTION_BUTTONS.map((button, index) => <View
                    style={styles.buttonWrapper}
                >
                    <Image
                        style={[styles.buttonImage, {
                            height: index == 0 ? 40 : 35
                        }]}
                        source={button.icon} />
                    {button.name && <Text
                        adjustsFontSizeToFit={true}
                        numberOfLines={1}
                        style={styles.buttonText}
                    >{button.name}</Text>}
                </View>)}
            </View>
        </ImageBackground>
    )
}

export default PulseItemScreen