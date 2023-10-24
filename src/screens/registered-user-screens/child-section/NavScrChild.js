import React, { useState, createContext, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Activities, Lessons, Library, HomeChild, Records } from './index'
import { MAIN_HEADER_OPT } from '../../../constants/headerOption'
import { useChildDataContext } from '../../../screens/registered-user-screens/NavScreen'
import {
  LESSONS_GOODHABITS,
  LESSONS_VALUES,
  LESSONS_TRADITIONS,
} from '../../../constants/lessonsList'
import {
  ACTIVITIES_GOODHABITS,
  ACTIVITIES_VALUES,
  ACTIVITIES_TRADITIONS,
} from '../../../constants/activitiesList'

const ChildSectionStack = createStackNavigator()
export const ChildSectionContext = createContext()
export const useChildSectionContext = () => useContext(ChildSectionContext)

const NavScrChild = ({ navigation }) => {
  const { setIsChildChosen } = useChildDataContext()
  const [lessonsGHData, setLessonsGHData] = useState(LESSONS_GOODHABITS)
  const [lessonsVData, setLessonsVData] = useState(LESSONS_VALUES)
  const [lessonsTData, setLessonsTData] = useState(LESSONS_TRADITIONS)
  const [activitiesGHData, setActivitiesGHData] = useState(
    ACTIVITIES_GOODHABITS
  )
  const [activitiesVData, setActivitiesVData] = useState(ACTIVITIES_VALUES)
  const [activitiesTData, setActivitiesTData] = useState(ACTIVITIES_TRADITIONS)
  // use state for profile card in home-child screen
  const [isProfileClicked, setIsProfileClicked] = useState(false)

  // handle settings button
  const handleSettingsBtn = () => {
    navigation.navigate('Settings')
  }

  // handle switch profile button
  const handleSwitchProfBtn = () => {
    setIsChildChosen(false)
    navigation.navigate('Home')
  }

  return (
    <ChildSectionContext.Provider
      value={{
        isProfileClicked,
        setIsProfileClicked,
        lessonsGHData,
        setLessonsGHData,
        lessonsVData,
        setLessonsVData,
        lessonsTData,
        setLessonsTData,
        activitiesGHData,
        setActivitiesGHData,
        activitiesVData,
        setActivitiesVData,
        activitiesTData,
        setActivitiesTData,
        handleSettingsBtn,
        handleSwitchProfBtn,
      }}
    >
      <ChildSectionStack.Navigator initialRouteName="HomeChild">
        <ChildSectionStack.Screen
          name={'HomeChild'}
          component={HomeChild}
          options={MAIN_HEADER_OPT}
        />
        <ChildSectionStack.Screen
          name={'Activities'}
          component={Activities}
          options={MAIN_HEADER_OPT}
        />
        <ChildSectionStack.Screen
          name={'Lessons'}
          component={Lessons}
          options={MAIN_HEADER_OPT}
        />
        <ChildSectionStack.Screen
          name={'Library'}
          component={Library}
          options={MAIN_HEADER_OPT}
        />
        <ChildSectionStack.Screen
          name={'Records'}
          component={Records}
          options={MAIN_HEADER_OPT}
        />
      </ChildSectionStack.Navigator>
    </ChildSectionContext.Provider>
  )
}

export default NavScrChild
