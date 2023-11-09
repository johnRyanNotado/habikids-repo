import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MAIN_HEADER_OPT } from '../../../constants/headerOption'
import { ArrTheVal, ArrTheValCA } from './index'
import { ArrTheValContext } from './ArrTheValContext'
import { db_ArrTheVal } from '../../../constants/temp_db/db_ArrTheVal'
import { useSharedValue } from 'react-native-reanimated'
import { useChildSectionContext } from '../../context-api/ContextAPI'

const ArrTheValStack = createStackNavigator()

const INIT_TIMER = 8
const ITEM_AMOUNT = 3
const SCENE = 'scene'
const OPTIONS = 'options'
const TAMA = 'TAMA'
const MALI = 'MALI'

const ArrTheValNav = () => {
  const { selectedYear, actID } = useChildSectionContext()
  const [score, setScore] = useState(0)
  const [displayed, setDisplayed] = useState(SCENE)
  const timer = useSharedValue(INIT_TIMER)
  const [item, setItem] = useState(1)

  // get the related data for narration
  let instruction
  let instructionDuration
  let data
  db_ArrTheVal.grade[selectedYear - 1].map((item) => {
    if (actID === item.id) {
      instruction = item.instruction
      instructionDuration = item.instructionDuration * 1000
      data = item.item
    }
  })
  const narrator = db_ArrTheVal.narrator

  console.log('Called: ArrTheValNav')
  return (
    <ArrTheValContext.Provider
      value={{
        score,
        setScore,
        item,
        setItem,
        timer,
        displayed,
        setDisplayed,
        SCENE,
        OPTIONS,
        ITEM_AMOUNT,
        INIT_TIMER,
        TAMA,
        MALI,
        instruction,
        instructionDuration,
        narrator,
        data,
      }}
    >
      <ArrTheValStack.Navigator>
        <ArrTheValStack.Screen
          name="ArrTheValCA"
          component={ArrTheValCA}
          options={MAIN_HEADER_OPT}
        />
        <ArrTheValStack.Screen
          name="ArrTheVal"
          component={ArrTheVal}
          options={MAIN_HEADER_OPT}
        />
      </ArrTheValStack.Navigator>
    </ArrTheValContext.Provider>
  )
}

export default ArrTheValNav
