import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import Animated, { FadeIn } from 'react-native-reanimated'
import { db_ArrTheVal } from '../../../constants/temp_db/db_ArrTheVal'
import SceneDesc from '../../../components/arrange-the-values/SceneDesc'
import Scene from '../../../components/arrange-the-values/Scene'
import Options from '../../../components/arrange-the-values/Options'
import { useArrTheValContext } from './ArrTheValContext'
import ItemBox from '../../../components/arrange-the-values/ItemBox'

const ArrTheVal = ({ navigation }) => {
  const { item, timer, displayed, setDisplayed, OPTIONS, SCENE } =
    useArrTheValContext()
  const { container, centered } = globalStyles
  const { mainSectWrapper } = styles

  // Displays options/scene after timer
  useEffect(() => {
    switch (displayed) {
      case OPTIONS:
        setDisplayed(SCENE)
      case SCENE:
        const displayTimeout2 = setTimeout(() => {
          setDisplayed(OPTIONS)
          clearTimeout(displayTimeout2)
        }, timer * 1000)
        break
      default:
        setDisplayed(null)
    }
  }, [item])

  // Determines what to be displayed depending on the useState "displayed"
  const getComponent = () => {
    switch (displayed) {
      case OPTIONS:
        return <Options goBack={goBack} />
      case SCENE:
        return <Scene />
      default:
        return <Text>Something went wrong!</Text>
    }
  }

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View style={[container, centered]}>
      <Animated.View entering={FadeIn} style={[centered, mainSectWrapper]}>
        <SceneDesc />
        {getComponent()}
      </Animated.View>
      <ItemBox />
    </View>
  )
}

const styles = StyleSheet.create({
  mainSectWrapper: {
    width: '80%',
    height: '100%',
    justifyContent: 'space-between',
    paddingVertical: '2%',
  },
})
export default ArrTheVal
