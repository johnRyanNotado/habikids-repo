import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/GlobalStyles'

const Button = (props) => {
  const { onPress, btnStyle, txtStyle, label } = props
  const { centered } = globalStyles
  return (
    <TouchableOpacity style={[centered, btnStyle]} onPress={onPress}>
      <Text style={[styles.genTxtStyle, txtStyle]}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  genTxtStyle: {
    fontSize: 18,
  },
})
export default Button
