import { View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { globalStyles } from '@/styles/global-styles'

const _layout = () => {

  const [] = useFonts({
    NunitoSans: require('../assets/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf')
  })

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style='light'/>
    </View>
  )
}

export default _layout