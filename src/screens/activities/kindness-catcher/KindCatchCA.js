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
import ActivityNarr from '../../../components/activities/ActivityNarr'
import ActivityCard from '../../../components/ActivityCard'
import { useKindCatchContext } from './KindCatchContext'

const KindCatchCA = ({ navigation }) => {
  const { score, timerLimit, narrator, instruction, instructionDuration } =
    useKindCatchContext()
  const { container, centered } = globalStyles
  const [content, setContent] = useState(ACTIVITY_CARD) // first show the activity card

  const handleStartBtn = () => {
    score.value = 0
    timerLimit.value = 30
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

  return (
    <ImageBackground
      source={getImg.bg.jeepInterior.link}
      style={container}
      resizeMode="contain"
    >
      <View style={[container, centered]}>
        {content === ACTIVITY_CARD ? (
          <ActivityCard
            score={score.value}
            handleStartBtn={handleStartBtn}
            handleCancelBtn={handleCancelBtn}
          />
        ) : content === INSTRUCTIONS ? (
          <ActivityNarr narrator={narrator} instruction={instruction} />
        ) : (
          <></>
        )}
      </View>
    </ImageBackground>
  )
}

export default KindCatchCA
