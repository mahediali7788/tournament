import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { colors } from '../theme/colors';

const AvatarWithName = ({userName, userAvatar, flexDirection, key, avatarSize, ...props}) =>{
    return(
        <View key={key} style={[styles.layout, {flexDirection:flexDirection}]}>
            <Text style={{color:colors.colorWhite, marginHorizontal:10, fontWeight:'bold'}}>{userName}</Text>
            <Avatar.Image style={{backgroundColor:colors.colorWhite, ...props}} source={{uri:userAvatar}} size={avatarSize||40} />
        </View>
    )
}

const styles = StyleSheet.create({
    layout:{
        alignItems:'center'
    }
})

export default AvatarWithName;