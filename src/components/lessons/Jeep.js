import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../styles/GlobalStyles'
import { StyleSheet, Image, View } from 'react-native'
import { getImg } from '../../utilities/getImg'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../constants/windowConstants'
const JEEP_DIMENSION = {
  h: WINDOW_HEIGHT * 0.7,
  w: WINDOW_HEIGHT * 0.9,
}

const Jeep = () => {
  const { positionAbsolute } = globalStyles
  const { jeepWrapper, jeep, jeepShadow } = styles
  console.log('Jeep Dimension: ', JEEP_DIMENSION)
  return (
    <View style={[positionAbsolute, jeepWrapper]}>
      <Image
        source={getImg.components.jeepRed.link}
        style={jeep}
        resizeMode="contain"
      />
      <Image
        source={getImg.components.shadow.link}
        style={jeepShadow}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  jeepWrapper: {
    left: 'auto',
    // right: '-33%',
    right: WINDOW_WIDTH * -0.2,
    marginTop: '14%',
    zIndex: 1,
  },
  jeep: {
    height: 260,
    zIndex: 1,
    height: JEEP_DIMENSION.h,
    width: JEEP_DIMENSION.w,
  },
  jeepShadow: {
    position: 'absolute',
    opacity: 0.2,
    height: WINDOW_HEIGHT * 0.2,
    width: WINDOW_WIDTH * 0.5,
    transform: [{ scaleY: 0.7 }],
    zIndex: 0,
    bottom: WINDOW_HEIGHT * 0.22,
    right: WINDOW_WIDTH * -0.05,
  },
})

export default Jeep
