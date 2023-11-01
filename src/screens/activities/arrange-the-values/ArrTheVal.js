import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import Animated, { FadeIn } from 'react-native-reanimated'
import SceneDesc from '../../../components/activities/arrange-the-values/SceneDesc'
import Scene from '../../../components/activities/arrange-the-values/Scene'
import Options from '../../../components/activities/arrange-the-values/Options'
import ItemBox from '../../../components/activities/arrange-the-values/ItemBox'
import { useArrTheValContext } from './ArrTheValContext'

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
