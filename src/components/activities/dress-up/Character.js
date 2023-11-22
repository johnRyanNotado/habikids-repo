import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import { useDressUpContext } from '../../../screens/activities/dressup-in-culture/DressUpContext'
import { imgUrl } from '../../../constants/db_config'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'

const Character = () => {
  const { character, top, bottom, shoes, accessories } = useDressUpContext()
  const { centered } = globalStyles
  const { imgStyle } = styles
  return (
    <View style={[centered, { width: '100%', height: '100%' }]}>
      <Image
        source={{ uri: `${imgUrl}${character}` }}
        style={imgStyle}
        resizeMode="contain"
      />
      <Image
        source={{ uri: `${imgUrl}${shoes}` }}
        style={imgStyle}
        resizeMode="contain"
      />
      <Image
        source={{ uri: `${imgUrl}${bottom}` }}
        style={imgStyle}
        resizeMode="contain"
      />
      <Image
        source={{ uri: `${imgUrl}${top}` }}
        style={imgStyle}
        resizeMode="contain"
      />
      <Image
        source={{ uri: `${imgUrl}${accessories}` }}
        style={imgStyle}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imgStyle: {
    height: '100%',
    width: WINDOW_WIDTH * 0.4,
    position: 'absolute',
  },
})

export default Character
