import React from 'react'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import Animated, { ZoomIn } from 'react-native-reanimated'
import Choice from './Choice'
import { useSpecificLessonContext } from '../../../screens/lessons/LessonsContext'
import { FlatList, StyleSheet } from 'react-native'

const MultipleChoice = (props) => {
  const { choices } = props
  const { custContainer } = styles
  const { container, centered } = globalStyles
  const { selected, setSelected } = useSpecificLessonContext()

  const renderChoices = ({ item }) => {
    return (
      <Choice
        choice={item}
        selected={selected === item.id}
        setSelected={setSelected}
      />
    )
  }
  return (
    <Animated.View
      style={[container, centered, custContainer]}
      entering={ZoomIn}
    >
      <FlatList
        data={choices}
        renderItem={renderChoices}
        contentContainerStyle={{
          justifyContent: 'center',
          flexGrow: 1,
        }}
        style={{ width: '100%' }}
      />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  custContainer: {
    width: '100%',
  },
})

export default MultipleChoice
