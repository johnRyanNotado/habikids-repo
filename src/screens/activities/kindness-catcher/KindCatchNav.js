import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MAIN_HEADER_OPT } from '../../../constants/headerOption'
import { KindCatch, KindCatchCA } from './'
import { KindCatchContext } from './KindCatchContext'
import { db_KindCatch } from '../../../constants/temp_db/activities/db_KindCatch'
import { useChildSectionContext } from '../../context-api/ContextAPI'
import { useSharedValue } from 'react-native-reanimated'

const KindCatchStack = createStackNavigator()

const KindCatchNav = () => {
  const { selectedYear, actID } = useChildSectionContext()
  const TIMER_VALUE = 31
  const [kindnessList, setKindnessList] = useState(null)
  const [badList, setBadList] = useState(null)

  useEffect(() => {
    db_KindCatch.grade[selectedYear - 1].map((item) => {
      if (actID === item.id) {
        setKindnessList(item.kindnessList)
        setBadList(item.badList)
      }
    })
  }, [selectedYear])
  // get the related data for narration
  const instruction = db_KindCatch.instruction
  const instructionDuration = db_KindCatch.instructionDuration * 1000
  const narrator = db_KindCatch.narrator

  const timer = useSharedValue(TIMER_VALUE)
  const score = useSharedValue(0)

  return (
    <KindCatchContext.Provider
      value={{
        score,
        badList,
        TIMER_VALUE,
        kindnessList,
        badList,
        timer,
        instruction,
        instructionDuration,
        narrator,
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
