import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'

const LessonData = (props) => {
  const { date, lesNum } = props
  const {
    lessonDataWrapper,
    progressWrapper,
    done,
    notStarted,
    lessonTitle,
    progressTitle,
  } = styles

  return (
    <View style={lessonDataWrapper}>
      <View>
        <Text style={lessonTitle}>{`Lesson ${lesNum}`}</Text>
      </View>
      <View
        style={[
          globalStyles.centered,
          progressWrapper,
          date ? done : notStarted,
        ]}
      >
        <Text style={progressTitle}>{`${date ? 'Done' : 'Not Started'}`}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  lessonDataWrapper: {
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
    width: 150,
    borderRadius: 60,
  },
  done: {
    backgroundColor: 'lightgreen',
  },
  notStarted: {
    backgroundColor: COLORS.grayThird,
  },
  lessonTitle: {
    fontSize: 20,
    fontFamily: 'QuiapoRegular',
    letterSpacing: 2,
  },
  progressTitle: {
    fontSize: 13,
    fontWeight: '700',
  },
})
export default LessonData
