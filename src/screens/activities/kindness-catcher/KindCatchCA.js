import React, { useState, useEffect, useCallback } from 'react'
import { View, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../../styles/GlobalStyles'
import { getImg } from '../../../utilities/getImg'
import {
  ACTIVITY_CARD,
  INSTRUCTIONS,
  NONE,
} from '../../../constants/contentClassification'
import ActivityNarr from '../../../components/activities/ActivityNarr'
import ActivityCard from '../../../components/ActivityCard'
import ProfileCard from '../../../components/home-child/ProfileCard'
import ChildSectNavBar from '../../../components/home-child/ChildSectNavBar'
import BackBtn from '../../../components/BackBtn'
import { useKindCatchContext } from './KindCatchContext'
import {
  useAppContext,
  useChildSectionContext,
} from '../../context-api/ContextAPI'
import LoadingScreen from '../../LoadingScreen'
import ErrorScreen from '../../ErrorScreen'
import { useFocusEffect } from '@react-navigation/native'

const KindCatchCA = ({ navigation }) => {
  const {
    score,
    timer,
    narrator,
    instruction,
    instructionDuration,
    TIMER_VALUE,
    displayedScore,
    setDisplayedScore,
  } = useKindCatchContext()
  const { isProfileClicked, saveAct } = useChildSectionContext()

  const { isLoading, isError } = useAppContext()
  const { container, centered, positionAbsolute } = globalStyles
  const [content, setContent] = useState(ACTIVITY_CARD) // first show the activity card

  useEffect(() => {
    console.log('Saving...')
    const saveIt = async () => {
      await saveAct(score.value)
    }
    if (score.value !== 0 && displayedScore !== score.value) {
      setDisplayedScore(score.value)
    }
    return () => {
      if (score.value > 0) {
        console.log('Saving2...')
        saveIt()
        score.value = 0
      }
    }
  })

  const handleStartBtn = () => {
    score.value = 0
    timer.value = TIMER_VALUE
    setContent(INSTRUCTIONS) // first show instructions

    const instrucTimeout = setTimeout(() => {
      setContent(NONE) // first show empty obj so that the exit animation has time to animate
      clearTimeout(instrucTimeout)
    }, instructionDuration)

    const startTimeout = setTimeout(() => {
      navigation.navigate('KindCatch') // then navigate
      setContent(ACTIVITY_CARD) // set the content to activity card so that after the game finishes the card will be the one to be displayed
      clearTimeout(startTimeout)
    }, instructionDuration + 500)
  }

  const handleCancelBtn = () => {
    navigation.goBack()
  }

  // if (isLoading) {
  //   return <LoadingScreen />
  // }

  // if (isError) {
  //   return <ErrorScreen />
  // }

  return (
    <ImageBackground
      source={getImg.bg.jeepInterior.link}
      style={container}
      resizeMode="contain"
    >
      {isLoading ? <LoadingScreen /> : null}
      {isError ? <isError /> : null}
      <View style={[container, centered]}>
        {content === ACTIVITY_CARD ? (
          <>
            <View
              style={[positionAbsolute, centered, { zIndex: 1, height: '20%' }]}
            >
              <ChildSectNavBar
                backBtn={<BackBtn onPress={handleCancelBtn} />}
              />
            </View>
            <ActivityCard
              score={displayedScore}
              handleStartBtn={handleStartBtn}
              handleCancelBtn={handleCancelBtn}
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

export default KindCatchCA
