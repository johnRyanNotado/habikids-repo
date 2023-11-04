import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { globalStyles } from '../styles/GlobalStyles'
import COLORS from '../constants/colors'
import { MaterialIcons } from '@expo/vector-icons'

const Timer = (props) => {
  const { timer } = props
  const { timerTxt, timerWrapper } = styles
  const { centered, positionAbsolute } = globalStyles

  return (
    <View style={[positionAbsolute, centered, timerWrapper]}>
      <MaterialIcons name="timer" size={26} color={COLORS.accent} />
      <Text style={timerTxt}>{timer}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  timerTxt: {
    fontSize: 28,
    color: COLORS.accent,
    fontFamily: 'Quiapo',
  },
  timerWrapper: {
    top: 10,
    right: 'auto',
    left: 20,
    fontWeight: '400',
    backgroundColor: COLORS.primaryTrans,
    width: 40,
    height: 80,
    borderRadius: 20,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
})

export default Timer
