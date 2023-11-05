import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'

const Success = (props) => {
  const { onPress } = props
  const { successMessage, successBtnTxt, successBtn } = styles
  const { centered, container, positionAbsolute } = globalStyles
  return (
    <View
      style={[
        container,
        centered,
        positionAbsolute,
        { backgroundColor: COLORS.whiteTrans, gap: '50%' },
      ]}
    >
      <Text style={successMessage}>Matagumpay ang pag-register!</Text>
      <TouchableOpacity onPress={onPress}>
        <View style={[centered, successBtn]}>
          <Text style={successBtnTxt}>Magpatuloy!</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  successMessage: { fontFamily: 'Quiapo', fontSize: 50 },
  successBtn: {
    backgroundColor: COLORS.greenPrimary,
    width: 200,
    paddingVertical: 10,
    borderRadius: 50,
  },
  successBtnTxt: {
    fontFamily: 'Quiapo',
    fontFamily: 'QuiapoRegular',
    fontWeight: '400',
    color: COLORS.white,
    letterSpacing: 2,
    fontSize: 24,
  },
})

export default Success
