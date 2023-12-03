import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MAIN_HEADER_OPT } from '../../../constants/headerOption'
import { HabitBuilderCA, HabitBuilder } from './index'
import { HabitBuilderContext } from './HabitBuilderContext'
import { useSharedValue } from 'react-native-reanimated'
import { db_HabitBuilder } from '../../../constants/temp_db/activities/db_HabitBuilder'
import { useChildSectionContext } from '../../context-api/ContextAPI'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'

const HabitBuilderStack = createStackNavigator()

const HabitBuilderNav = ({ navigation }) => {
  const { selectedYear, actID } = useChildSectionContext()
  const score = useSharedValue(0)
  const timer = useSharedValue(0)
  const [item, setItem] = useState(0)
  const itemScore = useSharedValue(0)
  const [isNarrating, setIsNarrating] = useState(false)
  const [instruction, setInstruction] = useState('')
  const [instructionDuration, setInstructionDuration] = useState(0)
  const [comp, setComp] = useState(<HabitBuilderCA />)
  const goBack = () => {
    navigation.goBack()
  }
  const showScoreCard = () => {
    setComp(<HabitBuilderCA />)
  }

  const [narrator, setNarrator] = useState('vio')

  // get the related data for narration
  const [gameData, setGameData] = useState(null)

  useEffect(() => {
    db_HabitBuilder.grade[selectedYear - 1].map((item) => {
      if (actID === item.id) {
        setGameData(item)
        setInstruction(item.instruction)
        setInstructionDuration(item.instructionDuration * 1000)
        setNarrator(item.narrator)
      }
    })
  }, [selectedYear, actID])

  return (
    <HabitBuilderContext.Provider
      value={{
        score,
        timer,
        instruction,
        instructionDuration,
        narrator,
        gameData,
        item,
        setItem,
        isNarrating,
        setIsNarrating,
        itemScore,
        comp,
        setComp,
        showScoreCard,
        goBack,
        HabitBuilderCA,
        HabitBuilder,
      }}
    >
      {comp ? comp : null}
      {/* <HabitBuilderStack.Navigator>
        <HabitBuilderStack.Screen
          name="HabitBuilderCA"
          component={HabitBuilderCA}
          options={MAIN_HEADER_OPT}
        />

        <HabitBuilderStack.Screen
          name="HabitBuilder"
          component={HabitBuilder}
          options={MAIN_HEADER_OPT}
        />
      </HabitBuilderStack.Navigator> */}
    </HabitBuilderContext.Provider>
  )
}

export default HabitBuilderNav
