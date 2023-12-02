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

const KindCatchCA = ({ navigation }) => {
  const {
    score,
    timer,
    narrator,
    instruction,
    instructionDuration,
    TIMER_VALUE,
    setTimer,
  } = useKindCatchContext()
  const { isProfileClicked, saveAct } = useChildSectionContext()

  const { isLoading, isError } = useAppContext()
  const { container, centered, positionAbsolute } = globalStyles
  const [content, setContent] = useState(ACTIVITY_CARD) // first show the activity card

  const handleStartBtn = () => {
    score.value = 0
    // timer.value = TIMER_VALUE
    setTimer(TIMER_VALUE)
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
    <ImageBackground source={getImg.bg.jeepInterior.link} style={container}>
      {isLoading ? (
        <View style={[positionAbsolute, { zIndex: 10 }]}>
          <LoadingScreen />
        </View>
      ) : null}
      {isError ? (
        <View style={[positionAbsolute, { zIndex: 10 }]}>
          <ErrorScreen />
        </View>
      ) : null}
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
              score={score.value}
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
