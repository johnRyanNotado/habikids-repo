import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Vibration,
  Image,
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
import { useChildSectionContext } from '../../../screens/context-api/ContextAPI'
import { imgUrl } from '../../../constants/db_config'
import { WINDOW_WIDTH } from '../../../constants/windowConstants'

const TAMA = 'TAMA'

const Choice = (props) => {
  const { isDisabled, setIsDisabled } = useChildSectionContext()
  const { choice, selected, setSelected } = props
  const { choiceWrapper, choiceBox, choiceBtn } = styles
  const { centered } = globalStyles
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
      backgroundColor.value = COLORS.greenFifth
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
        <View style={[centered, { marginLeft: WINDOW_WIDTH * 0.02 }]}>
          <Image
            source={{ uri: `${imgUrl}${choice.img}` }}
            style={{
              width: 180,
              height: 100,
              width: WINDOW_WIDTH * 0.2,
              height: WINDOW_WIDTH * 0.11,
            }}
          />
        </View>
      </Animated.View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  choiceWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginHorizontal: WINDOW_WIDTH * 0.018,
  },
  choiceBox: {
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    marginBottom: 20,
  },
  choiceBtn: {
    width: WINDOW_WIDTH * 0.038,
    height: WINDOW_WIDTH * 0.038,
    borderWidth: 3,
    borderColor: COLORS.accent,
    borderRadius: 50,
  },
  choiceTxt: { fontSize: 24, fontFamily: 'QuiapoRegular' },
})

export default Choice
