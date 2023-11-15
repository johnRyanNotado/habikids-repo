import React, { useEffect } from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import { getImg } from '../../../utilities/getImg'
import { db_HabitBuilder } from '../../../constants/temp_db/activities/db_HabitBuilder'
import CorrectComp from './CorrectComp'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'
import { useHabitBuilderContext } from '../../../screens/activities/habit-builder/HabitBuilderContext'
import WrongComp from './WrongComp'
import RenderComponents from './RenderComponents'
import Animated, { SlideInRight, SlideOutRight } from 'react-native-reanimated'

const HabitBuilderComp = (props) => {
  const {
    correctComponents,
    wrongComponents,
    bg,
    char,
    narrator,
    isNarrating,
  } = props
  const { container } = globalStyles
  const { score, itemScore } = useHabitBuilderContext()

  return (
    <Animated.View
      style={[container, { zIndex: -1 }]}
      entering={SlideInRight.duration(500)}
      exiting={SlideOutRight.duration(500)}
    >
      <RenderComponents
        corrData={correctComponents}
        wrongData={wrongComponents}
        score={score}
        itemScore={itemScore}
        bg={bg}
        char={char}
        narrator={narrator}
        isNarrating={isNarrating}
      />
    </Animated.View>
  )
}

export default HabitBuilderComp
