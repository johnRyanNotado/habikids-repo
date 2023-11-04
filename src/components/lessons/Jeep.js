import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../styles/GlobalStyles'
import { StyleSheet, Image, View } from 'react-native'
import { getImg } from '../../utilities/getImg'

const Jeep = () => {
  const { positionAbsolute } = globalStyles
  const { jeepWrapper, jeep, jeepShadow } = styles
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
    right: '-33%',
    marginTop: '14%',
  },
  jeep: { height: 260, zIndex: -1 },
  jeepShadow: {
    position: 'absolute',
    right: 0,
    bottom: -20,
    opacity: 0.2,
    transform: [{ scaleY: 0.6 }],
    // left: 0,
    height: 260,
    width: '80%',
    zIndex: -2,
  },
})

export default Jeep
