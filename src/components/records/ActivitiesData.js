import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import COLORS from '../../constants/colors'
import { globalStyles } from '../../styles/GlobalStyles'

const ActivitiesData = (props) => {
  const { actNum, date, scoreOverItems } = props
  const {
    activityDataWrapper,
    progressWrapper,
    done,
    notStarted,
    activityTitle,
    progressTitle,
  } = styles
  return (
    <View style={activityDataWrapper}>
      <View>
        <Text style={activityTitle}>{`Activity ${actNum}`}</Text>
      </View>
      <View
        style={[
          globalStyles.centered,
          progressWrapper,
          date ? done : notStarted,
        ]}
      >
        <Text style={progressTitle}>{`${
          date ? scoreOverItems : 'Not Started'
        }`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  activityDataWrapper: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 15,
    backgroundColor: COLORS.redPrimary,
    borderRadius: 10,
  },
  progressWrapper: {
    height: 35,
    width: 130,
    borderRadius: 60,
  },
  done: {
    backgroundColor: 'lightgreen',
  },
  notStarted: {
    backgroundColor: COLORS.grayThird,
  },
  activityTitle: {
    fontSize: 20,
    fontFamily: 'QuiapoRegular',
    letterSpacing: 2,
  },
  progressTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
})

export default ActivitiesData
