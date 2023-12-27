import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import Animated, { ZoomIn } from 'react-native-reanimated'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'

const Script = (props) => {
  const { positionAbsolute } = globalStyles
  const { scriptWrapper, scriptTxt } = styles
  const { top, left, bottom, right, width, script } = props
  const adjustedWidth = (width / 1000 + width * 0.00035) * WINDOW_WIDTH
  const adjustedPos = (num, reference, percent) => {
    if (num === 'auto') {
      return 'auto'
    }
    const temp = (num / 1000 + num * percent) * reference
    return temp
  }
  const sample = adjustedPos(bottom)
  console.log('Adjusted width: ', adjustedWidth)
  console.log('Adjusted horizontal position: ', sample)
  return (
    <Animated.View
      style={[
        positionAbsolute,
        {
          top: top,
          bottom: bottom,
          right: right,
          left: left,
          top: adjustedPos(top, WINDOW_HEIGHT, 0.0015),
          bottom: adjustedPos(bottom, WINDOW_HEIGHT, 0.0015),
          right: adjustedPos(right, WINDOW_WIDTH, 0.0000035),
          left: adjustedPos(left, WINDOW_WIDTH, 0.0000035),
        },
      ]}
      entering={ZoomIn.delay(1000).duration(1000)}
    >
      <View style={[scriptWrapper, { width: adjustedWidth }]}>
        <Text style={scriptTxt}>{script}</Text>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  scriptWrapper: {
    backgroundColor: COLORS.whiteTrans,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
  },
  scriptTxt: {
    fontSize: 20,
    fontSize: WINDOW_WIDTH * 0.023,
    fontFamily: 'QuiapoRegular',
    textAlign: 'center',
  },
})

export default Script
