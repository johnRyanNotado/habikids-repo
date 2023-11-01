import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MAIN_HEADER_OPT } from '../../../constants/headerOption'
import { KindCatch, KindCatchCA } from './'
import { KindCatchContext } from './KindCatchContext'
import { db_KindCatch } from '../../../constants/temp_db/db_KindCatch'
import { useChildSectionContext } from '../../context-api/ContextAPI'

const KindCatchStack = createStackNavigator()

const KindCatchNav = () => {
  const { selectedYear } = useChildSectionContext()
  const [score, setScore] = useState(0)
  const [grade, setGrade] = useState(1)
  const TIMER_VALUE = 30000
  const [timerLimit, setTimerLimit] = useState(TIMER_VALUE / 1000)

  // get the game data based on selected year
  const kindnessList = db_KindCatch.grade[selectedYear - 1].kindnessList
  const badList = db_KindCatch.grade[selectedYear - 1].badList

  return (
    <KindCatchContext.Provider
      value={{
        score,
        setScore,
        kindnessList,
        badList,
        TIMER_VALUE,
        kindnessList,
        badList,
        timerLimit,
        setTimerLimit,
        grade,
        setGrade,
      }}
    >
      <KindCatchStack.Navigator>
        <KindCatchStack.Screen
          name="KindCatchCA"
          component={KindCatchCA}
          options={MAIN_HEADER_OPT}
        />
        <KindCatchStack.Screen
          name="KindCatch"
          component={KindCatch}
          options={MAIN_HEADER_OPT}
        />
      </KindCatchStack.Navigator>
    </KindCatchContext.Provider>
  )
}

export default KindCatchNav
