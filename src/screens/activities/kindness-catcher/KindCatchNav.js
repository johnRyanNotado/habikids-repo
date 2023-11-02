import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MAIN_HEADER_OPT } from '../../../constants/headerOption'
import { KindCatch, KindCatchCA } from './'
import { KindCatchContext } from './KindCatchContext'
import { db_KindCatch } from '../../../constants/temp_db/db_KindCatch'
import { useChildSectionContext } from '../../context-api/ContextAPI'
import { useSharedValue } from 'react-native-reanimated'

const KindCatchStack = createStackNavigator()
const GAME_INSTRUCTIONS =
  'Saluhin ang mga nahuhulog na mabuting gawain at iwasan ang mga masasamang gagawin.'
const NARRATOR = 'uni'

const KindCatchNav = () => {
  const { selectedYear } = useChildSectionContext()
  const TIMER_VALUE = 31000

  // get the game data based on selected year
  const kindnessList = db_KindCatch.grade[selectedYear - 1].kindnessList
  const badList = db_KindCatch.grade[selectedYear - 1].badList

  const timerLimit = useSharedValue(30)
  const score = useSharedValue(0)

  return (
    <KindCatchContext.Provider
      value={{
        score,
        kindnessList,
        badList,
        TIMER_VALUE,
        kindnessList,
        badList,
        timerLimit,
        GAME_INSTRUCTIONS,
        NARRATOR,
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
