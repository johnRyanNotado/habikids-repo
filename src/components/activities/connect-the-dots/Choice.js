import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import Animated, { BounceInLeft } from 'react-native-reanimated'
import { COMP_DIMENSION, VALUE_DIMENSION } from './constants'
import COLORS from '../../../constants/colors'
import { WINDOW_WIDTH } from '../../../constants/windowConstants'

const Choice = (props) => {
  const { initialPosX, initialPosY, label } = props
  const { wrapper, text } = styles
  const { centered } = globalStyles
  console.log('Shit')
  return (
    <Animated.View
      style={[
        centered,
        wrapper,
        {
          top: initialPosY - VALUE_DIMENSION.h / 2 + COMP_DIMENSION.h / 2,
          left: initialPosX - VALUE_DIMENSION.w - WINDOW_WIDTH * 0.12,
          width: VALUE_DIMENSION.w + WINDOW_WIDTH * 0.09,
          height: VALUE_DIMENSION.h,
          zIndex: 1,
        },
      ]}
      entering={BounceInLeft.duration(1000).delay(2000)}
    >
      <Text style={text}>{label}</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    backgroundColor: COLORS.whitePrimary,
    borderRadius: 20,
    zIndex: 20,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontSize: WINDOW_WIDTH * 0.027,
    fontFamily: 'QuiapoRegular',
    textAlign: 'left',
  },
})

export default Choice
