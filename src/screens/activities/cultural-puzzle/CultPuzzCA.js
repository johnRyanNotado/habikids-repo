import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../../styles/GlobalStyles'
import { useCultPuzzContext } from './CultPuzzContext'
import ActivityCard from '../../../components/ActivityCard'

const CultPuzzCA = ({ navigation }) => {
  const { score, setTimerLimit, setIsFinished, endPos, setShuffledEndPos } =
    useCultPuzzContext()
  const { container } = globalStyles

  const handleStartBtn = () => {
    // shuffle the end-position of the puzzle piece
    setShuffledEndPos(endPos.sort(() => Math.random() - 0.5))
    score.value = 0
    // set timer
    setIsFinished(false)
    setTimerLimit(30)
    navigation.navigate('CultPuzz')
  }

  const handleCancelBtn = () => {
    navigation.goBack()
  }

  return (
    <View style={container}>
      <ActivityCard
        score={score.value}
        handleStartBtn={handleStartBtn}
        handleCancelBtn={handleCancelBtn}
      />
    </View>
  )
}

export default CultPuzzCA
