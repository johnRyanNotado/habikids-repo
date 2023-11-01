import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../../constants/colors'
import { globalStyles } from '../../styles/GlobalStyles'

const Message = (props) => {
  const { messageTxt } = props
  const { title, titleWrapper } = styles
  const { txtShadowMedium } = globalStyles
  return (
    <View style={titleWrapper}>
      <Text style={[title, txtShadowMedium]}>{messageTxt}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginVertical: 6,
    letterSpacing: 4,
    color: COLORS.white,
    fontFamily: 'Quiapo',
  },
  titleWrapper: {
    minHeight: 20,
    height: '20%',
    justifyContent: 'center',
  },
})

export default Message
