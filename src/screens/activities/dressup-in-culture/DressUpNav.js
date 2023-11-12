import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MAIN_HEADER_OPT } from '../../../constants/headerOption'
import { DressUp, DressUpCA } from './index'
import { db_DressUp } from '../../../constants/temp_db/activities/db_DressUp'
import { useSharedValue } from 'react-native-reanimated'
import { DressUpContext } from './DressUpContext'
import { useChildSectionContext } from '../../context-api/ContextAPI'

const DressUpStack = createStackNavigator()

const DressUpNav = () => {
  const { selectedYear, actID } = useChildSectionContext()
  const score = useSharedValue(0)

  // get the related data for narration
  const instruction = db_DressUp.instruction
  const instructionDuration = db_DressUp.instructionDuration * 1000
  const narrator = db_DressUp.narrator

  return (
    <DressUpContext.Provider
      value={{
        score,
        instruction,
        instructionDuration,
        narrator,
      }}
    >
      <DressUpStack.Navigator>
        <DressUpStack.Screen
          name="DressUpCA"
          component={DressUpCA}
          options={MAIN_HEADER_OPT}
        />
        <DressUpStack.Screen
          name="DressUp"
          component={DressUp}
          options={MAIN_HEADER_OPT}
        />
      </DressUpStack.Navigator>
    </DressUpContext.Provider>
  )
}
export default DressUpNav
