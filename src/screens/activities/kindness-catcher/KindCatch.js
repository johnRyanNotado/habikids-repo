import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Image, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../../styles/GlobalStyles'
import { WINDOW_WIDTH, WINDOW_HEIGHT } from '../../../constants/windowConstants'
import Timer from '../../../components/Timer'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
} from 'react-native-reanimated'
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler'
import KindessObj from '../../../components/activities/kindess-catcher/KindessObj'
import BadObj from '../../../components/activities/kindess-catcher/BadObj'
import { useKindCatchContext } from './KindCatchContext'
import { getImg } from '../../../utilities/getImg'
import ActivityNavBar from '../../../components/activities/ActivityNavBar'
import {
  useAppContext,
  useChildSectionContext,
} from '../../context-api/ContextAPI'
import PausedCard from '../../../components/activities/PausedCard'
import LoadingScreen from '../../LoadingScreen'
import ErrorScreen from '../../ErrorScreen'

const DELAY_INTERVAL = 3000
const BASKET_DIMENSION = {
  w: 130,
  h: 150,
}

const KindCatch = ({ navigation }) => {
  const {
    score,
    kindnessList,
    timer,
    setTimer,
    badList,
    goBack,
    showScoreCard,
  } = useKindCatchContext()
  const { isGamePaused, saveAct } = useChildSectionContext()

  const { isLoading, isError } = useAppContext()
  const { basketStyle, basketWrapper, custTitle } = styles
  const { container, centered, positionAbsolute, titleText } = globalStyles
  let kindnessDelay = 1000
  let badnessDelay = 1400

  // Sets timer for game
  useEffect(() => {
    let saveActTimeout
    const timerInterval = setInterval(async () => {
      if (!isGamePaused) {
        // Decrements timer if game is not paused
        setTimer((prevState) => prevState - 1)
      }

      if (timer <= 0) {
        // Display options if timer runs out
        saveActTimeout = setTimeout(async () => {
          await saveAct(score.value)
        }, 500)
        clearInterval(timerInterval)
        // navigation.goBack()
        showScoreCard()
      }
    }, 1000)

    return () => {
      clearInterval(timerInterval)
    }
  })

  // Handles the basket's initial position
  const basketPos = useSharedValue({
    x: WINDOW_WIDTH / 2 - BASKET_DIMENSION.w / 2,
    y: WINDOW_HEIGHT - BASKET_DIMENSION.h - 35,
  })

  // Handles the basket animation
  const playerAnimatedStyle = useAnimatedStyle(() => {
    return {
      left: basketPos.value.x,
    }
  })

  // Handles the basket gesture
  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      basketPos.value = {
        ...basketPos.value,
        x: event.absoluteX - BASKET_DIMENSION.w / 2,
      }
    },
  })

  // Will get each kindndess object and will pass a delay that increments each time
  const getKindObj = (kindness, index) => {
    if (index) kindnessDelay += DELAY_INTERVAL
    const waitingTime = useSharedValue(Math.random() * 2000 + kindnessDelay)

    return (
      <KindessObj
        key={index}
        basketPos={basketPos}
        kindness={kindness}
        score={score}
        waitingTime={waitingTime}
        timer={timer}
      />
    )
  }

  // Will get each bad object and will pass a delay that increments each time
  const getBadObj = (badness, index) => {
    if (index) badnessDelay += DELAY_INTERVAL
    const waitingTime = useSharedValue(Math.random() * 2000 + badnessDelay)

    return (
      <BadObj
        key={index}
        basketPos={basketPos}
        badness={badness}
        waitingTime={waitingTime}
        timer={timer}
      />
    )
  }

  const handleExit = () => {
    score.value = 0
    setTimer(0)
    goBack()
  }

  // if (isLoading) {
  //   return
  // }

  // if (isError) {
  //   return <ErrorScreen />
  // }

  return (
    <ImageBackground source={getImg.bg.jeepInterior.link} style={container}>
      {isLoading ? <LoadingScreen /> : null}
      {isError ? <isError /> : null}
      <GestureHandlerRootView style={[container]}>
        <View style={[container, centered]}>
          <View style={[positionAbsolute, centered, { height: '20%' }]}>
            <ActivityNavBar />
          </View>
          {isGamePaused ? <PausedCard exitGame={handleExit} /> : null}

          {/* Kindess Obj */}
          {kindnessList.map((item, index) => {
            return getKindObj(item.kindness, index)
          })}

          {badList.map((item, index) => {
            return getBadObj(item.badness, index)
          })}

          {/* Basket*/}
          <Animated.View
            style={[
              positionAbsolute,
              centered,
              basketWrapper,
              { top: basketPos.value.y },
              playerAnimatedStyle,
            ]}
          >
            <Image source={getImg.components.basket.link} style={basketStyle} />
          </Animated.View>

          {/* Score */}
          <Text style={[titleText, custTitle]}>{score.value}</Text>

          {/* Timer */}
          <Timer timer={timer} />

          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View
              style={{
                width: '100%',
                height: BASKET_DIMENSION.h + 10,
                position: 'absolute',
                bottom: 0,
              }}
            />
          </PanGestureHandler>
        </View>
      </GestureHandlerRootView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  basketStyle: {
    width: BASKET_DIMENSION.w,
    height: BASKET_DIMENSION.h,
    aspectRatio: 1,
  },
  basketWrapper: {
    width: BASKET_DIMENSION.w,
    height: BASKET_DIMENSION.h,
  },
  custTitle: {
    fontSize: 90,
    fontWeight: '700',
    opacity: 0.5,
    paddingBottom: 20,
    zIndex: -1,
  },
})
export default KindCatch
