import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  Activities,
  Lessons,
  Library,
  HomeChild,
  Records,
  CultPuzzNav,
  KindCatchNav,
  ArrTheValNav,
  CTRPNav,
  LessonsNav,
  DressUpNav,
  HabitBuilderNav,
} from './index'
import { MAIN_HEADER_OPT } from '../../../constants/headerOption'
import {
  LESSONS_GOODHABITS,
  LESSONS_VALUES,
  LESSONS_TRADITIONS,
} from '../../../constants/temp_db/db_records_les'
import {
  ACTIVITIES_GOODHABITS,
  ACTIVITIES_VALUES,
  ACTIVITIES_TRADITIONS,
} from '../../../constants/temp_db/db_records_act'
import {
  useChildDataContext,
  ChildSectionContext,
  useAppContext,
} from '../../../screens/context-api/ContextAPI'
import { YEAR_LEVELS } from '../../../constants/dropDownItems'
import { BUTTONS } from '../../../constants/contentClassification'
import { saveActivityUrl } from '../../../constants/db_config'

const ChildSectionStack = createStackNavigator()

const NavScrChild = ({ navigation }) => {
  const { setIsChildChosen } = useChildDataContext()
  const { chosenChild, childData } = useChildDataContext()
  const { user, setIsError, setIsLoading, dataChanged, setDataChanged } =
    useAppContext()

  const [lessonsGHData, setLessonsGHData] = useState(LESSONS_GOODHABITS) // Data for the good habits lessons

  const [lessonsVData, setLessonsVData] = useState(LESSONS_VALUES) // Data for the values lessons

  const [lessonsTData, setLessonsTData] = useState(LESSONS_TRADITIONS) // Data for the traditions lessons

  const [activitiesGHData, setActivitiesGHData] = useState(
    ACTIVITIES_GOODHABITS
  ) // Data for the good habits activities

  const [activitiesVData, setActivitiesVData] = useState(ACTIVITIES_VALUES) // Data for the values activities

  const [activitiesTData, setActivitiesTData] = useState(ACTIVITIES_TRADITIONS) // Data for the traditions activities

  useEffect(() => {
    let childRec
    childData.map((item, index) => {
      if (item.id === chosenChild.id) {
        childRec = item.learnerRecords
      }
      setLessonsGHData(childRec.LESSONS_GOODHABITS)
      setLessonsTData(childRec.LESSONS_TRADITIONS)
      setLessonsVData(childRec.LESSONS_VALUES)

      setActivitiesGHData(childRec.ACTIVITIES_GOODHABITS)
      setActivitiesTData(childRec.ACTIVITIES_TRADITIONS)
      setActivitiesVData(childRec.ACTIVITIES_VALUES)
    })
  }, [dataChanged, chosenChild])

  // use state for profile card in home-child screen
  const [isProfileClicked, setIsProfileClicked] = useState(false)

  // useState for serving as the value of the dropdown for the selected Year
  const [selectedYear, setSelectedYear] = useState(YEAR_LEVELS[0].value)

  // for identifying which activity or lesson is currently being used
  const [actID, setActID] = useState(null)
  const [lesID, setLesID] = useState(null)

  // This function will navigate the user to the settings screen.
  const handleSettingsBtn = () => {
    navigation.navigate('Settings')
  }

  // for the games to determine if the user pause a game or not
  const [isGamePaused, setIsGamePaused] = useState(false)

  // useState for changing the contents of the main section
  const [content, setContent] = useState(BUTTONS)

  // This function will navigate the user to the home screen and will set the isChildChosen to false.
  const handleSwitchProfBtn = () => {
    setIsChildChosen(false)
    navigation.navigate('Home')
  }

  // For hiding/showing the arrows in the lessons
  const [isLeftShown, setIsLeftShown] = useState(true)
  const [isRightShown, setIsRightShown] = useState(false)
  const [isCheckBtnShown, setIsCheckBtnShown] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)

  const saveAct = async (score) => {
    const save = async () => {
      try {
        const resp = await fetch(saveActivityUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            user_id: user.user_id,
            actId: actID,
            learnerId: chosenChild.id,
            score: score,
          }),
        })
        const response = await resp.json()
        console.log('Response: ', response)
      } catch (err) {
        console.log('Error: ', err)
        setIsError(true)
      }
      setIsLoading(false)
    }
    setIsLoading(true)
    setDataChanged((prevstate) => prevstate + 1)
    await save()
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
        selectedYear,
        setSelectedYear,
        content,
        setContent,
        isGamePaused,
        setIsGamePaused,
        actID,
        setActID,
        lesID,
        setLesID,
        isLeftShown,
        setIsLeftShown,
        isRightShown,
        setIsRightShown,
        isCheckBtnShown,
        setIsCheckBtnShown,
        isDisabled,
        setIsDisabled,
        saveAct,
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
        <ChildSectionStack.Screen
          name={'CultPuzzNav'}
          component={CultPuzzNav}
          options={MAIN_HEADER_OPT}
        />
        <ChildSectionStack.Screen
          name={'KindCatchNav'}
          component={KindCatchNav}
          options={MAIN_HEADER_OPT}
        />
        <ChildSectionStack.Screen
          name={'ArrTheValNav'}
          component={ArrTheValNav}
          options={MAIN_HEADER_OPT}
        />
        <ChildSectionStack.Screen
          name={'CTRPNav'}
          component={CTRPNav}
          options={MAIN_HEADER_OPT}
        />
        <ChildSectionStack.Screen
          name={'DressUpNav'}
          component={DressUpNav}
          options={MAIN_HEADER_OPT}
        />

        <ChildSectionStack.Screen
          name={'HabitBuilderNav'}
          component={HabitBuilderNav}
          options={MAIN_HEADER_OPT}
        />

        <ChildSectionStack.Screen
          name={'LessonsNav'}
          component={LessonsNav}
          options={MAIN_HEADER_OPT}
        />
      </ChildSectionStack.Navigator>
    </ChildSectionContext.Provider>
  )
}

export default NavScrChild
