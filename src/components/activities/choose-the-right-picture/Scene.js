import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import Animated, { BounceIn } from 'react-native-reanimated'
import { useCTRPContext } from '../../../screens/activities/choose-the-right-picture/CTRPContext'
import { useChildSectionContext } from '../../../screens/context-api/ContextAPI'

const Scene = () => {
  const { item, gameData } = useCTRPContext()
  const { selectedYear } = useChildSectionContext()
  const { imgSect, imgStyle } = styles
  const { centered } = globalStyles

  return (
    <Animated.View
      entering={BounceIn.duration(1500)}
      style={[centered, imgSect]}
    >
      <Image
        source={gameData.grade[selectedYear - 1]?.item[item - 1]?.scene.img}
        style={imgStyle}
      />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  imgSect: {
    width: '100%',
    height: '70%',
  },
  imgStyle: {
    height: '95%',
    aspectRatio: 1,
  },
})

export default Scene
