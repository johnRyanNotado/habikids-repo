import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MAIN_HEADER_OPT } from '../../../constants/headerOption'
import { CTRP, CTRPCA } from './index'
import { db_CTRP_GoodHabits } from '../../../constants/temp_db/activities/db_CTRP_GoodHabits'
import { db_CTRP_Values } from '../../../constants/temp_db/activities/db_CTRP_Values'
import { GOOD_HABITS, VALUES } from '../../../constants/contentClassification'
import { CTRPContext } from './CTRPContext'
import { useChildSectionContext } from '../../context-api/ContextAPI'
import { useSharedValue } from 'react-native-reanimated'

const CTRPStack = createStackNavigator()

const INIT_TIMER = 8
const ITEM_AMOUNT = 3
const SCENE = 'scene'
const OPTIONS = 'options'

const CTRPNav = () => {
  const { content, selectedYear, actID } = useChildSectionContext()
  const [score, setScore] = useState(0)
  const [displayed, setDisplayed] = useState(SCENE)
  const timer = useSharedValue(INIT_TIMER)
  const [item, setItem] = useState(1)
  const [gameData, setGameData] = useState(null)

  // get the related data for narration (initialize it to values, change it when content changes)
  const [instruction, setInstruction] = useState(db_CTRP_Values.instruction)
  const [instructionDuration, setInstructionDuration] = useState(
    db_CTRP_Values.instructionDuration * 1000
  )
  const [narrator, setNarrator] = useState(db_CTRP_Values.narrator)

  useEffect(() => {
    let wholeGameData =
      content === VALUES
        ? db_CTRP_Values
        : content === GOOD_HABITS
        ? db_CTRP_GoodHabits
        : null

    wholeGameData.grade[selectedYear - 1].map((item) => {
      if (item.id === actID) {
        setGameData(item.item)
        setInstruction(item.instruction)
        setInstructionDuration(item.instructionDuration * 1000)
      }
    })

    setNarrator(wholeGameData.narrator)
  }, [content])

  return (
    <CTRPContext.Provider
      value={{
        score,
        setScore,
        item,
        setItem,
        timer,
        INIT_TIMER,
        displayed,
        setDisplayed,
        SCENE,
        OPTIONS,
        ITEM_AMOUNT,
        gameData,
        setGameData,
        instruction,
        instructionDuration,
        narrator,
      }}
    >
      <CTRPStack.Navigator>
        <CTRPStack.Screen
          name="CTRPCA"
          component={CTRPCA}
          options={MAIN_HEADER_OPT}
        />
        <CTRPStack.Screen
          name="CTRP"
          component={CTRP}
          options={MAIN_HEADER_OPT}
        />
      </CTRPStack.Navigator>
    </CTRPContext.Provider>
  )
}

export default CTRPNav
