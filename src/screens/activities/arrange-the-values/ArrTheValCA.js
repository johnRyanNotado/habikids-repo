import React from 'react'
import { View, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import { useArrTheValContext } from './ArrTheValContext'
import ActivityCard from '../../../components/ActivityCard'

const ArrTheValCA = ({ navigation }) => {
  const { score, setScore } = useArrTheValContext()
  const { container, centered, positionAbsolute } = globalStyles
  const handleCancelBtn = () => {
    navigation.goBack()
  }

  const handleStartBtn = () => {
    setScore(0)
    navigation.navigate('ArrTheVal')
  }

  return (
    <View style={[container, centered]}>
      <ActivityCard
        score={score}
        handleStartBtn={handleStartBtn}
        handleCancelBtn={handleCancelBtn}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
export default ArrTheValCA
