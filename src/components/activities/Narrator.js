import React from 'react'
import { StyleSheet, Image } from 'react-native'
import {
  ENTER_DELAY,
  ENTER_DURATION,
  EXIT_DURATION,
} from '../../constants/narrConstants'
import Animated, { SlideInRight, SlideOutRight } from 'react-native-reanimated'
import { globalStyles } from '../../styles/GlobalStyles'
import { getAni } from '../../utilities/getAni'

const Narrator = (props) => {
  const { narrator, custWrapperStyle, custImgStyle } = props
  const { positionAbsolute } = globalStyles
  const { narrStyle, narrWrapper } = styles
  return (
    <Animated.View
      style={[positionAbsolute, narrWrapper, custWrapperStyle]}
      entering={SlideInRight.duration(ENTER_DURATION).delay(ENTER_DELAY)}
      exiting={SlideOutRight.duration(EXIT_DURATION)}
    >
      <Image
        style={[narrStyle, custImgStyle]}
        source={getAni.characters[narrator]?.link}
      />
    </Animated.View>
  )
}
const styles = StyleSheet.create({
  narrWrapper: {
    top: 'auto',
    left: 'auto',
    right: 0,
    bottom: 0,
  },
  narrStyle: {
    height: 300,
    width: 300,
  },
})

export default Narrator
