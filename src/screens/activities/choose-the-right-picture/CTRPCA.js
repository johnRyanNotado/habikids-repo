import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../../styles/GlobalStyles'
import ActivityCard from '../../../components/ActivityCard'
import { useCTRPContext } from './CTRPContext'

const CTRPCA = ({ navigation }) => {
  const { score, setScore, setDisplayed, setItem, SCENE } = useCTRPContext()
  const { container, centered } = globalStyles

  const handleCancelBtn = () => {
    navigation.goBack()
  }

  const handleStartBtn = () => {
    setScore(0)
    setDisplayed(SCENE)
    setItem(1)
    navigation.navigate('CTRP')
  }

  return (
    <SafeAreaView style={[container, centered]}>
      <ActivityCard
        score={score}
        handleStartBtn={handleStartBtn}
        handleCancelBtn={handleCancelBtn}
      />
    </SafeAreaView>
  )
}

export default CTRPCA
