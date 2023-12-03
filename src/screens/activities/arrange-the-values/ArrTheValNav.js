import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MAIN_HEADER_OPT } from '../../../constants/headerOption'
import { ArrTheVal, ArrTheValCA } from './index'
import { ArrTheValContext } from './ArrTheValContext'
import { db_ArrTheVal } from '../../../constants/temp_db/activities/db_ArrTheVal'
import { useSharedValue } from 'react-native-reanimated'
import { useChildSectionContext } from '../../context-api/ContextAPI'
import { BackHandler } from 'react-native'

const ArrTheValStack = createStackNavigator()

const INIT_TIMER = 8
const ITEM_AMOUNT = 3
const SCENE = 'scene'
const OPTIONS = 'options'
const TAMA = 'TAMA'
const MALI = 'MALI'

const ArrTheValNav = ({ navigation }) => {
  const { selectedYear, actID } = useChildSectionContext()
  const [score, setScore] = useState(0)
  const [displayed, setDisplayed] = useState(SCENE)
  const timer = useSharedValue(INIT_TIMER)
  const [item, setItem] = useState(1)
  const [comp, setComp] = useState(<ArrTheValCA />)

  // get the related data for narration
  let instruction
  let instructionDuration
  let data
  let narrator
  db_ArrTheVal.grade[selectedYear - 1].map((item) => {
    if (actID === item.id) {
      instruction = item.instruction
      narrator = item.narrator
      instructionDuration = item.instructionDuration * 1000
      data = item.item
    }
  })

  useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => backHandler.remove()
  }, [])

  console.log('Called: ArrTheValNav')

  const handleCancelBtn = () => {
    navigation.goBack()
  }

  const goBackBtn = () => {
    navigation.goBack()
  }
  return (
    <ArrTheValContext.Provider
      value={{
        comp,
        setComp,
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
        handleCancelBtn,
        ArrTheVal,
        ArrTheValCA,
        goBackBtn,
      }}
    >
      {comp ? comp : null}
      {/* <ArrTheValStack.Navigator initialRouteName="ArrTheValCA">
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
      </ArrTheValStack.Navigator> */}
    </ArrTheValContext.Provider>
  )
}

export default ArrTheValNav
