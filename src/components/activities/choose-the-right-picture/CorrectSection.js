import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import Animated, {
  BounceInRight,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { useCTRPContext } from '../../../screens/activities/choose-the-right-picture/CTRPContext'
import COLORS from '../../../constants/colors'
import { TapGestureHandler } from 'react-native-gesture-handler'

const CorrectSection = (props) => {
  const { goBack, enteringProps } = props
  const { gameData } = useCTRPContext()
  const { item, setItem, ITEM_AMOUNT, setScore } = useCTRPContext()
  const { section, imgBox, txtBox, txtStyle, imgStyle, tapGestureStyle } =
    styles
  const { centered } = globalStyles

  const corrScale = useSharedValue(1)
  const corrBorderColor = useSharedValue(COLORS.accent)

  const properItem = item - 1

  const handleCorrectBtn = () => {
    // Change the score, delay the setting so that the next scene wont render before the end of animation
    const renderDelay = setTimeout(() => {
      setScore((prevState) => prevState + 1)
      clearTimeout(renderDelay)
    }, 300)

    // If the value of item is equal to or greater than the number of items, go back and end the game
    if (ITEM_AMOUNT <= item) {
      goBack()
    } else {
      // else change the value of item which will run the useEffect in ArrTheVal which will dislpay the next scene
      const correctTimout = setTimeout(() => {
        setItem((prevState) => prevState + 1)
        clearTimeout(correctTimout)
      }, 500)
    }
  }

  const correctAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: corrScale.value }],
      borderColor: corrBorderColor.value,
    }
  })

  const correctEventHandler = useAnimatedGestureHandler({
    onStart: (event) => {
      corrScale.value = 1.1
      corrBorderColor.value = COLORS.greenFifth
    },
    onEnd: (event) => {
      corrScale.value = withTiming(1, { duration: 500 })
      corrBorderColor.value = withTiming(COLORS.accent, {
        duration: 500,
      })
    },
  })

  return (
    <Animated.View style={[centered, section]}>
      <View style={[centered, imgBox]}>
        <TouchableHighlight onPress={handleCorrectBtn}>
          <TapGestureHandler
            style={tapGestureStyle}
            onGestureEvent={correctEventHandler}
          >
            <Animated.Image
              source={gameData[properItem]?.right.img}
              style={[imgStyle, correctAnimatedStyle]}
              entering={BounceInRight.duration(enteringProps.duration).delay(
                enteringProps.delay
              )}
            />
          </TapGestureHandler>
        </TouchableHighlight>
      </View>
      <View style={[centered, txtBox]}>
        <Text style={txtStyle}>{gameData[properItem]?.right.desc}</Text>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
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

export default CorrectSection
