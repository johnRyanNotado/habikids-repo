import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import {
  ENTER_DELAY,
  ENTER_DURATION,
  EXIT_DURATION,
} from '../../constants/narrConstants'
import Animated, { SlideInRight, SlideOutRight } from 'react-native-reanimated'
import { globalStyles } from '../../styles/GlobalStyles'
import { getAni } from '../../utilities/getAni'
import COLORS from '../../constants/colors'
import { WINDOW_WIDTH } from '../../constants/windowConstants'

const Narrator = (props) => {
  const {
    narrator,
    custWrapperStyle,
    custImgStyle,
    custDelay,
    custDuration,
    isBackgroundShown,
  } = props
  const { positionAbsolute } = globalStyles
  const { narrStyle, narrWrapper } = styles
  return (
    <Animated.View
      style={[positionAbsolute, narrWrapper, custWrapperStyle]}
      entering={SlideInRight.duration(
        custDelay ? custDelay : ENTER_DURATION
      ).delay(custDuration ? custDuration : ENTER_DELAY)}
      exiting={SlideOutRight.duration(EXIT_DURATION)}
    >
      <Image
        style={[narrStyle, custImgStyle]}
        source={getAni.characters[narrator]?.link}
      />
      {isBackgroundShown ? (
        <View
          style={[
            positionAbsolute,
            narrStyle,
            {
              height: '100%',
              width: '120%',
              backgroundColor: COLORS.white,
              zIndex: -1,
              borderRadius: 2000,
              left: 'auto',
              top: 'auto',
              right: '-40%',
              bottom: '-40%',
            },
          ]}
        />
      ) : null}
    </Animated.View>
  )
}
const styles = StyleSheet.create({
  narrWrapper: {
    top: 'auto',
    left: 'auto',
    right: 0,
    bottom: 0,
    zIndex: 5,
  },
  narrStyle: {
    height: WINDOW_WIDTH * 0.33,
    width: WINDOW_WIDTH * 0.33,
  },
})

export default Narrator
