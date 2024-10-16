import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Vibration,
} from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import Animated, {
  BounceInRight,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler'
import { useSpecificLessonContext } from '../../../screens/lessons/LessonsContext'
import { WINDOW_WIDTH } from '../../../constants/windowConstants'
import { useChildSectionContext } from '../../../screens/context-api/ContextAPI'

const TAMA = 'TAMA'

const Choice = (props) => {
  const { setIsDisabled } = useChildSectionContext()
  const { choice, selected, setSelected } = props
  const { choiceWrapper, choiceBox, choiceBtn, choiceTxt } = styles
  const { container, centered } = globalStyles
  const { setIsActFin, FALSE_AGAIN } = useSpecificLessonContext()
  const scale = useSharedValue(1)
  const backgroundColor = useSharedValue(COLORS.whitePrimary)
  const boxAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor.value,
      transform: [{ scale: scale.value }],
    }
  })

  const correctGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      scale.value = 1.1
      backgroundColor.value = COLORS.bluePrimary
    },
    onEnd: () => {
      scale.value = withTiming(1, { duration: 1000 })
      backgroundColor.value = withTiming(COLORS.whitePrimary, { duration: 500 })
    },
  })

  const wrongGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      scale.value = 1.1
      backgroundColor.value = COLORS.redPrimary
    },
    onEnd: () => {
      scale.value = withTiming(1, { duration: 500 })
      backgroundColor.value = withTiming(COLORS.whitePrimary, {
        duration: 1000,
      })
    },
  })

  const handleSelection = async () => {
    setSelected(choice.id)
    setIsDisabled(false)
    if (choice.answer === TAMA) {
      setIsActFin(true)
    } else {
      setIsActFin(FALSE_AGAIN)
      Vibration.vibrate(1000)
    }
  }

  return (
    <GestureHandlerRootView style={[centered, choiceWrapper]}>
      <Animated.View
        style={[centered, choiceBox, boxAnimatedStyle]}
        entering={BounceInRight.duration(1000).delay(2000)}
      >
        <View>
          <TouchableOpacity
            onPress={handleSelection}
            style={{ borderRadius: 20 }}
          >
            <TapGestureHandler
              onGestureEvent={
                choice.answer === TAMA ? correctGestureEvent : wrongGestureEvent
              }
            >
              <Animated.View
                style={[
                  choiceBtn,
                  {
                    backgroundColor: selected
                      ? COLORS.accent
                      : COLORS.primaryTrans,
                  },
                ]}
              />
            </TapGestureHandler>
          </TouchableOpacity>
        </View>
        <View style={[centered, { marginLeft: 20 }]}>
          <Text style={choiceTxt}>{choice.value}</Text>
        </View>
      </Animated.View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  choiceWrapper: {
    width: '100%',
    alignItems: 'flex-start',
    marginLeft: WINDOW_WIDTH / 2 - 30,
  },
  choiceBox: {
    width: 370,
    width: WINDOW_WIDTH * 0.38,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'flex-start',
  },
  choiceBtn: {
    width: WINDOW_WIDTH * 0.038,
    height: WINDOW_WIDTH * 0.038,
    borderWidth: 3,
    borderColor: COLORS.accent,
    borderRadius: 50,
  },
  choiceTxt: {
    fontSize: WINDOW_WIDTH * 0.025,
    fontFamily: 'QuiapoRegular',
    paddingRight: 15,
  },
})

export default Choice
