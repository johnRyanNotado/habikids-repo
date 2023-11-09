import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import Animated, { ZoomIn } from 'react-native-reanimated'

const Script = (props) => {
  const { positionAbsolute } = globalStyles
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
      <View
        style={{
          width: width,
          backgroundColor: COLORS.whiteTrans,
          paddingHorizontal: 10,
          paddingVertical: 15,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'QuiapoRegular',
            textAlign: 'center',
          }}
        >
          {script}
        </Text>
      </View>
    </Animated.View>
  )
}

export default Script
