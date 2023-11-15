import React from 'react'
import { globalStyles } from '../../../styles/GlobalStyles'
import { useHabitBuilderContext } from '../../../screens/activities/habit-builder/HabitBuilderContext'
import RenderComponents from './RenderComponents'
import Animated, { SlideInRight, SlideOutLeft } from 'react-native-reanimated'

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
      exiting={SlideOutLeft.duration(500)}
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
