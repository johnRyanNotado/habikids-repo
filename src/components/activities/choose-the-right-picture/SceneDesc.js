import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useCTRPContext } from '../../../screens/activities/choose-the-right-picture/CTRPContext'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import { useChildSectionContext } from '../../../screens/context-api/ContextAPI'

const SceneDesc = () => {
  const { item, gameData } = useCTRPContext()
  const { selectedYear } = useChildSectionContext()
  const { centered } = globalStyles
  const { descSect, descTxt } = styles
  const properGrade = selectedYear - 1
  const properItem = item - 1

  return (
    <View style={[centered, descSect]}>
      <Text style={descTxt}>
        {gameData.grade[properGrade]?.item[properItem]?.desc}
      </Text>
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
    fontSize: 25,
    fontWeight: '400',
    fontFamily: 'QuiapoRegular',
    textAlign: 'center',
  },
})

export default SceneDesc
