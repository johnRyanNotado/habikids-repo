import React from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import { getImg } from '../../../utilities/getImg'
import COLORS from '../../../constants/colors'
import ArrowButtons from '../../../components/lessons/lessons-illustration/ArrowButtons'
import LessonsNavBar from '../../../components/lessons/lessons-illustration/LessonsNavBar'
import { useChildSectionContext } from '../../context-api/ContextAPI'
import LessonCard from '../../../components/lessons/lessons-illustration/LessonCard'

const Illustration = ({ navigation }) => {
  const { centered, container, positionAbsolute } = globalStyles
  const { isGamePaused } = useChildSectionContext()
  const exitLesson = () => {
    navigation.goBack()
  }
  return (
    <ImageBackground style={container} source={getImg.bg.emptyBg.link}>
      <View style={[centered, container]}>
        <View style={[positionAbsolute, styles.navBarWrapper]}>
          <LessonsNavBar />
        </View>
        <ArrowButtons />
        {isGamePaused ? <LessonCard exitLesson={exitLesson} /> : <></>}
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  btnSection: {
    width: '95%',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 'auto',
    right: 'auto',
    left: 'auto',
    bottom: 20,
  },
  arrBtnStyle: {
    height: 50,
    width: 50,
    borderRadius: 24,
    borderWidth: 3,
    backgroundColor: COLORS.accent,
    borderColor: COLORS.white,
  },
  navBarWrapper: {
    bottom: 'auto',
    top: 10,
    height: '20%',
  },
})

export default Illustration
