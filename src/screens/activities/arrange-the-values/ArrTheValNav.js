import React, { useState, createContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MAIN_HEADER_OPT } from '../../../constants/headerOption'
import { ArrTheVal, ArrTheValCA } from './index'
import { ArrTheValContext } from './ArrTheValContext'
import { db_CultPuzz } from '../../../constants/temp_db/db_CultPuzz'

const ArrTheValStack = createStackNavigator()

const INIT_TIMER = 8
const ITEM_AMOUNT = 3
const SCENE = 'scene'
const OPTIONS = 'options'
const MABUTI = 'mabuti'
const MASAMA = 'masama'

const ArrTheValNav = () => {
  const [score, setScore] = useState(0)
  const [displayed, setDisplayed] = useState(SCENE)
  const [item, setItem] = useState(1)
  const [timer, setTimer] = useState(INIT_TIMER)

  // get the related data for narration
  const instruction = db_CultPuzz.instruction
  const instructionDuration = db_CultPuzz.instructionDuration * 1000
  const narrator = db_CultPuzz.narrator

  return (
    <ArrTheValContext.Provider
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
        MABUTI,
        MASAMA,
        instruction,
        instructionDuration,
        narrator,
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
