import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import { COMP_DIMENSION, VALUE_DIMENSION } from './constants'
import COLORS from '../../../constants/colors'
import Animated, { BounceInRight } from 'react-native-reanimated'

const Answer = (props) => {
  const { endPosX, endPosY, label } = props
  const { wrapper, text } = styles
  const { centered } = globalStyles

  return (
    <Animated.View
      style={[
        centered,
        wrapper,
        {
          top: endPosY - VALUE_DIMENSION.h / 2 + COMP_DIMENSION.h / 2,
          left: endPosX + VALUE_DIMENSION.w - 50,
          width: VALUE_DIMENSION.w + 75,
          height: VALUE_DIMENSION.h,
        },
      ]}
      entering={BounceInRight.duration(1000).delay(2000)}
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

export default Answer
