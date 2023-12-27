import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import Button from '../../../components/Button'
import LessonsRec from '../../../components/records/LessonsRec'
import ActivitiesRec from '../../../components/records/ActivitiesRec'
import EmptyBgSvg from '../../../svg/bg/EmptyBgSvg'
import ChildSectNavBar from '../../../components/home-child/ChildSectNavBar'
import ProfileCard from '../../../components/home-child/ProfileCard'
import {
  useAppContext,
  useChildSectionContext,
} from '../../context-api/ContextAPI'
import BackBtn from '../../../components/BackBtn'
import { getImg } from '../../../utilities/getImg'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'
import { TOPICS_ITEMS, YEAR_LEVELS } from '../../../constants/dropDownItems'
import DropDownPicker from 'react-native-dropdown-picker'

const TITLE_WIDTH = WINDOW_WIDTH * 0.35
const HALF_TITLE_WIDTH = TITLE_WIDTH / 2

const Records = ({ navigation }) => {
  const { isProfileClicked, selectedYear, setSelectedYear } =
    useChildSectionContext()
  const { dataChanged } = useAppContext()
  const { container, centered, positionAbsolute } = globalStyles
  const LESSONS = 'Lessons'
  const ACTIVITIES = 'Activities'
  const INITIAL = 'None'
  const TITLE = {
    initial: 'Talaan',
    activities: 'Ulat ng mga  Gawain na Natapos',
    lessons: 'Ulat ng mga Aralin na Natapos',
  }

  const [selectedTopic, setSelectedTopic] = useState(TOPICS_ITEMS[0].value)
  const [selectedRecord, setSelectedRecord] = useState(INITIAL)
  const [isOpen, setIsOpen] = useState(false)
  const [comp, setComp] = useState(null)
  const {
    recordsWrapperSection,
    titleWrapper,
    initialTitle,
    finalTitle,
    btnWrapper,
    dataWrapper,
    btnStyle,
    txtStyle,
    dropDownBg,
    dropDownWrapper,
    dropDownContainerStyle,
    subTitle,
    subTitleBg,
  } = styles

  // This function will show the records for the Lessons
  const handleLessonsBtn = () => {
    setSelectedRecord(LESSONS)
  }

  // This function will show the records for the Activities
  const handleActivitiesBtn = () => {
    setSelectedRecord(ACTIVITIES)
  }

  useEffect(() => {
    switch (selectedRecord) {
      case INITIAL:
        setComp(
          <View style={btnWrapper}>
            <Button
              label={`Ulat ng mga Natapos na mga Leksiyon`}
              btnStyle={btnStyle}
              txtStyle={txtStyle}
              onPress={handleLessonsBtn}
            />
            <Button
              label={`Ulat ng mga Natapos na mga Gawain`}
              btnStyle={btnStyle}
              txtStyle={txtStyle}
              onPress={handleActivitiesBtn}
            />
          </View>
        )
        break
      case LESSONS:
        setComp(
          <LessonsRec
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
          />
        )
        break
      case ACTIVITIES:
        setComp(
          <ActivitiesRec
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
          />
        )
        break
      default:
        console.log(`something went wrong`)
    }
  }, [selectedYear, selectedTopic, selectedRecord, dataChanged])

  useEffect(() => {
    setSelectedTopic(TOPICS_ITEMS[0].value)
  }, [selectedYear])

  const getDropDown = () => {
    switch (selectedRecord) {
      case INITIAL:
        return <></>
      case LESSONS:
      case ACTIVITIES:
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

  console.log('Selected Year: ', selectedYear)
  // get the corresponding title
  const getTitle = () => {
    switch (selectedRecord) {
      case INITIAL:
        return TITLE.initial
      case LESSONS:
        return TITLE.lessons
      case ACTIVITIES:
        return TITLE.activities
      default:
        console.log('Something went wrong')
    }
  }

  // get the corresponding style for the title
  const getStyle = () => {
    switch (selectedRecord) {
      case INITIAL:
        return initialTitle
      case LESSONS:
      case ACTIVITIES:
        return finalTitle
      default:
        console.log('Something went wrong')
    }
  }

  const handleUndoBtn = () => {
    if (selectedRecord === INITIAL) {
      setSelectedYear(1)
      navigation.goBack()
    } else {
      setSelectedRecord(INITIAL)
    }
  }

  return (
    <ImageBackground source={getImg.bg.records.link} style={container}>
      <View style={(container, centered)}>
        <View style={[positionAbsolute, dropDownWrapper]}>{getDropDown()}</View>
        <View style={[positionAbsolute, { zIndex: 10, height: 80 }]}>
          <ChildSectNavBar backBtn={<BackBtn onPress={handleUndoBtn} />} />
        </View>
        <View style={[centered, recordsWrapperSection]}>
          <View style={[centered, titleWrapper]}>
            <Text style={getStyle()}>{getTitle()}</Text>
          </View>
          <View style={[centered, dataWrapper]}>{comp ? comp : null}</View>
        </View>
        {isProfileClicked ? <ProfileCard /> : <></>}
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  recordsWrapperSection: {
    width: WINDOW_WIDTH,
    height: '100%',
  },
  initialTitle: {
    width: '100%',
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 48,
    fontFamily: 'Quiapo',
    letterSpacing: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  finalTitle: {
    textAlign: 'center',
    width: '100%',
    color: COLORS.white,
    fontSize: 30,
    fontFamily: 'Quiapo',
    letterSpacing: 3,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  titleWrapper: {
    height: WINDOW_HEIGHT * 0.15,
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 20,
    bottom: 'auto',
    right: (WINDOW_WIDTH / 2) * 0.125 - 24,
    right: WINDOW_WIDTH / 2 - HALF_TITLE_WIDTH - WINDOW_WIDTH * 0.02,
    width: TITLE_WIDTH,
  },
  dataWrapper: {
    height: '70%',
    width: '100%',
    minHeight: 70,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
    position: 'absolute',
    top: 'auto',
    bottom: 0,
    right: 'auto',
    left: 10,
  },
  btnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    height: '100%',
    width: WINDOW_WIDTH * 0.5,
  },
  custPositionAbs: {
    left: 25,
    top: 20,
  },
  btnStyle: {
    borderWidth: 1,
    borderColor: COLORS.accent,
    backgroundColor: COLORS.white,
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 25,
  },
  txtStyle: {
    color: COLORS.accent,
    fontFamily: 'QuiapoRegular',
    letterSpacing: 2,
    textAlign: 'center',
    fontWeight: '400',
  },
  subTitle: {
    fontFamily: 'QuiapoRegular',
    fontSize: 20,
    zIndex: 10,
    letterSpacing: 1,
  },
  subTitleBg: {
    width: 180,
    height: 25,
    marginVertical: 10,
    backgroundColor: COLORS.whiteTrans,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropDownContainerStyle: {
    backgroundColor: COLORS.primaryTrans,
    borderColor: COLORS.accent,
    borderWidth: 2,
  },
  dropDownWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: WINDOW_WIDTH * 0.2,
    height: 35,
    right: 3,
    top: WINDOW_HEIGHT * 0.34,
    bottom: 'auto',
    left: 'auto',
    zIndex: 15,
  },
  dropDownBg: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.accent,
    borderWidth: 5,
    height: 40,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
})

export default Records
