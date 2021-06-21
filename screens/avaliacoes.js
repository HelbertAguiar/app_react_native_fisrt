import React from 'react'
import { View, Text, Image} from 'react-native'

import logo from '../assets/punta_cana.png'

export default () => {
    return(
        <View>
            <Image source = {logo}/>
            <Text> {'\n\n\n\nTravel Agency '} </Text>
        </View>
    )
}