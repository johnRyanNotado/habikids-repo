import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import { Entypo } from '@expo/vector-icons'

const SCORE_BOX_DIMENSION = { w: 90, h: 50, br: 10 }

export const Score = (props) => {
  const { score, items } = props
  const { scoreTxt, scoreWrapper } = styles
  const { positionAbsolute, centered } = globalStyles
  return (
    <View style={[positionAbsolute, centered, scoreWrapper]}>
      <Text style={scoreTxt}>
        {score}/{items}
      </Text>
      <Entypo name="check" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  scoreWrapper: {
    backgroundColor: COLORS.primaryTrans,
    borderRadius: SCORE_BOX_DIMENSION.br,
    width: SCORE_BOX_DIMENSION.w,
    height: SCORE_BOX_DIMENSION.h,
    top: 'auto',
    bottom: 20,
    left: 20,
    flexDirection: 'row',
  },
  scoreTxt: {
    fontSize: 30,
    fontWeight: '400',
    fontFamily: 'Quiapo',
    color: COLORS.accent,
  },
})
