import React from 'react'
import { View } from 'react-native'
import COLORS from '../../../constants/colors'

import { COMP_DIMENSION } from './constants'
const Spot = (props) => {
  const { x, y } = props

  return (
    <View
      style={{
        height: COMP_DIMENSION.h,
        width: COMP_DIMENSION.w,
        left: x,
        top: y,
        position: 'absolute',
        backgroundColor: COLORS.accent,
        borderRadius: 25,
        borderColor: COLORS.accent,
        zIndex: -1,
      }}
    />
  )
}

export default Spot
