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
import { db_CultPuzz } from '../../../constants/temp_db/activities/db_CultPuzz'
import { CultPuzzContext } from './CultPuzzContext'
import { useChildSectionContext } from '../../context-api/ContextAPI'

const CultPuzzStack = createStackNavigator()

const CultPuzzNav = ({ navigation }) => {
  const { selectedYear, actID } = useChildSectionContext()
  const score = useSharedValue(0)
  const TIMER_VALUE = 30000
  const [timerLimit, setTimerLimit] = useState(TIMER_VALUE / 1000)
  const [isFinished, setIsFinished] = useState(false)
  const [shuffledEndPos, setShuffledEndPos] = useState([])
  const [comp, setComp] = useState(<CultPuzzCA />)
  const minimumDistanceX = PUZZLE_DIMENSIONS.w + WINDOW_WIDTH * 0.15
  const minimumDistanceY = PUZZLE_DIMENSIONS.h * 0.7

  const goBack = () => {
    navigation.goBack()
  }

  const showScoreCard = () => {
    setComp(<CultPuzzCA />)
  }

  // end position of puzzles
  const endPos = [
    { x: CENTER_X - minimumDistanceX, y: CENTER_Y - minimumDistanceY },
    { x: CENTER_X + minimumDistanceX, y: CENTER_Y - minimumDistanceY },
    { x: CENTER_X - minimumDistanceX, y: CENTER_Y + minimumDistanceY },
    { x: CENTER_X + minimumDistanceX, y: CENTER_Y + minimumDistanceY },
  ]

  // get the related data for narration
  let instruction
  let instructionDuration
  let narrator

  // get the data using the selected year
  let PUZZLE_GAME_DATA
  db_CultPuzz.grade[selectedYear - 1].map((item) => {
    if (actID === item.id) {
      PUZZLE_GAME_DATA = item
      instruction = item.instruction
      instructionDuration = item.instructionDuration * 1000
      narrator = item.narrator
    }
  })

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
        comp,
        setComp,
        goBack,
        CultPuzz,
        CultPuzzCA,
        showScoreCard,
      }}
    >
      {comp ? comp : null}
      {/* <CultPuzzStack.Navigator>
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
      </CultPuzzStack.Navigator> */}
    </CultPuzzContext.Provider>
  )
}

export default CultPuzzNav
