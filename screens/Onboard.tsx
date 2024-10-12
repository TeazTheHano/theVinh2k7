import { View, Text, TouchableOpacity, Image, ImageStyle, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import styles, { vw } from '../assets/stylesheet'
import { LowBtn } from '../assets/Class'
import { statusBarTransparency } from '../assets/component'
import { useNavigation } from '@react-navigation/native'
import { NGHIASTYLE } from '../assets/componentStyleSheet'

export default function Onboard() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[styles.flex1]}>
            {statusBarTransparency(false, true)}
            <View style={[styles.flex1, styles.w100vw, styles.flexColCenter, NGHIASTYLE.NghiaFocusRing4pxPrimary100]}>
                <Image source={require('../assets/photos/onboard.png')} style={[styles.w80vw, styles.h50vh, { resizeMode: 'contain' }] as ImageStyle} />
            </View>
            <LowBtn title='Get Started'
                onPress={() => { navigation.navigate('DataCollect' as never) }}
                CustomStyle={[styles.marginBottom8vw]}
                bgColor='white'
            />
        </SafeAreaView>
    )
}