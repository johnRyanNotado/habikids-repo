import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MAIN_HEADER_OPT } from '../../../constants/headerOption'
import { KindCatch, KindCatchCA } from './'
import { KindCatchContext } from './KindCatchContext'
import { db_KindCatch } from '../../../constants/temp_db/activities/db_KindCatch'
import { useChildSectionContext } from '../../context-api/ContextAPI'
import { useSharedValue } from 'react-native-reanimated'

const KindCatchStack = createStackNavigator()

const TIMER_VALUE = 31

const KindCatchNav = ({ navigation }) => {
  const { selectedYear, actID } = useChildSectionContext()
  const [kindnessList, setKindnessList] = useState(null)
  const [badList, setBadList] = useState(null)
  const [instruction, setInstruction] = useState('')
  const [instructionDuration, setInstructionDuration] = useState(0)
  const [narrator, setNarrator] = useState('uni')
  const [timer, setTimer] = useState(TIMER_VALUE)
  const [comp, setComp] = useState(<KindCatchCA />)
  const goBack = () => {
    navigation.goBack()
  }
  const showScoreCard = () => {
    setComp(<KindCatchCA />)
  }

  useEffect(() => {
    db_KindCatch.grade[selectedYear - 1].map((item) => {
      if (actID === item.id) {
        setKindnessList(item.kindnessList)
        setBadList(item.badList)
        setInstruction(item.instruction)
        // setInstructionDuration(item.instructionDuration * 1000)
        setInstructionDuration(20 * 1000)
        setNarrator(item.narrator)
      }
    })
  }, [selectedYear, actID])

  // const timer = useSharedValue(TIMER_VALUE)
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
        setTimer,
        instruction,
        instructionDuration,
        narrator,
        comp,
        setComp,
        showScoreCard,
        goBack,
        KindCatch,
        KindCatchCA,
      }}
    >
      {comp ? comp : null}
      {/* <KindCatchStack.Navigator>
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
      </KindCatchStack.Navigator> */}
    </KindCatchContext.Provider>
  )
}

export default KindCatchNav
