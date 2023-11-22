import React, { useState, useEffect } from 'react'
import { StyleSheet, Image } from 'react-native'
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  withDelay,
  withSpring,
} from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'
import {
  PUZZLE_DIMENSIONS,
  PIECE_SCALE,
  PUZZLE_PIECES,
  CENTER_X,
  CENTER_Y,
} from '../../../constants/puzzleConstants'
import { imgUrl } from '../../../constants/db_config'
import { useCultPuzzContext } from '../../../screens/activities/cultural-puzzle/CultPuzzContext'

const PuzzlePiece = (props) => {
  const { PUZZLE_GAME_DATA } = useCultPuzzContext()

  const { index, theme, endPos, score } = props
  const piece = PUZZLE_PIECES[index]
  const initialPosX = CENTER_X + (PUZZLE_DIMENSIONS.w / 2) * piece.x
  const initialPosY = CENTER_Y + (PUZZLE_DIMENSIONS.h / 2) * piece.y
  const delay = 2050 + index * 150
  const safeSpacing = PUZZLE_DIMENSIONS.h / 2

  const translateX = useSharedValue(initialPosX)
  const translateY = useSharedValue(initialPosY)
  const scale = useSharedValue(1)
  const rotate = useSharedValue(0)
  const z = useSharedValue(0)
  const isEnabled = useSharedValue(1)

  // Shuffling the cards
  useEffect(() => {
    translateX.value = withDelay(
      delay,
      withSpring(endPos.x, {
        mass: 1,
        damping: 10,
        stiffness: 100,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
      })
    )

    translateY.value = withDelay(
      delay,
      withSpring(endPos.y, {
        mass: 1,
        damping: 10,
        stiffness: 100,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
      })
    )

    scale.value = withDelay(delay, withSpring(PIECE_SCALE))
  }, [])

  // make the img follow the user
  const panGestureHandler = useAnimatedGestureHandler({
    onStart: (event) => {
      if (isEnabled.value) {
        scale.value = withSpring(1)
      }
    },
    onActive: (event) => {
      if (isEnabled.value) {
        translateX.value = withTiming(
          event.absoluteX - PUZZLE_DIMENSIONS.w / 2,
          {
            duration: 130,
            easing: Easing.elastic(2),
          }
        )
        translateY.value = withTiming(
          event.absoluteY - PUZZLE_DIMENSIONS.h / 2,
          {
            duration: 130,
            easing: Easing.elastic(2),
          }
        )
        z.value = withDelay(500, withTiming(2))
      }
    },
    onEnd: (event) => {
      const isCorrect =
        translateX.value >= initialPosX - safeSpacing &&
        translateX.value <= initialPosX + safeSpacing &&
        translateY.value <= initialPosY + safeSpacing &&
        translateY.value >= initialPosY - safeSpacing
      translateX.value = withSpring(isCorrect ? initialPosX : endPos.x)
      translateY.value = withSpring(isCorrect ? initialPosY : endPos.y)
      scale.value = withSpring(isCorrect ? 1 : PIECE_SCALE)
      z.value = withDelay(500, withTiming(0))

      if (isCorrect) {
        isEnabled.value = 0
        score.value++
      }
    },
  })

  const imgAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
        { rotate: `${rotate.value}deg` },
      ],
      zIndex: z.value,
    }
  })

  return (
    <PanGestureHandler onGestureEvent={panGestureHandler} key={index}>
      <Animated.View style={[styles.imgWrapper, imgAnimatedStyle]}>
        <Image
          source={{ uri: `${imgUrl}${PUZZLE_GAME_DATA.pieces[index]}` }}
          style={styles.imgStyle}
        />
      </Animated.View>
    </PanGestureHandler>
  )
}
const styles = StyleSheet.create({
  imgWrapper: {
    backgroundColor: 'lightblue',
    borderWidth: 1,
    height: PUZZLE_DIMENSIONS.h,
    width: PUZZLE_DIMENSIONS.w,
    position: 'absolute',
  },
  imgStyle: {
    width: PUZZLE_DIMENSIONS.w - 2,
    height: PUZZLE_DIMENSIONS.h - 2,
    zIndex: -1,
  },
})
export default PuzzlePiece
