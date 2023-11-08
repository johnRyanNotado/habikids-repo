import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import Animated, { FadeIn } from 'react-native-reanimated'
import Scene from '../../../components/activities/choose-the-right-picture/Scene'
import Options from '../../../components/activities/choose-the-right-picture/Options'
import ItemBox from '../../../components/activities/choose-the-right-picture/ItemBox'
import SceneDesc from '../../../components/activities/choose-the-right-picture/SceneDesc'
import Narrator from '../../../components/activities/Narrator'
import { getImg } from '../../../utilities/getImg'
import { useChildSectionContext } from '../../context-api/ContextAPI'
import PausedCard from '../../../components/activities/PausedCard'
import ActivityNavBar from '../../../components/activities/ActivityNavBar'
import { useCTRPContext } from './CTRPContext'
const CTRP = ({ navigation }) => {
  const {
    item,
    timer,
    displayed,
    setDisplayed,
    OPTIONS,
    SCENE,
    narrator,
    INIT_TIMER,
  } = useCTRPContext()
  const { isGamePaused } = useChildSectionContext()
  const { mainSectWrapper } = styles
  const { container, centered, positionAbsolute } = globalStyles

  // Displays options/scene after timer
  useEffect(() => {
    switch (displayed) {
      case OPTIONS:
        setDisplayed(SCENE)
      case SCENE:
        break
      default:
        setDisplayed(null)
    }
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
        return <Options goBack={goBack} />
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

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <ImageBackground
      source={getImg.bg.jeepInterior.link}
      style={container}
      resizeMode="contain"
    >
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

export default CTRP
