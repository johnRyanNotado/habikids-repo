import React from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import { getImg } from '../../utilities/getImg'
import ChildSectNavBar from '../../components/home-child/ChildSectNavBar'
import BackBtn from '../../components/BackBtn'
import ProfileCard from '../../components/home-child/ProfileCard'
import {
  useAppContext,
  useChildSectionContext,
} from '../context-api/ContextAPI'
import LessonsCard from '../../components/lessons/LessonsCard'
import COLORS from '../../constants/colors'
import { useSpecificLessonContext } from './LessonsContext'
import LoadingScreen from '../LoadingScreen'
import ErrorScreen from '../ErrorScreen'

const LessonsCA = ({ navigation }) => {
  const { isProfileClicked } = useChildSectionContext()
  const { isLoading, isError } = useAppContext()
  const { setItem, setIsFinished, setScriptNum, title, lesNum } =
    useSpecificLessonContext()
  const { container, positionAbsolute, centered } = globalStyles
  const handleCancelBtn = () => {
    navigation.goBack()
  }
  const handleStartBtn = () => {
    setItem(1)
    setIsFinished(false)
    setScriptNum(0)
    navigation.navigate('Lesson')
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  if (isError) {
    return <ErrorScreen />
  }

  return (
    <ImageBackground style={container} source={getImg.bg.emptyBg.link}>
      <View style={[globalStyles.container, globalStyles.centered]}>
        <View
          style={[positionAbsolute, centered, { zIndex: 1, height: '20%' }]}
        >
          <ChildSectNavBar backBtn={<BackBtn onPress={handleCancelBtn} />} />
        </View>
        <LessonsCard
          title={title}
          lesNum={lesNum}
          handleStartBtn={handleStartBtn}
          handleCancelBtn={handleCancelBtn}
        />
        {isProfileClicked ? <ProfileCard /> : null}
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  custContainer: {
    marginHorizontal: 10,
  },
  bg: {
    opacity: 0,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.greenSecond,
  },
  card: {
    height: 210,
    width: 230,
    minHeight: 200,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: COLORS.accent,
    marginHorizontal: 5,
    backgroundColor: COLORS.primaryTrans,
  },
  imgWrapper: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    width: '90%',
    height: '60%',
    marginBottom: '5%',
    marginTop: '2%',
    borderColor: COLORS.accent,
    borderWidth: 2,
  },
  titleWrapper: {
    backgroundColor: COLORS.greenSecond,
    width: '90%',
    height: '30%',
    marginBottom: '3%',
    borderRadius: 20,
    paddingHorizontal: 5,
    borderColor: COLORS.accent,
    borderWidth: 2,
  },
  imgStyle: {
    borderRadius: 18,
    height: '100%',
    width: '100%',
  },
  titleStyle: {
    fontFamily: 'QuiapoRegular',
    fontSize: 20,
    letterSpacing: 1,
    color: COLORS.accent,
  },
})

export default LessonsCA
