import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import Animated, { BounceIn } from 'react-native-reanimated'
import { useArrTheValContext } from '../../../screens/activities/arrange-the-values/ArrTheValContext'
import { imgUrl } from '../../../constants/db_config'

const Scene = () => {
  const { item, data } = useArrTheValContext()
  const { imgSect, imgStyle } = styles
  const { centered } = globalStyles

  return (
    <Animated.View
      entering={BounceIn.duration(1500)}
      style={[centered, imgSect]}
    >
      <Image
        source={{ uri: `${imgUrl}${data[item - 1]?.img}` }}
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
