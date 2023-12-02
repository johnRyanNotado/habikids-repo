import React, { useState } from 'react'
import { View, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../../styles/GlobalStyles'
import { getImg } from '../../../utilities/getImg'
import {
  ACTIVITY_CARD,
  INSTRUCTIONS,
  NONE,
} from '../../../constants/contentClassification'
import ActivityCard from '../../../components/ActivityCard'
import ActivityNarr from '../../../components/activities/ActivityNarr'
import ChildSectNavBar from '../../../components/home-child/ChildSectNavBar'
import BackBtn from '../../../components/BackBtn'
import ProfileCard from '../../../components/home-child/ProfileCard'
import { useCTRPContext } from './CTRPContext'
import { useChildSectionContext } from '../../context-api/ContextAPI'

const CTRPCA = ({ navigation }) => {
  const {
    score,
    setScore,
    setDisplayed,
    setItem,
    SCENE,
    narrator,
    instruction,
    instructionDuration,
    timer,
    INIT_TIMER,
  } = useCTRPContext()
  const { isProfileClicked } = useChildSectionContext()
  const { container, centered, positionAbsolute } = globalStyles
  const [content, setContent] = useState(ACTIVITY_CARD)

  const handleCancelBtn = () => {
    navigation.goBack()
  }

  const handleStartBtn = () => {
    setScore(0)
    setDisplayed(SCENE)
    setItem(1)
    timer.value = INIT_TIMER
    setContent(INSTRUCTIONS) // first show instructions

    const instrucTimeout = setTimeout(() => {
      setContent(NONE) // first show empty obj so that the exit animation has time to animate
      clearTimeout(instrucTimeout)
    }, instructionDuration)

    const startTimeout = setTimeout(() => {
      navigation.navigate('CTRP') // then navigate
      setContent(ACTIVITY_CARD) // set the content to activity card so that after the game finishes the card will be the one to be displayed
      clearTimeout(startTimeout)
    }, instructionDuration + 500)
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

export default CTRPCA
