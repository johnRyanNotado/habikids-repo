import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import Animated, { BounceInRight } from 'react-native-reanimated'
import { TapGestureHandler } from 'react-native-gesture-handler'
const Button = (props) => {
  const { handleBtn, eventHandler, animatedStyle, delay, label } = props
  const { section, btnWrapper, txtStyle } = styles
  const { centered } = globalStyles
  return (
    <View style={[centered, section]}>
      <TouchableHighlight onPress={handleBtn}>
        <TapGestureHandler onGestureEvent={eventHandler}>
          <Animated.View
            style={[centered, btnWrapper, animatedStyle]}
            entering={BounceInRight.duration(1000).delay(delay)}
          >
            <Text style={txtStyle}>{String(label).toUpperCase()}</Text>
          </Animated.View>
        </TapGestureHandler>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  gestureHandlerStyle: {
    height: '70%',
    width: '100%',
  },
  section: {
    width: '50%',
    height: '100%',
  },
  btnWrapper: {
    borderWidth: 5,
    height: 200,
    width: 200,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
  },
  txtStyle: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.white,
  },
})

export default Button
