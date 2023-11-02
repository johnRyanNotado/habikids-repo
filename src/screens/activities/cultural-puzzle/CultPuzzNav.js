import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MAIN_HEADER_OPT } from '../../../constants/headerOption'
import { CultPuzz, CultPuzzCA } from './index'
import { useSharedValue } from 'react-native-reanimated'
import {
  CENTER_X,
  CENTER_Y,
  PUZZLE_DIMENSIONS,
} from '../../../constants/puzzleConstants'
import { WINDOW_WIDTH } from '../../../constants/windowConstants'
import { CultPuzzContext } from './CultPuzzContext'
import { db_CultPuzz } from '../../../constants/temp_db/db_CultPuzz'
import {
  useActivitiesContext,
  useChildSectionContext,
} from '../../context-api/ContextAPI'

const CultPuzzStack = createStackNavigator()

const CultPuzzNav = () => {
  const { selectedYear } = useChildSectionContext()
  const score = useSharedValue(0)
  const TIMER_VALUE = 30000
  const [timerLimit, setTimerLimit] = useState(TIMER_VALUE / 1000)
  const [isFinished, setIsFinished] = useState(false)
  const [shuffledEndPos, setShuffledEndPos] = useState([])
  const minimumDistanceX = PUZZLE_DIMENSIONS.w + WINDOW_WIDTH * 0.15
  const minimumDistanceY = PUZZLE_DIMENSIONS.h * 0.7

  // end position of puzzles
  const endPos = [
    { x: CENTER_X - minimumDistanceX, y: CENTER_Y - minimumDistanceY },
    { x: CENTER_X + minimumDistanceX, y: CENTER_Y - minimumDistanceY },
    { x: CENTER_X - minimumDistanceX, y: CENTER_Y + minimumDistanceY },
    { x: CENTER_X + minimumDistanceX, y: CENTER_Y + minimumDistanceY },
  ]

  // get the data using the selected year
  const PUZZLE_GAME_DATA = db_CultPuzz.grade[selectedYear - 1]

  // get the related data for narration
  const instruction = db_CultPuzz.instruction
  const instructionDuration = db_CultPuzz.instructionDuration * 1000
  const narrator = db_CultPuzz.narrator

  return (
    <CultPuzzContext.Provider
      value={{
        score,
        timerLimit,
        setTimerLimit,
        TIMER_VALUE,
        isFinished,
        setIsFinished,
        endPos,
        shuffledEndPos,
        setShuffledEndPos,
        PUZZLE_GAME_DATA,
        instruction,
        instructionDuration,
        narrator,
      }}
    >
      <CultPuzzStack.Navigator>
        <CultPuzzStack.Screen
          name="CultPuzzCA"
          component={CultPuzzCA}
          options={MAIN_HEADER_OPT}
        />
        <CultPuzzStack.Screen
          name="CultPuzz"
          component={CultPuzz}
          options={MAIN_HEADER_OPT}
        />
      </CultPuzzStack.Navigator>
    </CultPuzzContext.Provider>
  )
}

export default CultPuzzNav
