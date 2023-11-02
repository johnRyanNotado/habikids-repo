import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MAIN_HEADER_OPT } from '../../../constants/headerOption'
import { CTRP, CTRPCA } from './index'
import { db_CTRP_GoodHabits } from '../../../constants/temp_db/db_CTRP_GoodHabits'
import { db_CTRP_Values } from '../../../constants/temp_db/db_CTRP_Values'
import { GOOD_HABITS, VALUES } from '../../../constants/contentClassification'
import { CTRPContext } from './CTRPContext'
import { useChildSectionContext } from '../../context-api/ContextAPI'

const CTRPStack = createStackNavigator()

const INIT_TIMER = 8
const ITEM_AMOUNT = 3
const SCENE = 'scene'
const OPTIONS = 'options'

const CTRPNav = () => {
  const { content } = useChildSectionContext()
  const [score, setScore] = useState(0)
  const [displayed, setDisplayed] = useState(SCENE)
  const [timer, setTimer] = useState(INIT_TIMER)
  const [item, setItem] = useState(1)
  const [gameData, setGameData] = useState(null)

  // get the related data for narration (initialize it to values, change it when content changes)
  const [instruction, setInstruction] = useState(db_CTRP_Values.instruction)
  const [instructionDuration, setInstructionDuration] = useState(
    db_CTRP_Values.instructionDuration * 1000
  )
  const [narrator, setNarrator] = useState(db_CTRP_Values.narrator)

  useEffect(() => {
    setGameData(
      content === VALUES
        ? db_CTRP_Values
        : content === GOOD_HABITS
        ? db_CTRP_GoodHabits
        : null
    )

    setInstruction(
      content === VALUES
        ? db_CTRP_Values.instruction
        : content === GOOD_HABITS
        ? db_CTRP_GoodHabits.instruction
        : null
    )

    setInstructionDuration(
      content === VALUES
        ? db_CTRP_Values.instructionDuration * 1000
        : content === GOOD_HABITS
        ? db_CTRP_GoodHabits.instructionDuration * 1000
        : null
    )

    setNarrator(
      content === VALUES
        ? db_CTRP_Values.narrator
        : content === GOOD_HABITS
        ? db_CTRP_GoodHabits.narrator
        : null
    )
    console.log('SHEESH')
  }, [content])

  return (
    <CTRPContext.Provider
      value={{
        score,
        setScore,
        item,
        setItem,
        timer,
        setTimer,
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
