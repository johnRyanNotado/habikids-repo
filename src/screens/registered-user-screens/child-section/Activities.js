import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackHandler, StyleSheet, TouchableOpacity, View } from 'react-native'
import COLORS from '../../../constants/colors'
import { Ionicons } from '@expo/vector-icons'
import ChildSectNavBar from '../../../components/home-child/ChildSectNavBar'
import { globalStyles } from '../../../styles/GlobalStyles'
import ProfileCard from '../../../components/home-child/ProfileCard'
import ActivitiesMainSect from '../../../components/activities/ActivitiesMainSect'
import {
  BUTTONS,
  VALUES,
  TRADITIONS,
  GOOD_HABITS,
} from '../../../constants/contentClassification'
import { YEAR_LEVELS } from '../../../constants/dropDownItems'
import {
  useChildSectionContext,
  ActivitiesContext,
} from '../../context-api/ContextAPI'
import JeepSvg from '../../../svg/bg/JeepSvg'

const Activities = ({ navigation }) => {
  const { isProfileClicked, setSelectedYear, content, setContent } =
    useChildSectionContext()

  const { homeBtnWrapper } = styles
  const { container, centered } = globalStyles

  // useState for opening and closing the dropdown for the selected Year
  const [isOpen, setIsOpen] = useState(false)

  // handle back press -> navigate to library
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

  // useState for changing the contents of the main section
  // const [content, setContent] = useState(BUTTONS)

  // will set the handle button to show the Buttons when clicked
  const setButtonsVal = () => {
    setContent(BUTTONS)
  }
  // will set the handle button to navigate to library when clicked
  const handleUndoBtn = () => {
    navigation.goBack()
  }

  const handleSelectedAct = (act) => {
    navigation.navigate(act)
  }

  // useEffect that sets the undo btn to the initial state if content !== BUTTONS and navigate to library if content === BUTTONS
  useEffect(() => {
    switch (content) {
      case BUTTONS:
        setSelectedYear(YEAR_LEVELS[0].value)
        setUndoBtnFunc(() => handleUndoBtn)
        break
      case VALUES:
      case TRADITIONS:
      case GOOD_HABITS:
        setSelectedYear(YEAR_LEVELS[0].value)
        setUndoBtnFunc(() => setButtonsVal)
        break
      default:
        console.log('Something went wrong. Content: ', content)
    }
  }, [content])

  // useState for identifies which function does the undo back calls
  const [undoBtnFunc, setUndoBtnFunc] = useState(() => handleUndoBtn)

  // Back button component
  const backBtn = (
    <TouchableOpacity onPress={undoBtnFunc}>
      <View style={[centered, homeBtnWrapper]}>
        <Ionicons name="arrow-undo" size={30} color={COLORS.accent} />
      </View>
    </TouchableOpacity>
  )

  return (
    <ActivitiesContext.Provider
      value={{
        // content,
        // setContent,
        undoBtnFunc,
        setUndoBtnFunc,
        isOpen,
        setIsOpen,
        handleSelectedAct,
      }}
    >
      <JeepSvg />
      <View style={container}>
        <ChildSectNavBar backBtn={backBtn} />
        <ActivitiesMainSect />
        {isProfileClicked ? <ProfileCard /> : <></>}
      </View>
    </ActivitiesContext.Provider>
  )
}

const styles = StyleSheet.create({
  homeBtnWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.white,
    borderWidth: 3,
  },
})
export default Activities
