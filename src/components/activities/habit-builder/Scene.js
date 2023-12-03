import React from 'react'
import COLORS from '../../../constants/colors'
import { Text, View } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'
import Narrator from '../Narrator'
import Animated, { SlideInLeft, SlideOutLeft } from 'react-native-reanimated'

const Scene = (props) => {
  const { sceneDesc, narrator } = props
  const { container, positionAbsolute } = globalStyles
  return (
    <View
      style={[
        container,
        positionAbsolute,
        {
          zIndex: 5,
        },
      ]}
    >
      <Animated.View
        style={{
          backgroundColor: COLORS.whiteTrans,
          paddingHorizontal: 10,
          paddingVertical: 15,
          borderRadius: 20,
          position: 'absolute',
          width: 250,
          top: WINDOW_HEIGHT / 2 - 100,
          bottom: 'auto',

          right: WINDOW_WIDTH / 2 + 100,
          left: 'auto',
        }}
        entering={SlideInLeft.duration(500)}
        exiting={SlideOutLeft.duration(500)}
      >
        <Text
          style={{
            fontSize: WINDOW_WIDTH * 0.03,
            fontFamily: 'QuiapoRegular',
            textAlign: 'center',
          }}
        >
          {sceneDesc}
        </Text>
      </Animated.View>
      <Narrator narrator={narrator} />
    </View>
  )
}

export default Scene
