import React from 'react'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import Animated, { ZoomIn } from 'react-native-reanimated'
import Choice from './Choice'
import { useSpecificLessonContext } from '../../../screens/lessons/LessonsContext'
import { FlatList, StyleSheet } from 'react-native'
import { WINDOW_WIDTH } from '../../../constants/windowConstants'

const MultilplePicture = (props) => {
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
      style={[
        container,
        centered,
        custContainer,
        { alignItems: 'flex-start', paddingLeft: WINDOW_WIDTH * 0.12 },
      ]}
      entering={ZoomIn}
    >
      <FlatList
        data={choices}
        renderItem={renderChoices}
        numColumns={2}
        contentContainerStyle={{
          justifyContent: 'center',
          marginBottom: 100,
        }}
      />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  custContainer: {
    width: '100%',
    paddingTop: 110,
    paddingTop: WINDOW_WIDTH * 0.14,
  },
})

export default MultilplePicture
