import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import ActivityNavBar from '../../../components/activities/ActivityNavBar'
import PausedCard from '../../../components/activities/PausedCard'
import { useDressUpContext } from './DressUpContext'
import {
  useAppContext,
  useChildSectionContext,
} from '../../context-api/ContextAPI'
import { getImg } from '../../../utilities/getImg'
import SelectionCard from '../../../components/activities/dress-up/SelectionCard'
import Narrator from '../../../components/activities/Narrator'
import DisplayClothes from '../../../components/activities/dress-up/DisplayClothes'
import Character from '../../../components/activities/dress-up/Character'
import LoadingScreen from '../../LoadingScreen'
import ErrorScreen from '../../ErrorScreen'

const DressUp = ({ navigation }) => {
  const { centered, container, positionAbsolute } = globalStyles
  const { selectionWrapper, imgWrapper } = styles
  const {
    score,
    charSelection,
    topSelection,
    bottomSelection,
    shoesSelection,
    accessSelection,
    isFinished,
    narrator,
    gameData,
  } = useDressUpContext()
  const { isLoading, isError } = useAppContext()
  const { isGamePaused, saveAct } = useChildSectionContext()

  const exitGame = () => {
    score.value = 0
    navigation.goBack()
  }

  // handleTriviaBtn
  const handleFinishBtn = async () => {
    await saveAct(4)
    navigation.goBack()
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  if (isError) {
    return <ErrorScreen />
  }

  return (
    <ImageBackground source={getImg.bg.jeepInterior.link} style={container}>
      <View style={[container, centered, { flexDirection: 'row' }]}>
        <View style={[positionAbsolute, centered, { height: 80, zIndex: 10 }]}>
          <ActivityNavBar />
        </View>
        <View style={[centered, selectionWrapper]}>
          {charSelection}
          {topSelection}
          {bottomSelection}
          {shoesSelection}
          {accessSelection}
        </View>

        <View style={[centered, imgWrapper]}>
          <Character />
        </View>
        {isFinished ? (
          <View style={[positionAbsolute, container, { zIndex: 10 }]}>
            <DisplayClothes
              handleFinishBtn={handleFinishBtn}
              title={gameData.title}
              trivia={gameData.trivia}
            />
            <Narrator narrator={narrator} custWrapperStyle={{ right: -30 }} />
          </View>
        ) : null}
        {isGamePaused ? <PausedCard exitGame={exitGame} /> : null}
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  selectionWrapper: {
    width: '60%',
    height: '100%',
    alignItems: 'flex-start',
    zIndex: 5,
  },
  imgWrapper: {
    width: '40%',
    height: '100%',
  },
})

export default DressUp
