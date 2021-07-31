import React from 'react';
import { View } from 'react-native';
import { Caption } from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../theme/colors';

const IconDivideText = ({iconName, text, ...props}) =>{
    return(
        <View style={{flexDirection:'column', alignItems:'center',}}>
            <FontAwesome5 name={iconName} size={20} color={colors.colorBlack} />
            <Caption>{text}</Caption>
        </View>
    )
}

export default IconDivideText;