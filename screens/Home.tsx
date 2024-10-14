import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import * as CLASS from '../assets/Class'
import * as CUSTOMCACHE from '../data/store';
import * as SVG from '../assets/svgXml'
import { vw } from '../assets/stylesheet';

export default function Home() {
    const navigation = useNavigation();
    const [CurrentCache, dispatch] = useContext(CUSTOMCACHE.RootContext);
    
    return (
        <CLASS.SSBarWithSaveArea>
            <CLASS.TopBarWithAvatarIMGand2RightIcon
                avatarIMG={CurrentCache.user.imgAddress}
                title='Trang chủ'
                rightIcon1={SVG.bellIcon(vw(6), vw(6))}
            />
        </CLASS.SSBarWithSaveArea>
    )
}