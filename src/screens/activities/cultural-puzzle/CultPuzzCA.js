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
import ProfileCard from '../../../components/home-child/ProfileCard'
import ChildSectNavBar from '../../../components/home-child/ChildSectNavBar'
import BackBtn from '../../../components/BackBtn'
import { useChildSectionContext } from '../../context-api/ContextAPI'
import { useCultPuzzContext } from './CultPuzzContext'

const CultPuzzCA = ({ navigation }) => {
  const {
    score,
    setTimerLimit,
    setIsFinished,
    endPos,
    setShuffledEndPos,
    narrator,
    instruction,
    instructionDuration,
  } = useCultPuzzContext()
  const { isProfileClicked } = useChildSectionContext()
  const { container, centered, positionAbsolute } = globalStyles
  const [content, setContent] = useState(ACTIVITY_CARD) // first show the activity card

  const handleStartBtn = () => {
    // shuffle the end-position of the puzzle piece
    setShuffledEndPos(endPos.sort(() => Math.random() - 0.5))
    score.value = 0
    // set timer
    setIsFinished(false)
    setTimerLimit(30)
    setContent(INSTRUCTIONS) // first show instructions

    const instrucTimeout = setTimeout(() => {
      setContent(NONE) // first show empty obj so that the exit animation has time to animate
      clearTimeout(instrucTimeout)
    }, instructionDuration)

    const startTimeout = setTimeout(() => {
      navigation.navigate('CultPuzz') // then navigate
      setContent(ACTIVITY_CARD) // set the content to activity card so that after the game finishes the card will be the one to be displayed
      clearTimeout(startTimeout)
    }, instructionDuration + 500)
  }

  const handleCancelBtn = () => {
    navigation.goBack()
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

export default CultPuzzCA
