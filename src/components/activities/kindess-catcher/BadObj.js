import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, Vibration, Image } from 'react-native'
import COLORS from '../../../constants/colors'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { globalStyles } from '../../../styles/GlobalStyles'
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../../../constants/windowConstants'
import { getImg } from '../../../utilities/getImg'

const BASKET_DIMENSION = {
  w: 130,
  h: 150,
}

const FPS = 60
const DELTA = 1000 / FPS
const SPEED = 3
const OBJ_DIMENSION = {
  w: 100,
  h: 100,
}

const BadObj = (props) => {
  const { basketPos, wait, badness } = props
  const { badnessObj, custText, apple } = styles
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
      OBJ_DIMENSION.h + nextPos.y > basketPos.value.y + 50 &&
      OBJ_DIMENSION.h + nextPos.y < basketPos.value.y + 55
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
      <Image source={getImg.components.badApple.link} style={apple} />
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
    position: 'absolute',
    top: 0,
    left: 0,
  },
  custText: {
    fontSize: 16,
    fontFamily: 'QuiapoLight',
    fontWeight: '400',
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 10,
  },
  apple: {
    height: OBJ_DIMENSION.h,
    width: OBJ_DIMENSION.w,
    position: 'absolute',
    zIndex: -1,
    aspectRatio: 1,
  },
})

export default BadObj
