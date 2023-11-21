import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import { COMP_DIMENSION, VALUE_DIMENSION } from './constants'
import COLORS from '../../../constants/colors'
import Animated, { BounceInRight } from 'react-native-reanimated'
import { imgUrl } from '../../../constants/db_config'

const Answer = (props) => {
  const { endPosX, endPosY, label, img } = props
  const { wrapper, text } = styles
  const { centered } = globalStyles

  return (
    <Animated.View
      style={[
        centered,
        wrapper,
        {
          top: endPosY - VALUE_DIMENSION.h / 2 + COMP_DIMENSION.h / 2,
          left: endPosX + VALUE_DIMENSION.w - 50,
          width: VALUE_DIMENSION.w + 100,
          height: VALUE_DIMENSION.h,
        },
      ]}
      entering={BounceInRight.duration(1000).delay(2000)}
    >
      {img ? (
        <Image
          style={{
            width: VALUE_DIMENSION.w + 90,
            height: VALUE_DIMENSION.w,
            borderRadius: 20,
          }}
          source={{ uri: `${imgUrl}${img}` }}
          resizeMode="contain"
        />
      ) : (
        <Text style={text}>{label}</Text>
      )}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    backgroundColor: COLORS.whitePrimary,
    borderRadius: 20,
    zIndex: 20,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: 'QuiapoRegular',
    textAlign: 'center',
  },
})

export default Answer
