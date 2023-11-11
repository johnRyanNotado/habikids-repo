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

const TAMA = 'TAMA'

const Choice = (props) => {
  const { choice, selected, setSelected } = props
  const { choiceWrapper, choiceBox, choiceBtn, choiceTxt } = styles
  const { container, centered } = globalStyles
  const { setIsActFin } = useSpecificLessonContext()
  const scale = useSharedValue(1)
  const backgroundColor = useSharedValue(COLORS.greenSecond)
  const boxAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: backgroundColor.value,
      transform: [{ scale: scale.value }],
    }
  })

  const correctGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      scale.value = 1.1
      backgroundColor.value = COLORS.greenFifth
    },
    onEnd: () => {
      scale.value = withTiming(1, { duration: 1000 })
      backgroundColor.value = withTiming(COLORS.greenSecond, { duration: 500 })
    },
  })

  const wrongGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      scale.value = 1.1
      backgroundColor.value = COLORS.redPrimary
    },
    onEnd: () => {
      scale.value = withTiming(1, { duration: 500 })
      backgroundColor.value = withTiming(COLORS.greenSecond, { duration: 1000 })
    },
  })

  const handleSelection = () => {
    setSelected(choice.id)
    if (choice.answer === TAMA) {
      setIsActFin(true)
    } else {
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
          <TouchableOpacity onPress={handleSelection}>
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
        <View style={[centered, { marginLeft: 30 }]}>
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
    marginLeft: 100,
  },
  choiceBox: {
    borderRadius: 40,
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },
  choiceBtn: {
    width: 40,
    height: 40,
    borderWidth: 3,
    borderColor: COLORS.accent,
    borderRadius: 50,
  },
  choiceTxt: { fontSize: 24, fontFamily: 'QuiapoRegular' },
})

export default Choice
