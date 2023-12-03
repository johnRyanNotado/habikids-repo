import React, { useState } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import { useHabitBuilderContext } from './HabitBuilderContext'
import {
  ACTIVITY_CARD,
  INSTRUCTIONS,
  NONE,
} from '../../../constants/contentClassification'
import { getImg } from '../../../utilities/getImg'
import ChildSectNavBar from '../../../components/home-child/ChildSectNavBar'
import BackBtn from '../../../components/BackBtn'
import ActivityCard from '../../../components/ActivityCard'
import ActivityNarr from '../../../components/activities/ActivityNarr'
import {
  useAppContext,
  useChildSectionContext,
} from '../../context-api/ContextAPI'
import LoadingScreen from '../../LoadingScreen'
import ErrorScreen from '../../ErrorScreen'
import ProfileCard from '../../../components/home-child/ProfileCard'

const HabitBuilderCA = () => {
  const { container, centered, positionAbsolute } = globalStyles
  const {
    score,
    narrator,
    instructionDuration,
    instruction,
    timer,
    setItem,
    setIsNarrating,
    itemScore,
    goBack,
    setComp,
    HabitBuilder,
  } = useHabitBuilderContext()
  const { isProfileClicked } = useChildSectionContext()
  const { isLoading, isError } = useAppContext()
  const [content, setContent] = useState(ACTIVITY_CARD) // first show the activity card

  const handleStartBtn = () => {
    score.value = 0
    timer.value = 0
    itemScore.value = 0
    setItem(0)
    setIsNarrating(false)
    setContent(INSTRUCTIONS) // first show instructions

    const instrucTimeout = setTimeout(() => {
      setContent(NONE) // first show empty obj so that the exit animation has time to animate
      clearTimeout(instrucTimeout)
    }, instructionDuration)

    const startTimeout = setTimeout(() => {
      // navigation.navigate('HabitBuilder') // then navigate

      setComp(<HabitBuilder />)
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
            <ActivityCard
              score={score.value}
              handleStartBtn={handleStartBtn}
              handleCancelBtn={goBack}
            />
            <View
              style={[
                positionAbsolute,
                centered,
                { zIndex: 20, height: '20%' },
              ]}
            >
              <ChildSectNavBar backBtn={<BackBtn onPress={goBack} />} />
            </View>
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

export default HabitBuilderCA
