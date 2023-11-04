import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'
import { Ionicons } from '@expo/vector-icons'
import { globalStyles } from '../styles/GlobalStyles'

const BackBtn = (props) => {
  const { onPress } = props
  const { homeBtnWrapper } = styles
  const { centered } = globalStyles
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[centered, homeBtnWrapper]}>
        <Ionicons name="arrow-undo" size={30} color={COLORS.accent} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  homeBtnWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.white,
    borderWidth: 3,
  },
})

export default BackBtn
