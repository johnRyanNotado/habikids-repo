import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import Animated, { BounceInLeft } from 'react-native-reanimated'
import { COMP_DIMENSION, VALUE_DIMENSION } from './constants'
import COLORS from '../../../constants/colors'

const Choice = (props) => {
  const { initialPosX, initialPosY, label } = props
  const { wrapper, text } = styles
  const { centered } = globalStyles

  return (
    <Animated.View
      style={[
        centered,
        wrapper,
        {
          top: initialPosY - VALUE_DIMENSION.h / 2 + COMP_DIMENSION.h / 2,
          left: initialPosX - VALUE_DIMENSION.w - 100,
          width: VALUE_DIMENSION.w + 75,
          height: VALUE_DIMENSION.h,
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
    backgroundColor: COLORS.greenSecond,
    borderRadius: 20,
    zIndex: 20,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 24,
    fontFamily: 'QuiapoRegular',
    textAlign: 'left',
  },
})

export default Choice
