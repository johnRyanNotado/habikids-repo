import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Animated, {
  SlideInRight,
  SlideInUp,
  SlideOutUp,
  SlideOutRight,
} from 'react-native-reanimated'
import COLORS from '../../constants/colors'
import { globalStyles } from '../../styles/GlobalStyles'
import { getAni } from '../../utilities/getAni'
import {
  ENTER_DELAY,
  ENTER_DURATION,
  EXIT_DURATION,
} from '../../constants/narrConstants'
import Narrator from './Narrator'

const ActivityNarr = (props) => {
  const { instruction, narrator } = props
  const { container, centered, positionAbsolute } = globalStyles
  const { narrStyle, narrWrapper, narrTxtWrapper, narrTxt, custContainer } =
    styles
  return (
    <Animated.View style={[container, centered, custContainer]}>
      <Animated.View
        style={[centered, narrTxtWrapper]}
        entering={SlideInUp.duration(ENTER_DURATION).delay(ENTER_DELAY)}
        exiting={SlideOutUp.duration(EXIT_DURATION)}
      >
        <Text style={narrTxt}>{instruction}</Text>
      </Animated.View>
      <Narrator narrator={narrator} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  custContainer: { width: '100%', justifyContent: 'flex-start' },
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
  narrTxtWrapper: {
    backgroundColor: COLORS.whiteTrans,
    borderRadius: 50,
    paddingVertical: 20,
    width: '80%',
    marginTop: 40,
  },
  narrTxt: {
    fontSize: 30,
    color: COLORS.accent,
    fontFamily: 'QuiapoRegular',
  },
})

export default ActivityNarr
