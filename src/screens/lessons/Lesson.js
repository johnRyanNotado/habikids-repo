import React, { useEffect } from 'react'
import { ImageBackground, View, StyleSheet, Text } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import { getImg } from '../../utilities/getImg'
import COLORS from '../../constants/colors'
import ArrowButtons from '../../components/lessons/lessons-illustration/ArrowButtons'
import LessonsNavBar from '../../components/lessons/lessons-illustration/LessonsNavBar'
import { useChildSectionContext } from '../context-api/ContextAPI'
import LessonCard from '../../components/lessons/lessons-illustration/LessonCard'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../constants/windowConstants'
import Animated, { ZoomIn } from 'react-native-reanimated'
import { useSpecificLessonContext } from './LessonsContext'
import Script from '../../components/lessons/lessons-illustration/Script'

const Lesson = ({ navigation }) => {
  const { centered, container, positionAbsolute } = globalStyles
  const { isGamePaused, setIsLeftShown, setIsRightShown } =
    useChildSectionContext()
  const {
    item,
    setItem,
    lessonData,
    timer,
    setIsFinished,
    scriptNum,
    setScriptNum,
    scriptComp,
    setScriptComp,
    isFinished,
  } = useSpecificLessonContext()
  console.log('\n\nCalled: Lesson')
  console.log('Lesson from Lesson: ', lessonData, '\n\n')

  useEffect(() => {
    if (lessonData) {
      if (lessonData.item[item - 1].type != 'activity') {
        timer.value =
          lessonData.item[item - 1].data[scriptNum].narrationDuration
      }
      // check if its the last item
      console.log('Item: ', item, '\tLesson Length: ', lessonData.item.length)
      if (lessonData.item.length <= item) {
        setIsRightShown(false)
      } else {
        setIsRightShown(true)
      }

      if (1 >= item) {
        setIsLeftShown(false)
      } else {
        setIsLeftShown(true)
      }

      // set a delay for the script
      setScriptComp(null)

      if (lessonData.item[item - 1].type !== 'activity') {
        const scriptTimeout = setTimeout(() => {
          setScriptComp(
            <Script
              top={lessonData.item[item - 1].data[scriptNum].style.top}
              bottom={lessonData.item[item - 1].data[scriptNum].style.bottom}
              right={lessonData.item[item - 1].data[scriptNum].style.right}
              left={lessonData.item[item - 1].data[scriptNum].style.left}
              width={lessonData.item[item - 1].data[scriptNum].style.width}
              script={
                lessonData
                  ? lessonData.item[item - 1].data[scriptNum].script
                  : null
              }
            />
          )
          clearTimeout(scriptTimeout)
        }, 500)
      }
    }
  }, [item, scriptNum])

  useEffect(() => {
    let narrInterval
    if (lessonData) {
      narrInterval = setInterval(() => {
        if (lessonData.item[item - 1].data[scriptNum]) {
          timer.value--
          console.log('Timer: ', timer.value)
          if (timer.value <= 0) {
            console.log('Narration done.\n\n')
            clearInterval(narrInterval)
            if (lessonData.item.length <= item) {
              setIsFinished(true)
              console.log('Tapos na haha')
            }
          }
        }
      }, 1000)
    }
    return () => clearInterval(narrInterval)
  })

  const exitLesson = () => {
    navigation.goBack()
  }

  const handleLeftBtn = () => {
    if (lessonData) {
      if (1 < item) {
        setItem((prevState) => prevState - 1)
      }
      if (scriptNum) {
        setScriptNum(0)
      }
    }
  }

  const handleRightBtn = () => {
    if (lessonData) {
      if (
        lessonData.item[item - 1].data.length > 1 &&
        scriptNum < lessonData.item[item - 1].data.length - 1
      ) {
        setScriptNum((prevState) => prevState + 1)
      } else {
        if (lessonData.item.length > item) {
          setItem((prevState) => prevState + 1)
        }
        if (scriptNum) {
          setScriptNum(0)
        }
      }
    }
  }

  const getLesImg = () => {
    if (!lessonData || lessonData.item[item - 1].type === 'activity') {
      return null
    }
    return (
      <Animated.Image
        source={lessonData ? lessonData.item[item - 1].img : null}
        style={{ width: '100%', height: '100%' }}
        resizeMode="contain"
        entering={ZoomIn.delay(500).duration(1000)}
      />
    )
  }

  const handleFinishedBtn = () => {
    navigation.goBack()
    navigation.goBack()
  }

  return (
    <ImageBackground style={container} source={getImg.bg.emptyBg.link}>
      <View style={[centered, container]}>
        <View style={[positionAbsolute, styles.navBarWrapper]}>
          <LessonsNavBar />
        </View>
        <View
          style={[
            container,
            centered,
            {
              width: WINDOW_WIDTH,
              height: WINDOW_HEIGHT,
              zIndex: -1,
            },
          ]}
        >
          {getLesImg()}
          {scriptComp}
        </View>
        <ArrowButtons
          handleLeftBtn={handleLeftBtn}
          handleRightBtn={handleRightBtn}
          handleFinishedBtn={handleFinishedBtn}
          isFinished={isFinished}
        />
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

export default Lesson
