import React from 'react'
import { StyleSheet, View } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
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
import COLORS from '../../../constants/colors'

import { COMP_DIMENSION, LINE_DIMENSION } from './constants'

const Dot = (props) => {
  const { initialPosX, initialPosY, endPos, score } = props
  const { compStyle, compWrapper, lineStyle } = styles
  const { centered } = globalStyles

  const translateX = useSharedValue(initialPosX)
  const translateY = useSharedValue(initialPosY)
  const scale = useSharedValue(0.9)
  const z = useSharedValue(1)
  const isEnabled = useSharedValue(0.9)
  const safeSpacing = COMP_DIMENSION.h / 2

  const initDotPosX = initialPosX + COMP_DIMENSION.h / 2
  const initDotPosY = initialPosY + COMP_DIMENSION.h / 2

  const dot1X = useSharedValue(0)
  const dot2X = useSharedValue(0)
  const dot3X = useSharedValue(0)
  const dot4X = useSharedValue(0)
  const dot5X = useSharedValue(0)
  const dot6X = useSharedValue(0)
  const dot7X = useSharedValue(0)
  const dot8X = useSharedValue(0)
  const dot9X = useSharedValue(0)
  const dot10X = useSharedValue(0)
  const dot11X = useSharedValue(0)
  const dot12X = useSharedValue(0)
  const dot13X = useSharedValue(0)
  const dot14X = useSharedValue(0)
  const dot15X = useSharedValue(0)

  const dot1Y = useSharedValue(0)
  const dot2Y = useSharedValue(0)
  const dot3Y = useSharedValue(0)
  const dot4Y = useSharedValue(0)
  const dot5Y = useSharedValue(0)
  const dot6Y = useSharedValue(0)
  const dot7Y = useSharedValue(0)
  const dot8Y = useSharedValue(0)
  const dot9Y = useSharedValue(0)
  const dot10Y = useSharedValue(0)
  const dot11Y = useSharedValue(0)
  const dot12Y = useSharedValue(0)
  const dot13Y = useSharedValue(0)
  const dot14Y = useSharedValue(0)
  const dot15Y = useSharedValue(0)

  const compAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
      ],
      zIndex: z.value,
    }
  })

  const dot1AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dot1X.value }, { translateY: dot1Y.value }],
    }
  })
  const dot2AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dot2X.value }, { translateY: dot2Y.value }],
    }
  })
  const dot3AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dot3X.value }, { translateY: dot3Y.value }],
    }
  })

  const dot4AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dot4X.value }, { translateY: dot4Y.value }],
    }
  })

  const dot5AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dot5X.value }, { translateY: dot5Y.value }],
    }
  })

  const dot6AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dot6X.value }, { translateY: dot6Y.value }],
    }
  })

  const dot7AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dot7X.value }, { translateY: dot7Y.value }],
    }
  })

  const dot8AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dot8X.value }, { translateY: dot8Y.value }],
    }
  })

  const dot9AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dot9X.value }, { translateY: dot9Y.value }],
    }
  })

  const dot10AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dot10X.value }, { translateY: dot10Y.value }],
    }
  })

  const dot11AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dot11X.value }, { translateY: dot11Y.value }],
    }
  })

  const dot12AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dot12X.value }, { translateY: dot12Y.value }],
    }
  })

  const dot13AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dot13X.value }, { translateY: dot13Y.value }],
    }
  })

  const dot14AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dot14X.value }, { translateY: dot14Y.value }],
    }
  })

  const dot15AnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dot15X.value }, { translateY: dot15Y.value }],
    }
  })

  const panGestureHandler = useAnimatedGestureHandler({
    onStart: (event) => {
      if (isEnabled) {
        scale.value = withSpring(1)
      }
    },
    onActive: (event) => {
      if (isEnabled.value) {
        const p2 = {
          x: event.absoluteX - initDotPosX,
          y: event.absoluteY - initDotPosY,
        }

        let opposite = p2.y
        let adjacent = p2.x
        let slope = opposite / adjacent
        let x1 = adjacent * 0.0667
        let x2 = adjacent * 0.1333
        let x3 = adjacent * 0.2001
        let x4 = adjacent * 0.2667
        let x5 = adjacent * 0.3334
        let x6 = adjacent * 0.4001
        let x7 = adjacent * 0.4667
        let x8 = adjacent * 0.5334
        let x9 = adjacent * 0.6001
        let x10 = adjacent * 0.6667
        let x11 = adjacent * 0.7334
        let x12 = adjacent * 0.8001
        let x13 = adjacent * 0.8667
        let x14 = adjacent * 0.9334
        let x15 = adjacent * 0.9934
        let y1 = x1 * slope
        let y2 = x2 * slope
        let y3 = x3 * slope
        let y4 = x4 * slope
        let y5 = x5 * slope
        let y6 = x6 * slope
        let y7 = x7 * slope
        let y8 = x8 * slope
        let y9 = x9 * slope
        let y10 = x10 * slope
        let y11 = x11 * slope
        let y12 = x12 * slope
        let y13 = x13 * slope
        let y14 = x14 * slope
        let y15 = x15 * slope

        dot1X.value = withTiming(x1, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot2X.value = withTiming(x2, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot3X.value = withTiming(x3, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot4X.value = withTiming(x4, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot5X.value = withTiming(x5, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot6X.value = withTiming(x6, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot7X.value = withTiming(x7, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot8X.value = withTiming(x8, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot9X.value = withTiming(x9, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot10X.value = withTiming(x10, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot11X.value = withTiming(x11, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot12X.value = withTiming(x12, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot13X.value = withTiming(x13, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot14X.value = withTiming(x14, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot15X.value = withTiming(x15, {
          duration: 130,
          easing: Easing.elastic(2),
        })

        dot1Y.value = withTiming(y1, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot2Y.value = withTiming(y2, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot3Y.value = withTiming(y3, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot4Y.value = withTiming(y4, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot5Y.value = withTiming(y5, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot6Y.value = withTiming(y6, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot7Y.value = withTiming(y7, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot8Y.value = withTiming(y8, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot9Y.value = withTiming(y9, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot10Y.value = withTiming(y10, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot11Y.value = withTiming(y11, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot12Y.value = withTiming(y12, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot13Y.value = withTiming(y13, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot14Y.value = withTiming(y14, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        dot15Y.value = withTiming(y15, {
          duration: 130,
          easing: Easing.elastic(2),
        })

        translateX.value = withTiming(event.absoluteX - COMP_DIMENSION.w / 2, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        translateY.value = withTiming(event.absoluteY - COMP_DIMENSION.h / 2, {
          duration: 130,
          easing: Easing.elastic(2),
        })
        z.value = withDelay(500, withTiming(2))
      }
    },
    onEnd: (event) => {
      const p2 = {
        x: endPos.x + COMP_DIMENSION.h / 2 - initDotPosX,
        y: endPos.y + COMP_DIMENSION.h / 2 - initDotPosY,
      }

      let opposite = p2.y
      let adjacent = p2.x
      let slope = opposite / adjacent
      let x1 = adjacent * 0.0667
      let x2 = adjacent * 0.1333
      let x3 = adjacent * 0.2001
      let x4 = adjacent * 0.2667
      let x5 = adjacent * 0.3334
      let x6 = adjacent * 0.4001
      let x7 = adjacent * 0.4667
      let x8 = adjacent * 0.5334
      let x9 = adjacent * 0.6001
      let x10 = adjacent * 0.6667
      let x11 = adjacent * 0.7334
      let x12 = adjacent * 0.8001
      let x13 = adjacent * 0.8667
      let x14 = adjacent * 0.9334
      let x15 = adjacent * 0.9934
      let y1 = x1 * slope
      let y2 = x2 * slope
      let y3 = x3 * slope
      let y4 = x4 * slope
      let y5 = x5 * slope
      let y6 = x6 * slope
      let y7 = x7 * slope
      let y8 = x8 * slope
      let y9 = x9 * slope
      let y10 = x10 * slope
      let y11 = x11 * slope
      let y12 = x12 * slope
      let y13 = x13 * slope
      let y14 = x14 * slope
      let y15 = x15 * slope

      const isCorrect =
        translateX.value >= endPos.x - safeSpacing &&
        translateX.value <= endPos.x + safeSpacing &&
        translateY.value <= endPos.y + safeSpacing &&
        translateY.value >= endPos.y - safeSpacing

      translateX.value = withSpring(isCorrect ? endPos.x : initialPosX)
      translateY.value = withSpring(isCorrect ? endPos.y : initialPosY)

      dot1X.value = withSpring(isCorrect ? x1 : 0)
      dot2X.value = withSpring(isCorrect ? x2 : 0)
      dot3X.value = withSpring(isCorrect ? x3 : 0)
      dot4X.value = withSpring(isCorrect ? x4 : 0)
      dot5X.value = withSpring(isCorrect ? x5 : 0)
      dot6X.value = withSpring(isCorrect ? x6 : 0)
      dot7X.value = withSpring(isCorrect ? x7 : 0)
      dot8X.value = withSpring(isCorrect ? x8 : 0)
      dot9X.value = withSpring(isCorrect ? x9 : 0)
      dot10X.value = withSpring(isCorrect ? x10 : 0)
      dot11X.value = withSpring(isCorrect ? x11 : 0)
      dot12X.value = withSpring(isCorrect ? x12 : 0)
      dot13X.value = withSpring(isCorrect ? x13 : 0)
      dot14X.value = withSpring(isCorrect ? x14 : 0)
      dot15X.value = withSpring(isCorrect ? x15 : 0)

      dot1Y.value = withSpring(isCorrect ? y1 : 0)
      dot2Y.value = withSpring(isCorrect ? y2 : 0)
      dot3Y.value = withSpring(isCorrect ? y3 : 0)
      dot4Y.value = withSpring(isCorrect ? y4 : 0)
      dot5Y.value = withSpring(isCorrect ? y5 : 0)
      dot6Y.value = withSpring(isCorrect ? y6 : 0)
      dot7Y.value = withSpring(isCorrect ? y7 : 0)
      dot8Y.value = withSpring(isCorrect ? y8 : 0)
      dot9Y.value = withSpring(isCorrect ? y9 : 0)
      dot10Y.value = withSpring(isCorrect ? y10 : 0)
      dot11Y.value = withSpring(isCorrect ? y11 : 0)
      dot12Y.value = withSpring(isCorrect ? y12 : 0)
      dot13Y.value = withSpring(isCorrect ? y13 : 0)
      dot14Y.value = withSpring(isCorrect ? y14 : 0)
      dot15Y.value = withSpring(isCorrect ? y15 : 0)

      scale.value = withSpring(isCorrect ? 0.9 : 0.9)
      z.value = withDelay(500, withTiming(0))

      if (isCorrect) {
        isEnabled.value = 0
        score.value++
      }
    },
  })

  return (
    <View style={{ position: 'absolute' }}>
      <PanGestureHandler onGestureEvent={panGestureHandler}>
        <Animated.View style={[compWrapper, compAnimatedStyle]}>
          <View style={compStyle} />
        </Animated.View>
      </PanGestureHandler>
      <View
        style={[
          centered,
          {
            backgroundColor: 'lightpink',
            top: initDotPosY,
            left: initDotPosX,
            zIndex: -1,
          },
        ]}
      >
        <Animated.View style={[lineStyle, dot1AnimatedStyle]} />
        <Animated.View style={[lineStyle, dot2AnimatedStyle]} />
        <Animated.View style={[lineStyle, dot3AnimatedStyle]} />
        <Animated.View style={[lineStyle, dot4AnimatedStyle]} />
        <Animated.View style={[lineStyle, dot5AnimatedStyle]} />
        <Animated.View style={[lineStyle, dot6AnimatedStyle]} />
        <Animated.View style={[lineStyle, dot7AnimatedStyle]} />
        <Animated.View style={[lineStyle, dot8AnimatedStyle]} />
        <Animated.View style={[lineStyle, dot9AnimatedStyle]} />
        <Animated.View style={[lineStyle, dot10AnimatedStyle]} />
        <Animated.View style={[lineStyle, dot11AnimatedStyle]} />
        <Animated.View style={[lineStyle, dot12AnimatedStyle]} />
        <Animated.View style={[lineStyle, dot13AnimatedStyle]} />
        <Animated.View style={[lineStyle, dot14AnimatedStyle]} />
        <Animated.View style={[lineStyle, dot15AnimatedStyle]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  compWrapper: {
    height: COMP_DIMENSION.h,
    width: COMP_DIMENSION.w,
    position: 'absolute',
    backgroundColor: COLORS.primaryTrans,
    borderRadius: 25,
    zIndex: 20,
  },
  compStyle: {
    height: 50,
    width: 50,
  },
  lineStyle: {
    height: LINE_DIMENSION.h,
    width: LINE_DIMENSION.w,
    borderRadius: 10,
    backgroundColor: COLORS.accent,
    position: 'absolute',
    zIndex: -1,
  },
})

export default Dot
