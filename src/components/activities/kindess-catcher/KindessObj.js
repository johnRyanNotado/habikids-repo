import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, Image } from 'react-native'
import COLORS from '../../../constants/colors'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { globalStyles } from '../../../styles/GlobalStyles'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'
import { getImg } from '../../../utilities/getImg'
import { useChildSectionContext } from '../../../screens/context-api/ContextAPI'

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

const KindessObj = (props) => {
  const { basketPos, kindness, score, waitingTime, timer } = props
  const { isGamePaused } = useChildSectionContext()
  const [wait, setWait] = useState(true)
  const { kindnessObj, custText, apple } = styles
  const { centered } = globalStyles

  // Get the initial position at x axis randomly
  let initialPositionX = Math.random() * WINDOW_WIDTH - OBJ_DIMENSION.w
  if (initialPositionX < 0) {
    initialPositionX = 0
  }

  // Get the initial position at y axis above the screen
  const initialPositionY = 0 - OBJ_DIMENSION.h

  // Set the initial position and direction
  const targetPositionX = useSharedValue(initialPositionX)
  const targetPositionY = useSharedValue(initialPositionY)
  const direction = useSharedValue({ x: 0, y: 0 })

  // check if waiting for delay is false, then set the direction of obj
  useEffect(() => {
    let interval
    if (!wait) {
      direction.value.y = 1
      interval = setInterval(() => {
        renderObj()
      }, DELTA)
    }
    return () => clearInterval(interval)
  })

  useEffect(() => {
    // if game is paused set the direction to none
    if (isGamePaused) {
      direction.value = { x: 0, y: 0 }
    } else if (!isGamePaused && wait) {
      // if game is not paused and the object should not wait for delay, set the direction to y: 1
      direction.value.y = 1
    }
  }, [isGamePaused])

  useEffect(() => {
    // decrement wait interval every second unless the game is paused
    const waitInterval = setInterval(() => {
      if (!isGamePaused) {
        waitingTime.value = waitingTime.value - 1000
      }
      // clear interval if waiting interval is <= 0 or timer is <= 0
      if (waitingTime.value <= 0 || timer <= 0) {
        if (waitingTime.value <= 0) {
          setWait(false)
        }
        clearInterval(waitInterval)
        waitingTime.value = 0
      }
    }, 1000)
    return () => clearInterval(waitInterval)
  })

  const renderObj = () => {
    let nextPos = getNextPos(direction.value)

    // Basket Hit detection
    if (
      nextPos.x < basketPos.value.x + BASKET_DIMENSION.w &&
      nextPos.x + OBJ_DIMENSION.w > basketPos.value.x &&
      OBJ_DIMENSION.h + nextPos.y > basketPos.value.y + 50 &&
      OBJ_DIMENSION.h + nextPos.y < basketPos.value.y + 55
    ) {
      // set kindnessComp to null if collision occurs
      setKindnessComp(null)
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

  const kindObjAnimatedStyles = useAnimatedStyle(() => {
    return {
      top: targetPositionY.value,
      left: targetPositionX.value,
    }
  })

  const [kindnessComp, setKindnessComp] = useState(
    <Animated.View style={[centered, kindnessObj, kindObjAnimatedStyles]}>
      <Image source={getImg.components.apple.link} style={apple} />
      <Text style={custText}>{kindness}</Text>
    </Animated.View>
  )

  // add 1 to score if collision occurs
  // added a separate useEffect since the collision detection runs multiple times after a collission
  useEffect(() => {
    if (kindnessComp === null) score.value = score.value + 1
  }, [kindnessComp])

  return kindnessComp
}

const styles = StyleSheet.create({
  kindnessObj: {
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

export default KindessObj
