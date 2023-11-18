import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Vibration,
} from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  BounceInRight,
} from 'react-native-reanimated'
import { useCTRPContext } from '../../../screens/activities/choose-the-right-picture/CTRPContext'
import COLORS from '../../../constants/colors'
import { TapGestureHandler } from 'react-native-gesture-handler'

const WrongSection = (props) => {
  const { enteringProps } = props
  const { item, gameData } = useCTRPContext()
  const { section, imgBox, txtBox, txtStyle, imgStyle, tapGestureStyle } =
    styles
  const { centered } = globalStyles

  const wrongScale = useSharedValue(1)
  const wrongBorderColor = useSharedValue(COLORS.accent)

  const properItem = item - 1

  const handleWrongBtn = () => {
    Vibration.vibrate(1000)
  }

  const wrongAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: wrongScale.value }],
      borderColor: wrongBorderColor.value,
    }
  })

  const wrongEventHandler = useAnimatedGestureHandler({
    onStart: (event) => {
      wrongScale.value = 1.1
      wrongBorderColor.value = COLORS.redThird
    },
    onEnd: (event) => {
      wrongScale.value = withTiming(1, { duration: 500 })
      wrongBorderColor.value = withTiming(COLORS.accent, { duration: 500 })
    },
  })
  return (
    <Animated.View style={[centered, section]}>
      <View style={[centered, imgBox]}>
        <TouchableHighlight onPress={handleWrongBtn}>
          <TapGestureHandler
            style={tapGestureStyle}
            onGestureEvent={wrongEventHandler}
          >
            <Animated.Image
              source={gameData[properItem]?.wrongImg}
              style={[imgStyle, wrongAnimatedStyle]}
              entering={BounceInRight.duration(enteringProps.duration).delay(
                enteringProps.delay
              )}
            />
          </TapGestureHandler>
        </TouchableHighlight>
      </View>
      <View style={[centered, txtBox]}>
        <Text style={txtStyle}>{gameData[properItem]?.wrongDesc}</Text>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  tapGestureStyle: {},
  section: {
    height: '100%',
    width: '50%',
  },
  imgBox: {
    height: '80%',
    width: '100%',
  },
  txtBox: {
    height: '20%',

    backgroundColor: COLORS.whiteTrans,
    width: '90%',
    borderRadius: 40,
    marginTop: 5,
  },
  txtStyle: {
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'QuiapoRegular',
  },
  imgStyle: {
    backgroundColor: COLORS.secondary,
    height: '100%',
    aspectRatio: 1,
    borderRadius: 20,
    borderWidth: 5,
  },
})

export default WrongSection
