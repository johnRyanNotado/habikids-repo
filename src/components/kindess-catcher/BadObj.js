import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, Vibration } from 'react-native'
import COLORS from '../../constants/colors'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { globalStyles } from '../../styles/GlobalStyles'
import { WINDOW_WIDTH } from '../../constants/windowConstants'

const BASKET_DIMENSION = {
  w: 100,
  h: 70,
}

const FPS = 60
const DELTA = 1000 / FPS
const SPEED = 3
const OBJ_DIMENSION = {
  w: 100,
  h: 50,
}

const BadObj = (props) => {
  const { basketPos, wait, badness } = props
  const { badnessObj, custText } = styles
  const { centered } = globalStyles

  // Get the initial position at x axis randomly
  let initialPositionX = Math.random() * WINDOW_WIDTH - OBJ_DIMENSION.w
  if (initialPositionX < 0) {
    initialPositionX = 0
  }

  // Get the initial position at y axis above  the screen
  const initialPositionY = 0 - OBJ_DIMENSION.h

  // Set the initial position and direction
  const targetPositionX = useSharedValue(initialPositionX)
  const targetPositionY = useSharedValue(initialPositionY)
  const direction = useSharedValue({ x: 0, y: 0 })

  // check if waiting is false, then set the direction of obj
  useEffect(() => {
    let interval
    if (!wait) {
      direction.value.y = 1
      interval = setInterval(() => {
        renderObj()
        if (targetPositionY.value > WINDOW_HEIGHT + 10) {
          clearInterval(interval) // clear interval after object is below the screen
        }
      }, DELTA)
    }
    return () => clearInterval(interval)
  }, [wait])

  const renderObj = () => {
    let nextPos = getNextPos(direction.value)

    // Basket Hit detection
    if (
      nextPos.x < basketPos.value.x + BASKET_DIMENSION.w &&
      nextPos.x + OBJ_DIMENSION.w > basketPos.value.x &&
      OBJ_DIMENSION.h + nextPos.y > basketPos.value.y &&
      OBJ_DIMENSION.h + nextPos.y < basketPos.value.y + 5
    ) {
      // set badnessComp to null if collision occurs
      setBadnessComp(null)
    }
    nextPos = getNextPos(direction.value)

    targetPositionX.value = withTiming(nextPos.x, {
      duration: DELTA,
      easing: Easing.linear,
    })
    targetPositionY.value = withTiming(nextPos.y, {
      duration: DELTA,
      easing: Easing.linear,
    })
  }

  const getNextPos = (direction) => {
    return {
      x: targetPositionX.value + direction.x * SPEED,
      y: targetPositionY.value + direction.y * SPEED,
    }
  }

  const badObjAnimatedStyles = useAnimatedStyle(() => {
    return {
      top: targetPositionY.value,
      left: targetPositionX.value,
    }
  })

  const [badnessComp, setBadnessComp] = useState(
    <Animated.View style={[centered, badnessObj, badObjAnimatedStyles]}>
      <Text style={custText}>{badness}</Text>
    </Animated.View>
  )

  // If badnessComp changes its value to null, vibrate
  useEffect(() => {
    Vibration.vibrate(1000, false)
  }, [badnessComp])

  return badnessComp
}

const styles = StyleSheet.create({
  badnessObj: {
    height: OBJ_DIMENSION.h,
    width: OBJ_DIMENSION.w,
    backgroundColor: COLORS.redPrimary,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  custText: {
    fontSize: 16,
    fontWeight: '700',
  },
})

export default BadObj
