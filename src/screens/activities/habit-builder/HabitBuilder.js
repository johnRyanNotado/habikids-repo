import React, { useState, useEffect } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import { getImg } from '../../../utilities/getImg'
import ActivityNavBar from '../../../components/activities/ActivityNavBar'
import { useHabitBuilderContext } from './HabitBuilderContext'
import { useChildSectionContext } from '../../context-api/ContextAPI'
import PausedCard from '../../../components/activities/PausedCard'
import HabitBuilderComp from '../../../components/activities/habit-builder/HabitBuilderComp'
import ItemBox from '../../../components/activities/habit-builder/ItemBox'
import Narrator from '../../../components/activities/Narrator'
import COLORS from '../../../constants/colors'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'
import Scene from '../../../components/activities/habit-builder/Scene'

const HabitBuilder = ({ navigation }) => {
  const { container, centered, positionAbsolute } = globalStyles
  const {
    score,
    itemScore,
    gameData,
    item,
    setItem,
    setIsNarrating,
    timer,
    isNarrating,
    narrator,
  } = useHabitBuilderContext()
  const { isGamePaused } = useChildSectionContext()
  const [component, setComponent] = useState(null)
  const [narratorComp, setNarratorComp] = useState(null)
  const [renderScr, setRenderScr] = useState(true)

  useEffect(() => {
    let compDelay
    let narrDelay
    let goBackDelay
    const unmountCompDelay = setTimeout(() => {
      setComponent(null)
      setNarratorComp(null)
    }, 1000)

    if (!(item <= gameData.item.length - 1)) {
      goBackDelay = setTimeout(() => {
        navigation.goBack()
      }, 1000)
    } else {
      setIsNarrating(true)
      console.log('SHEESH')
      timer.value = gameData.item[item].narrationDuration
      itemScore.value = 0
      const correctComponents = gameData.item[item].correctComponents
      const wrongComponents = gameData.item[item].wrongComponents
      const bg = gameData.item[item].bg.img
      const char = gameData.item[item].character.img
      compDelay = setTimeout(() => {
        setComponent(
          <HabitBuilderComp
            correctComponents={correctComponents}
            wrongComponents={wrongComponents}
            bg={bg}
            char={char}
          />
        )
      }, 1500)
      narrDelay = setTimeout(() => {
        setNarratorComp(
          <Scene
            narrator={narrator}
            sceneDesc={gameData.item[item].sceneDesc}
          />
        )
      }, 2500)
    }

    return () => {
      clearTimeout(compDelay)
      clearTimeout(narrDelay)
      clearTimeout(goBackDelay)
      clearTimeout(unmountCompDelay)
    }
  }, [item])

  useEffect(() => {
    let narrInterval
    if (isNarrating) {
      narrInterval = setInterval(() => {
        console.log('SHEESH2')
        console.log(
          'Timer: ',
          timer.value,
          '\tIsGamePaused? ',
          isGamePaused,
          '\tItem: ',
          item,
          '\tGameLength: ',
          gameData.item.length,
          '\tisNarrating: ',
          isNarrating
        )
        timer.value--
        if (timer.value <= 0) {
          setIsNarrating(false)
          setNarratorComp(null)
          clearInterval(narrInterval)
        }
      }, 1000)
    }
    return () => clearInterval(narrInterval)
  })

  useEffect(() => {
    let itemDelay
    const renderInterval = setInterval(() => {
      console.log('Item: ', item, '\tItemLength: ', gameData.item.length - 1)

      if (item <= gameData.item.length - 1) {
        if (!isGamePaused) {
          setRenderScr((prevState) => !prevState)
        }
        if (itemScore.value >= gameData.item[item].correctComponents.length) {
          itemScore.value = 0
          setItem((prevState) => prevState + 1)
        }
      }
    }, 1000)
    return () => {
      clearInterval(renderInterval)
      clearTimeout(itemDelay)
    }
  })

  const exitGame = () => {
    score.value = 0
    navigation.goBack()
  }

  return (
    <ImageBackground
      source={getImg.bg.jeepInterior.link}
      style={container}
      resizeMode="contain"
    >
      <View style={[container]}>
        <View
          style={[positionAbsolute, centered, { height: '20%', zIndex: 10 }]}
        >
          <ActivityNavBar />
        </View>
        {component ? component : null}
        {item <= gameData.item.length - 1 ? (
          <ItemBox
            item={itemScore}
            ITEM_AMOUNT={gameData.item[item].correctComponents.length}
          />
        ) : null}

        {isNarrating ? narratorComp : null}
        {isGamePaused ? <PausedCard exitGame={exitGame} /> : null}
      </View>
    </ImageBackground>
  )
}

export default HabitBuilder
