import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
  const { instructionWrapper, instructionTxt } = styles
  const { positionAbsolute } = globalStyles
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
          style={[
            instructionWrapper,
            {
              width: width,
            },
          ]}
        >
          <Text style={instructionTxt}>{script}</Text>
        </View>
      </Animated.View>
    )
  } else {
    return null
  }
}

const styles = StyleSheet.create({
  instructionWrapper: {
    backgroundColor: COLORS.whiteTrans,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
  },
  instructionTxt: {
    fontSize: 24,
    fontFamily: 'QuiapoRegular',
    textAlign: 'center',
  },
})

export default Instruction
