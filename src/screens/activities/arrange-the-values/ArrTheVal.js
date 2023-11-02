import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import Animated, { FadeIn } from 'react-native-reanimated'
import SceneDesc from '../../../components/activities/arrange-the-values/SceneDesc'
import Scene from '../../../components/activities/arrange-the-values/Scene'
import Options from '../../../components/activities/arrange-the-values/Options'
import ItemBox from '../../../components/activities/arrange-the-values/ItemBox'
import Narrator from '../../../components/activities/Narrator'
import { getImg } from '../../../utilities/getImg'
import { useArrTheValContext } from './ArrTheValContext'

const ArrTheVal = ({ navigation }) => {
  const { item, timer, displayed, setDisplayed, OPTIONS, SCENE, narrator } =
    useArrTheValContext()
  const { container, centered } = globalStyles
  const { mainSectWrapper } = styles

  // Displays options/scene after timer if item changes
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
        return (
          <>
            <Scene />
            <Narrator narrator={narrator} custWrapperStyle={{ right: -50 }} />
          </>
        )
      default:
        return <Text>Something went wrong!</Text>
    }
  }

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <ImageBackground
      source={getImg.bg.jeepInterior.link}
      style={container}
      resizeMode="contain"
    >
      <View style={[container, centered]}>
        <Animated.View entering={FadeIn} style={[centered, mainSectWrapper]}>
          <SceneDesc />
          {getComponent()}
        </Animated.View>
        <ItemBox />
      </View>
    </ImageBackground>
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
