import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import ActivityNavBar from '../../../components/activities/ActivityNavBar'
import PausedCard from '../../../components/activities/PausedCard'
import { useDressUpContext } from './DressUpContext'
import { useChildSectionContext } from '../../context-api/ContextAPI'
import { getImg } from '../../../utilities/getImg'

const DressUp = ({ navigation }) => {
  const { centered, container, positionAbsolute } = globalStyles
  const { score } = useDressUpContext()
  const { isGamePaused } = useChildSectionContext()

  const exitGame = () => {
    score.value = 0
    navigation.goBack()
  }
  return (
    <ImageBackground
      source={getImg.bg.jeepInterior.link}
      style={container}
      resizeMode="contain"
    >
      <View style={[container, centered]}>
        <View style={[positionAbsolute, centered, { height: '20%' }]}>
          <ActivityNavBar />
        </View>
        <Text>SHEESH</Text>
        {isGamePaused ? <PausedCard exitGame={exitGame} /> : null}
      </View>
    </ImageBackground>
  )
}

export default DressUp
