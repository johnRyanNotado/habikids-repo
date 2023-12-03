import React, { useState } from 'react'
import { View, ImageBackground } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import { getImg } from '../../../utilities/getImg'
import {
  ACTIVITY_CARD,
  INSTRUCTIONS,
  NONE,
} from '../../../constants/contentClassification'
import ActivityCard from '../../../components/ActivityCard'
import ActivityNarr from '../../../components/activities/ActivityNarr'
import ProfileCard from '../../../components/home-child/ProfileCard'
import ChildSectNavBar from '../../../components/home-child/ChildSectNavBar'
import BackBtn from '../../../components/BackBtn'
import { useArrTheValContext } from './ArrTheValContext'
import {
  useAppContext,
  useChildSectionContext,
} from '../../context-api/ContextAPI'
import LoadingScreen from '../../LoadingScreen'
import ErrorScreen from '../../ErrorScreen'

const ArrTheValCA = () => {
  const {
    score,
    setScore,
    narrator,
    instruction,
    instructionDuration,
    setItem,
    timer,
    INIT_TIMER,
    setComp,
    handleCancelBtn,
    ArrTheVal,
  } = useArrTheValContext()
  const { isLoading, isError } = useAppContext()
  const { isProfileClicked } = useChildSectionContext()
  const { container, centered, positionAbsolute } = globalStyles
  const [content, setContent] = useState(ACTIVITY_CARD) // first show the activity card

  const handleStartBtn = () => {
    setScore(0)
    setItem(1)
    timer.value = INIT_TIMER
    setContent(INSTRUCTIONS) // first show instructions

    const instrucTimeout = setTimeout(() => {
      setContent(NONE) // first show empty obj so that the exit animation has time to animate
      clearTimeout(instrucTimeout)
    }, instructionDuration)

    const startTimeout = setTimeout(() => {
      setComp(<ArrTheVal />) // then navigate
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
              <ChildSectNavBar
                backBtn={<BackBtn onPress={handleCancelBtn} />}
              />
            </View>
            <ActivityCard
              score={score}
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

export default ArrTheValCA
