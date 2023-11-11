import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Lesson, LessonsCA } from './index'
import { SpecificLessonContext } from './LessonsContext'
import { MAIN_HEADER_OPT } from '../../constants/headerOption'
import { useChildSectionContext } from '../context-api/ContextAPI'
import { db_Les_Values } from '../../constants/temp_db/lessons/db_les_values'
import { useSharedValue } from 'react-native-reanimated'

const LessonsStack = createStackNavigator()

const LessonsNav = () => {
  const { selectedYear, lesID } = useChildSectionContext()
  const [item, setItem] = useState(1)
  const [lessonData, setLessonData] = useState(null)
  const [isFinished, setIsFinished] = useState(false)
  const [isNarrating, setIsNarrating] = useState(false)
  const [scriptNum, setScriptNum] = useState(0)
  const [scriptComp, setScriptComp] = useState(null)
  const [title, setTitle] = useState(null)
  const [lesNum, setLesNum] = useState(null)
  const [instruction, setInstruction] = useState(null)
  const [narrator, setNarrator] = useState(null)
  const [isActFin, setIsActFin] = useState(false)
  const [selected, setSelected] = useState(null)
  const [activity, setActivity] = useState(null)
  const timer = useSharedValue(0)

  useEffect(() => {
    db_Les_Values.grade[selectedYear - 1].map((item) => {
      if (item.id === lesID) {
        setLessonData((prevState) => item)
        setTitle(item.title)
        setLesNum(item.lesNum)
      }
    })
  }, [lesID])

  console.log('\n\nCalled: LessonNav')
  return (
    <SpecificLessonContext.Provider
      value={{
        item,
        setItem,
        lessonData,
        setLessonData,
        isFinished,
        setIsFinished,
        scriptNum,
        setScriptNum,
        timer,
        scriptComp,
        setScriptComp,
        title,
        setTitle,
        lesNum,
        setLesNum,
        narrator,
        setNarrator,
        instruction,
        setInstruction,
        isNarrating,
        setIsNarrating,
        isActFin,
        setIsActFin,
        selected,
        setSelected,
        activity,
        setActivity,
      }}
    >
      <LessonsStack.Navigator>
        <LessonsStack.Screen
          name="LessonsCA"
          component={LessonsCA}
          options={MAIN_HEADER_OPT}
        />

        <LessonsStack.Screen
          name="Lesson"
          component={Lesson}
          options={MAIN_HEADER_OPT}
        />
      </LessonsStack.Navigator>
    </SpecificLessonContext.Provider>
  )
}

export default LessonsNav
