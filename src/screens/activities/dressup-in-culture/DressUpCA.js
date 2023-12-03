import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import {
  ACTIVITY_CARD,
  INSTRUCTIONS,
  NONE,
} from '../../../constants/contentClassification'
import { getImg } from '../../../utilities/getImg'
import ChildSectNavBar from '../../../components/home-child/ChildSectNavBar'
import BackBtn from '../../../components/BackBtn'
import ActivityCard from '../../../components/ActivityCard'
import { useDressUpContext } from './DressUpContext'
import ActivityNarr from '../../../components/activities/ActivityNarr'
import {
  useAppContext,
  useChildSectionContext,
} from '../../context-api/ContextAPI'
import ProfileCard from '../../../components/home-child/ProfileCard'
import LoadingScreen from '../../LoadingScreen'
import ErrorScreen from '../../ErrorScreen'
import DressUp from './DressUp'

const DressUpCA = () => {
  const { centered, container, positionAbsolute } = globalStyles
  const {
    gameData,
    score,
    narrator,
    instruction,
    instructionDuration,
    setCharacter,
    setGender,
    setTop,
    setShoes,
    setAccessories,
    setBottom,
    setTopSelection,
    setBottomSelection,
    setShoesSelection,
    setAccessSelection,
    setNumOfClothes,
    setIsFinished,
    goBack,
    setComp,
    DressUp,
  } = useDressUpContext()
  const { isProfileClicked } = useChildSectionContext()
  const { isLoading, isError } = useAppContext()
  const [content, setContent] = useState(ACTIVITY_CARD)

  const handleStartBtn = () => {
    score.value = 0
    setCharacter(gameData.data.character[0].img)
    setGender(gameData.data.character[0].gender)
    setNumOfClothes(0)
    setTop(null)
    setBottom(null)
    setShoes(null)
    setAccessories(null)
    setTopSelection(null)
    setBottomSelection(null)
    setShoesSelection(null)
    setAccessSelection(null)
    setIsFinished(false)
    setContent(INSTRUCTIONS) // first show instructions

    const instrucTimeout = setTimeout(() => {
      setContent(NONE) // first show empty obj so that the exit animation has time to animate
      clearTimeout(instrucTimeout)
    }, instructionDuration)

    const startTimeout = setTimeout(() => {
      // navigation.navigate('DressUp') // then navigate
      setComp(<DressUp />)
      setContent(ACTIVITY_CARD) // set the content to activity card so that after the game finishes the card will be the one to be displayed
      clearTimeout(startTimeout)
    }, instructionDuration + 500)
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
        {content === ACTIVITY_CARD ? (
          <>
            <View
              style={[positionAbsolute, centered, { zIndex: 1, height: '20%' }]}
            >
              <ChildSectNavBar backBtn={<BackBtn onPress={goBack} />} />
            </View>

            <ActivityCard
              score={score.value}
              handleStartBtn={handleStartBtn}
              handleCancelBtn={goBack}
            />
          </>
        ) : content === INSTRUCTIONS ? (
          <ActivityNarr narrator={narrator} instruction={instruction} />
        ) : (
          <></>
        )}

        {isProfileClicked ? <ProfileCard /> : null}
      </View>
    </ImageBackground>
  )
}
export default DressUpCA
