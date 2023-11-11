import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import { useArrTheValContext } from '../../../screens/activities/arrange-the-values/ArrTheValContext'

const SceneDesc = () => {
  const { item, data } = useArrTheValContext()
  const { centered } = globalStyles
  const { descSect, descTxt } = styles
  const properItem = item - 1

  const desc = `${data[properItem]?.desc}\n${data[properItem]?.question}`
  return (
    <View style={[centered, descSect]}>
      <Text style={descTxt}>{desc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  descSect: {
    width: '100%',
    height: '25%',
    borderRadius: 20,
    backgroundColor: COLORS.primaryTrans,
    paddingHorizontal: 20,
  },
  descTxt: {
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'QuiapoRegular',
    color: COLORS.accent,
  },
})

export default SceneDesc
