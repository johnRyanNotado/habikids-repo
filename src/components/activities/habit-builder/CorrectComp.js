import React from 'react'
import { View, Image } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  Easing,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'
import COLORS from '../../../constants/colors'
import { globalStyles } from '../../../styles/GlobalStyles'
import { imgUrl } from '../../../constants/db_config'

const CorrectComp = (props) => {
  const { score, itemScore, width, source, initialPosX, initialPosY, endPos } =
    props
  const { container } = globalStyles

  const translateX = useSharedValue(initialPosX)
  const translateY = useSharedValue(initialPosY)
  const scale = useSharedValue(1)
  const z = useSharedValue(1)
  const isEnabled = useSharedValue(1)
  const safeSpacing = width / 2

  const characterPosX = useSharedValue(WINDOW_WIDTH / 2)
  const characterPosY = useSharedValue(WINDOW_HEIGHT / 2)
  const bgColor = useSharedValue(COLORS.none)

  const componentStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
      backgroundColor: bgColor.value,
      zIndex: z.value,
    }
  })

  const panGestureHandler = useAnimatedGestureHandler({
    onStart: (event) => {
      if (isEnabled.value) {
        scale.value = withSpring(1.1)
      }
    },
    onActive: (event) => {
      if (isEnabled.value) {
        const isCorrect =
          event.absoluteX >= characterPosX.value - safeSpacing &&
          event.absoluteX <= characterPosX.value + safeSpacing &&
          event.absoluteY <= characterPosY.value + safeSpacing &&
          event.absoluteY >= characterPosY.value - safeSpacing
        if (isCorrect) {
          bgColor.value = COLORS.greenSecondTrans
        } else {
          bgColor.value = COLORS.none
        }
        translateX.value = withTiming(event.absoluteX - width / 2, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        translateY.value = withTiming(event.absoluteY - width / 2, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        scale.value = 1.2
        z.value = withDelay(500, withTiming(2))
      }
    },
    onEnd: (event) => {
      const isCorrect =
        event.absoluteX >= characterPosX.value - safeSpacing &&
        event.absoluteX <= characterPosX.value + safeSpacing &&
        event.absoluteY <= characterPosY.value + safeSpacing &&
        event.absoluteY >= characterPosY.value - safeSpacing

      if (isCorrect) {
        isEnabled.value = 0
        score.value++
        itemScore.value++
      }
      translateX.value = withTiming(isCorrect ? endPos.x : initialPosX, {
        duration: 1000,
        easing: Easing.exp,
      })
      translateY.value = withTiming(isCorrect ? endPos.y : initialPosY, {
        duration: 1000,
        easing: Easing.exp,
      })
      scale.value = withSpring(1)

      bgColor.value = isCorrect ? COLORS.greenThirdTrans : COLORS.none
      z.value = withDelay(1000, withTiming(0))
    },
  })

  return (
    <PanGestureHandler onGestureEvent={panGestureHandler}>
      <Animated.View
        style={[
          {
            width: width,
            height: width,
            borderRadius: 20,
            position: 'absolute',
          },
          componentStyle,
        ]}
      >
        <Image
          source={{ uri: `${imgUrl}${source}` }}
          style={{ width: width, height: width }}
          resizeMode="contain"
        />
      </Animated.View>
    </PanGestureHandler>
  )
}

export default CorrectComp
