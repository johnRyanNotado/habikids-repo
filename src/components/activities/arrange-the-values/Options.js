import React from 'react'
import { StyleSheet, Vibration } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import Animated, {
  BounceIn,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useArrTheValContext } from '../../../screens/activities/arrange-the-values/ArrTheValContext'
import { db_ArrTheVal } from '../../../constants/temp_db/db_ArrTheVal'
import Button from './Button'
import { useChildSectionContext } from '../../../screens/context-api/ContextAPI'
import { getImg } from '../../../utilities/getImg'

const Options = (props) => {
  const { goBack } = props
  const {
    item,
    setItem,
    ITEM_AMOUNT,
    setScore,
    MABUTI,
    MASAMA,
    timer,
    INIT_TIMER,
  } = useArrTheValContext()
  const { selectedYear } = useChildSectionContext()
  const { gestureHandlerStyle } = styles
  const { container } = globalStyles

  const answer = db_ArrTheVal.grade[selectedYear - 1].item[item - 1].answer

  const corrScale = useSharedValue(1)
  const corrBackgroundColor = useSharedValue(COLORS.primaryTrans)
  const corrBorderColor = useSharedValue(COLORS.accent)

  const wrongScale = useSharedValue(1)
  const wrongBackgroundColor = useSharedValue(COLORS.primaryTrans)
  const wrongBorderColor = useSharedValue(COLORS.accent)

  const handleWrongBtn = () => {
    Vibration.vibrate(1000)
  }

  const handleCorrBtn = () => {
    // Set the narration timer
    timer.value = INIT_TIMER

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

  // will get assigned to a button depending on the correct answer ('mabuti'/'masama')
  const corrAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: corrScale.value }],
      borderColor: corrBorderColor.value,
      backgroundColor: corrBackgroundColor.value,
    }
  })

  // will get assigned to a button depending on the correct answer ('mabuti'/'masama')
  const wrongAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: wrongScale.value }],
      borderColor: wrongBorderColor.value,
      backgroundColor: wrongBackgroundColor.value,
    }
  })

  // will get assigned to a button depending on the correct answer ('mabuti'/'masama')
  const corrEventHandler = useAnimatedGestureHandler({
    onStart: (event) => {
      corrScale.value = 1.1
      corrBorderColor.value = COLORS.greenFifth
      corrBackgroundColor.value = COLORS.greenFifth
    },
    onEnd: (event) => {
      corrScale.value = withTiming(1, { duration: 500 })
      corrBorderColor.value = withTiming(COLORS.accent, {
        duration: 500,
      })
      corrBackgroundColor.value = withTiming(COLORS.primary, {
        duration: 500,
      })
    },
  })

  // will get assigned to a button depending on the correct answer ('mabuti'/'masama')
  const wrongEventHandler = useAnimatedGestureHandler({
    onStart: (event) => {
      wrongScale.value = 1.1
      wrongBorderColor.value = COLORS.redThird
      wrongBackgroundColor.value = COLORS.redThird
    },
    onEnd: (event) => {
      wrongScale.value = withTiming(1, { duration: 500 })
      wrongBorderColor.value = withTiming(COLORS.accent, { duration: 500 })
      wrongBackgroundColor.value = withTiming(COLORS.primary, {
        duration: 500,
      })
    },
  })

  // Assigning the animation-style depending on the correct answer ('mabuti'/'masama')
  const goodAnimatedStyle =
    MABUTI === answer ? corrAnimatedStyle : wrongAnimatedStyle
  const badAnimatedStyle =
    MASAMA === answer ? corrAnimatedStyle : wrongAnimatedStyle

  // Assigning the gesture-event-handler depending on the correct answer ('mabuti'/'masama')
  const goodEventHandler =
    MABUTI === answer ? corrEventHandler : wrongEventHandler
  const badEventHandler =
    MASAMA === answer ? corrEventHandler : wrongEventHandler

  // Assigning the button-handler depending on the correct answer ('mabuti'/'masama')
  const handleGoodBtn = MABUTI === answer ? handleCorrBtn : handleWrongBtn
  const handleBadBtn = MASAMA === answer ? handleCorrBtn : handleWrongBtn

  return (
    <GestureHandlerRootView style={gestureHandlerStyle}>
      <Animated.View
        entering={BounceIn.duration(1000)}
        style={[container, { flexDirection: 'row' }]}
      >
        <Button
          handleBtn={handleGoodBtn}
          eventHandler={goodEventHandler}
          animatedStyle={goodAnimatedStyle}
          delay={300}
          label={MABUTI}
          source={getImg.components.mabait.link}
        />
        <Button
          handleBtn={handleBadBtn}
          eventHandler={badEventHandler}
          animatedStyle={badAnimatedStyle}
          delay={1300}
          label={MASAMA}
          source={getImg.components.masama.link}
        />
      </Animated.View>
    </GestureHandlerRootView>
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

export default Options
