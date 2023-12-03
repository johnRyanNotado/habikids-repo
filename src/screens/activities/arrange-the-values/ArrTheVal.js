import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import Animated, { FadeIn } from 'react-native-reanimated'
import SceneDesc from '../../../components/activities/arrange-the-values/SceneDesc'
import Scene from '../../../components/activities/arrange-the-values/Scene'
import Options from '../../../components/activities/arrange-the-values/Options'
import ItemBox from '../../../components/activities/arrange-the-values/ItemBox'
import Narrator from '../../../components/activities/Narrator'
import { getImg } from '../../../utilities/getImg'
import { useArrTheValContext } from './ArrTheValContext'
import ActivityNavBar from '../../../components/activities/ActivityNavBar'
import {
  useAppContext,
  useChildSectionContext,
} from '../../context-api/ContextAPI'
import PausedCard from '../../../components/activities/PausedCard'
import LoadingScreen from '../../LoadingScreen'
import ErrorScreen from '../../ErrorScreen'

const ArrTheVal = ({ navigation }) => {
  const {
    item,
    timer,
    displayed,
    setDisplayed,
    OPTIONS,
    SCENE,
    narrator,
    INIT_TIMER,
    goBackBtn,
    setComp,
    ArrTheValCA,
  } = useArrTheValContext()
  const { isLoading, isError } = useAppContext()
  const { isGamePaused } = useChildSectionContext()
  const { container, centered, positionAbsolute } = globalStyles
  const { mainSectWrapper } = styles

  // Changes the displayed content to SCENE if item changes
  useEffect(() => {
    switch (displayed) {
      case OPTIONS:
        setDisplayed(SCENE)
      case SCENE:
        break
      default:
        setDisplayed(null)
    }
    return
  }, [item])

  // Sets timer for scene
  useEffect(() => {
    let displayTimeout
    if (displayed === SCENE) {
      displayTimeout = setInterval(() => {
        if (!isGamePaused) {
          // Decrements timer if game is not paused
          timer.value--
        }

        if (timer.value <= 0) {
          // Display options if timer runs out
          clearInterval(displayTimeout)
          setDisplayed(OPTIONS)
          timer.value = INIT_TIMER
        }
      }, 1000)
    }
    return () => clearInterval(displayTimeout)
  })

  // Determines what to be displayed depending on the useState "displayed"
  const getComponent = () => {
    switch (displayed) {
      case OPTIONS:
        return <Options goBack={showScoreCard} />
      case SCENE:
        return (
          <>
            <Scene />
            <Narrator narrator={narrator} custWrapperStyle={{ right: -50 }} />
          </>
        )
      default:
        return <Text>Something went wrong!</Text>
    }
  }

  const showScoreCard = () => {
    setComp(<ArrTheValCA />)
  }

  const goBack = () => {
    goBackBtn()
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  if (isError) {
    return <ErrorScreen />
  }

  return (
    <ImageBackground source={getImg.bg.jeepInterior.link} style={container}>
      <View style={[container, centered]}>
        <View style={[positionAbsolute, centered, { height: '20%' }]}>
          <ActivityNavBar />
        </View>
        <Animated.View entering={FadeIn} style={[centered, mainSectWrapper]}>
          <SceneDesc />
          {getComponent()}
        </Animated.View>
        <ItemBox />
        {isGamePaused ? <PausedCard exitGame={goBack} /> : null}
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  mainSectWrapper: {
    width: '80%',
    height: '100%',
    justifyContent: 'space-between',
    paddingVertical: '2%',
  },
})
export default ArrTheVal
