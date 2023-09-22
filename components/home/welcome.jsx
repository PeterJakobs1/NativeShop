import { View, Text } from 'react-native'
import React from 'react'
import styles from './welcome.styles'
import{COLORS, SIZES} from '../../constants'



const Welcome = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>Lorem Ipsum</Text>
        <Text style={styles.welcomeTxt(COLORS.primary)}>Lorem ipsum</Text>
      
    </View>
  )
}

export default Welcome