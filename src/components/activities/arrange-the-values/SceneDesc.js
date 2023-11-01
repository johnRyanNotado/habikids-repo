import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import { db_ArrTheVal } from '../../../constants/temp_db/db_ArrTheVal'
import COLORS from '../../../constants/colors'
import { useArrTheValContext } from '../../../screens/activities/arrange-the-values/ArrTheValContext'
import { useChildSectionContext } from '../../../screens/context-api/ContextAPI'

const SceneDesc = () => {
  const { item } = useArrTheValContext()
  const { selectedYear } = useChildSectionContext()
  const { centered } = globalStyles
  const { descSect, descTxt } = styles
  const properItem = item - 1
  const properGrade = selectedYear - 1

  const desc = `${db_ArrTheVal.grade[properGrade]?.item[properItem]?.desc} ${db_ArrTheVal.grade[properGrade]?.item[properItem]?.question}`
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
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
})

export default SceneDesc
