import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import Animated, { ZoomIn } from 'react-native-reanimated'

const Script = (props) => {
  const { positionAbsolute } = globalStyles
  const { scriptWrapper, scriptTxt } = styles
  const { top, left, bottom, right, width, script } = props
  return (
    <Animated.View
      style={[
        positionAbsolute,
        {
          top: top,
          bottom: bottom,
          right: right,
          left: left,
        },
      ]}
      entering={ZoomIn.delay(1000).duration(1000)}
    >
      <View style={[scriptWrapper, { width: width }]}>
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
    fontFamily: 'QuiapoRegular',
    textAlign: 'center',
  },
})

export default Script
