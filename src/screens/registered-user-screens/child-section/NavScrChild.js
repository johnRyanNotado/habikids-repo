import React, { useState, createContext, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Activities, Lessons, Library, HomeChild, Records } from './index'
import { MAIN_HEADER_OPT } from '../../../constants/headerOption'
import {
  LESSONS_GOODHABITS,
  LESSONS_VALUES,
  LESSONS_TRADITIONS,
} from '../../../constants/temp_db/db_lessons'
import {
  ACTIVITIES_GOODHABITS,
  ACTIVITIES_VALUES,
  ACTIVITIES_TRADITIONS,
} from '../../../constants/temp_db/db_activity'
import {
  useChildDataContext,
  ChildSectionContext,
} from '../../../screens/context-api/ContextAPI'

const ChildSectionStack = createStackNavigator()

const NavScrChild = ({ navigation }) => {
  const { setIsChildChosen } = useChildDataContext()

  const [lessonsGHData, setLessonsGHData] = useState(LESSONS_GOODHABITS) // Data for the good habits lessons

  const [lessonsVData, setLessonsVData] = useState(LESSONS_VALUES) // Data for the values lessons

  const [lessonsTData, setLessonsTData] = useState(LESSONS_TRADITIONS) // Data for the traditions lessons

  const [activitiesGHData, setActivitiesGHData] = useState(
    ACTIVITIES_GOODHABITS
  ) // Data for the good habits activities

  const [activitiesVData, setActivitiesVData] = useState(ACTIVITIES_VALUES) // Data for the values activities

  const [activitiesTData, setActivitiesTData] = useState(ACTIVITIES_TRADITIONS) // Data for the traditions activities

  // use state for profile card in home-child screen
  const [isProfileClicked, setIsProfileClicked] = useState(false)

  // This function will navigate the user to the settings screen.
  const handleSettingsBtn = () => {
    navigation.navigate('Settings')
  }

  // This function will navigate the user to the home screen and will set the isChildChosen to false.
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
