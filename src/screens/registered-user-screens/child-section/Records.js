import React, { useState } from 'react'
import { Text, ImageBackground, StyleSheet, View } from 'react-native'
import { getImg } from '../../../utilities/getImg'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import Button from '../../../components/Button'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LessonsRec from '../../../components/records/LessonsRec'
import ActivitiesRec from '../../../components/records/ActivitiesRec'

const Records = ({ navigation }) => {
  const { container, centered, positionAbsolute } = globalStyles
  const LESSONS = 'Lessons'
  const ACTIVITIES = 'Activities'
  const INITIAL = 'None'
  const TITLE = {
    initial: 'Records',
    activities: 'Ulat ng mga Natapos na mga Aktibidad',
    lessons: 'Ulat ng mga Natapos na mga Leksiyon',
  }
  const [selectedRecord, setSelectedRecord] = useState(INITIAL)

  const {
    recordsWrapperSection,
    homeBtnWrapper,
    titleWrapper,
    initialTitle,
    finalTitle,
    btnWrapper,
    dataWrapper,
    custPositionAbs,
    btnStyle,
    txtStyle,
  } = styles

  // This function will show the records for the Lessons
  const handleLessonsBtn = () => {
    setSelectedRecord(LESSONS)
  }

  // This function will show the records for the Activities
  const handleActivitiesBtn = () => {
    setSelectedRecord(ACTIVITIES)
  }

  // get the corresponding component
  const getCorresComp = () => {
    switch (selectedRecord) {
      case INITIAL:
        return (
          <View style={btnWrapper}>
            <Button
              label={`Ulat ng mga Natapos na mga Leksiyon`}
              btnStyle={btnStyle}
              txtStyle={txtStyle}
              onPress={handleLessonsBtn}
            />
            <Button
              label={`Ulat ng mga Natapos na mga Aktibidad`}
              btnStyle={btnStyle}
              txtStyle={txtStyle}
              onPress={handleActivitiesBtn}
            />
          </View>
        )
      case LESSONS:
        return <LessonsRec />
      case ACTIVITIES:
        return <ActivitiesRec />
      default:
        console.log(`something went wrong`)
    }
  }

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
      navigation.goBack()
    } else {
      setSelectedRecord(INITIAL)
    }
  }

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        resizeMode="cover"
        source={getImg.bg.emptyBg.link}
        style={[container, centered]}
      >
        <View style={[positionAbsolute, custPositionAbs]}>
          <TouchableOpacity onPress={handleUndoBtn}>
            <View style={[centered, homeBtnWrapper]}>
              <Ionicons name="arrow-undo" size={25} color={COLORS.accent} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[centered, recordsWrapperSection]}>
          <View style={[centered, titleWrapper]}>
            <Text style={getStyle()}>{getTitle()}</Text>
          </View>
          <View style={[centered, dataWrapper]}>{getCorresComp()}</View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  recordsWrapperSection: {
    width: 400,
    height: '100%',
    backgroundColor: '#E5E5E5',
    borderColor: COLORS.accent,
    borderWidth: 10,
  },
  initialTitle: {
    textAlign: 'center',
    color: COLORS.accent,
    fontSize: 48,
    fontFamily: 'Quiapo',
    letterSpacing: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  finalTitle: {
    textAlign: 'center',
    color: COLORS.accent,
    fontSize: 30,
    fontFamily: 'Quiapo',
    letterSpacing: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  titleWrapper: {
    height: '25%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 10,
  },
  dataWrapper: {
    height: '70%',
    width: '100%',
    minHeight: 70,
    gap: 20,
    justifyContent: 'flex-start',
    marginTop: '5%',
  },
  btnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    height: '100%',
  },
  homeBtnWrapper: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.accent,
    borderWidth: 4,
  },
  custPositionAbs: {
    left: 10,
    top: 10,
    right: '',
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
})

export default Records
