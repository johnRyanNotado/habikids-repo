import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import { useDressUpContext } from '../../../screens/activities/dressup-in-culture/DressUpContext'

const Character = () => {
  const { character, top, bottom, shoes, accessories } = useDressUpContext()
  const { centered } = globalStyles
  const { imgStyle } = styles
  return (
    <View style={[centered, { width: '100%', height: '100%' }]}>
      <Image source={character} style={imgStyle} resizeMode="contain" />
      <Image source={bottom} style={imgStyle} resizeMode="contain" />
      <Image source={shoes} style={imgStyle} resizeMode="contain" />
      <Image source={top} style={imgStyle} resizeMode="contain" />
      <Image source={accessories} style={imgStyle} resizeMode="contain" />
    </View>
  )
}

const styles = StyleSheet.create({
  imgStyle: { height: '95%', position: 'absolute' },
})

export default Character
