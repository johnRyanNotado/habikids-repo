import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import Animated, {
  SlideInDown,
  SlideInUp,
  SlideOutUp,
  ZoomIn,
  useSharedValue,
} from 'react-native-reanimated'

const Instruction = (props) => {
  const { positionAbsolute } = globalStyles
  const {
    top,
    left,
    bottom,
    right,
    width,
    script,
    instructTemp,
    narrationDuration,
  } = props

  const timer = useSharedValue(narrationDuration)
  const [displayIntruct, setDisplayIntruct] = useState(true)

  useEffect(() => {
    let instructionInterval
    // if instruction is temporary, hide it after narration
    if (instructTemp && displayIntruct) {
      instructionInterval = setInterval(() => {
        timer.value--
        console.log(
          'Instruct temporary: ',
          instructTemp,
          '\tTimer: ',
          timer.value
        )
        if (timer.value <= 0) {
          setDisplayIntruct(false)
          clearInterval(instructionInterval)
        }
      }, 1000)
    }

    return () => clearInterval(instructionInterval)
  }, [displayIntruct])

  if (displayIntruct) {
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
        entering={SlideInUp.duration(1000).delay(1000)}
        exiting={SlideOutUp.duration(1000)}
      >
        <View
          style={{
            width: width,
            backgroundColor: COLORS.primaryTrans,
            paddingHorizontal: 10,
            paddingVertical: 15,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'QuiapoRegular',
              textAlign: 'center',
            }}
          >
            {script}
          </Text>
        </View>
      </Animated.View>
    )
  } else {
    return null
  }
}

export default Instruction
