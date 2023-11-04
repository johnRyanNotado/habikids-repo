import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import Animated, { BounceInRight } from 'react-native-reanimated'
import { TapGestureHandler } from 'react-native-gesture-handler'

const Button = (props) => {
  const { handleBtn, eventHandler, animatedStyle, delay, label, source } = props
  const { section, btnWrapper, txtStyle, imgStyle } = styles
  const { centered, container, positionAbsolute } = globalStyles
  return (
    <View style={[centered, section]}>
      <TouchableHighlight onPress={handleBtn}>
        <TapGestureHandler onGestureEvent={eventHandler}>
          <Animated.View
            style={[centered, btnWrapper, animatedStyle]}
            entering={BounceInRight.duration(1000).delay(delay)}
          >
            <Image
              source={source}
              style={[positionAbsolute, container, imgStyle]}
            />
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
    height: 200,
    width: 200,
    borderRadius: 20,
    backgroundColor: COLORS.primaryTrans,
    justifyContent: 'flex-end',
  },
  txtStyle: {
    fontSize: 30,
    fontWeight: '700',
    color: COLORS.white,
  },
  imgStyle: { width: 190, height: 190 },
})

export default Button
