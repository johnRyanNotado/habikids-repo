import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BackHandler, View, ImageBackground, StyleSheet } from 'react-native'
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
  useAppContext,
} from '../../context-api/ContextAPI'
import JeepSvg from '../../../svg/bg/JeepSvg'
import BackBtn from '../../../components/BackBtn'
import { getImg } from '../../../utilities/getImg'
import LoadingScreen from '../../LoadingScreen'
import ErrorScreen from '../../ErrorScreen'
import DropDownPicker from 'react-native-dropdown-picker'
import COLORS from '../../../constants/colors'
import { getSound } from '../../../utilities/getSound'

const Activities = ({ navigation }) => {
  const { isProfileClicked, setSelectedYear, content, setContent } =
    useChildSectionContext()

  const { isLoading, isError, setSoundBg, stopSound, playSound } =
    useAppContext()
  const { dropDownBg, dropDownWrapper, dropDownContainerStyle } = styles
  const { container } = globalStyles

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
  const handleUndoBtn = async () => {
    await stopSound()
    await playSound(getSound.background.welcome.link)
    setSoundBg(getSound.background.welcome.link)
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

  const getDropDown = () => {
    switch (content) {
      case BUTTONS:
        return <></>
      case VALUES:
      case TRADITIONS:
      case GOOD_HABITS:
        return (
          <View style={dropDownBg}>
            <DropDownPicker
              items={YEAR_LEVELS}
              open={isOpen}
              setOpen={setIsOpen}
              value={selectedYear}
              setValue={setSelectedYear}
              dropDownDirection="BOTTOM"
              dropDownContainerStyle={dropDownContainerStyle}
              onChangeValue={(value) => {}}
              textStyle={subTitle}
              style={{ borderWidth: 0, backgroundColor: 'transparent' }}
            />
          </View>
        )
      default:
        return <Text>Something went wrong</Text>
    }
  }

  // useState for identifies which function does the undo back calls
  const [undoBtnFunc, setUndoBtnFunc] = useState(() => handleUndoBtn)

  if (isLoading) {
    return <LoadingScreen />
  }

  if (isError) {
    return <ErrorScreen />
  }

  return (
    <ActivitiesContext.Provider
      value={{
        undoBtnFunc,
        setUndoBtnFunc,
        isOpen,
        setIsOpen,
        handleSelectedAct,
      }}
    >
      <ImageBackground
        source={getImg.bg.jeepInterior.link}
        style={container}
        resizeMode="contain"
      >
        {/* <JeepSvg /> */}
        <View style={container}>
          <ChildSectNavBar backBtn={<BackBtn onPress={undoBtnFunc} />} />
          <ActivitiesMainSect />
          {isProfileClicked ? <ProfileCard /> : <></>}
        </View>
      </ImageBackground>
    </ActivitiesContext.Provider>
  )
}

const styles = StyleSheet.create({
  dropDownBg: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.accent,
    borderWidth: 2,
    height: 30,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  dropDownContainerStyle: {
    backgroundColor: COLORS.primaryTrans,
    borderColor: COLORS.accent,
    borderWidth: 2,
  },
  dropDownWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 35,
    right: 10,
    top: 15,
    left: 'auto',
    zIndex: 10,
  },
})

export default Activities
