import React from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../../styles/GlobalStyles'
import { useKindCatchContext } from './KindCatchContext'
import ActivityCard from '../../../components/ActivityCard'

const KindCatchCA = ({ navigation }) => {
  const { score, setScore, setTimerLimit } = useKindCatchContext()
  const { container } = globalStyles

  const handleStartBtn = () => {
    setScore(0)
    setTimerLimit(30)
    navigation.navigate('KindCatch')
  }

  const handleCancelBtn = () => {
    navigation.goBack()
  }

  return (
    <View style={container}>
      <ActivityCard
        score={score}
        handleStartBtn={handleStartBtn}
        handleCancelBtn={handleCancelBtn}
      />
    </View>
  )
}

export default KindCatchCA
