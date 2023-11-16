import React, { useEffect } from 'react'
import { ImageBackground, View, StyleSheet } from 'react-native'
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
import Narrator from '../../components/activities/Narrator'
import Instruction from '../../components/lessons/lessons-illustration/Instruction'
import MultipleChoice from '../../components/activities/multiple-choice/MultipleChoice'
import MultilplePicture from '../../components/activities/multiple-choices-pic/MultilplePicture'
import ConnectTheDots from '../../components/activities/connect-the-dots/ConnectTheDots'

const Lesson = ({ navigation }) => {
  const { centered, container, positionAbsolute } = globalStyles
  const {
    isGamePaused,
    setIsLeftShown,
    setIsRightShown,
    isCheckBtnShown,
    setIsCheckBtnShown,
    setIsDisabled,
  } = useChildSectionContext()
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
    narrator,
    setNarrator,
    isNarrating,
    setIsNarrating,
    isActFin,
    setIsActFin,
    instruction,
    setInstruction,
    selected,
    setSelected,
    activity,
    setActivity,
    FALSE_AGAIN,
  } = useSpecificLessonContext()

  // for managing the components shown
  useEffect(() => {
    if (lessonData) {
      timer.value = lessonData.item[item - 1].data[scriptNum].narrationDuration

      // set a delay for before showing the script, instruction, and narrator
      setScriptComp(null)
      setNarrator(null)
      setInstruction(null)
      setActivity(null)
      console.log('\n\n', lessonData.item[item - 1].data[scriptNum], '\n\n')

      const narratorTimout = setTimeout(() => {
        if (lessonData.item[item - 1].data[scriptNum].isNarratorShown) {
          setNarrator(
            <Narrator
              narrator={lessonData.item[item - 1].data[scriptNum].narrator}
              custImgStyle={{ height: 200, width: 200 }}
              custDuration={1000}
              custDelay={1000}
              isBackgroundShown={true}
            />
          )
        }

        clearTimeout(narratorTimout)
      }, 500)

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
      } else {
        const instructionTimeout = setTimeout(() => {
          setInstruction(
            <Instruction
              top={lessonData.item[item - 1].data[scriptNum].style.top}
              bottom={lessonData.item[item - 1].data[scriptNum].style.bottom}
              right={lessonData.item[item - 1].data[scriptNum].style.right}
              left={lessonData.item[item - 1].data[scriptNum].style.left}
              width={lessonData.item[item - 1].data[scriptNum].style.width}
              script={
                lessonData
                  ? lessonData.item[item - 1].data[scriptNum].instruction
                  : null
              }
              narrationDuration={
                lessonData.item[item - 1].data[scriptNum].narrationDuration
              }
              instructTemp={
                lessonData.item[item - 1].data[scriptNum].activityType === 3
                  ? true
                  : false
              }
            />
          )
          clearTimeout(instructionTimeout)
        }, 500)
      }

      if (!lessonData || lessonData.item[item - 1].type === 'activity') {
        const actTimeout = setTimeout(() => {
          if (lessonData.item[item - 1].data[scriptNum].activityType === 1) {
            setActivity(
              <MultipleChoice
                choices={lessonData.item[item - 1].data[scriptNum].choices}
              />
            )
          } else if (
            lessonData.item[item - 1].data[scriptNum].activityType === 2
          ) {
            setActivity(
              <MultilplePicture
                choices={lessonData.item[item - 1].data[scriptNum].choices}
              />
            )
          } else if (
            lessonData.item[item - 1].data[scriptNum].activityType === 3
          ) {
            setActivity(
              <ConnectTheDots
                data={lessonData.item[item - 1].data[scriptNum].data}
              />
            )
          }

          clearTimeout(actTimeout)
        }, 500)
      }
    }
  }, [item, scriptNum])

  // for managing the arrow btns
  useEffect(() => {
    if (lessonData) {
      if (lessonData.item[item - 1].type === 'activity') {
        setIsRightShown(false)
        setIsCheckBtnShown(true)
        setIsDisabled(true)
        if (isActFin === true || isActFin === FALSE_AGAIN) {
          setIsDisabled(false)
        }
      } else {
        if (isCheckBtnShown) {
          setIsCheckBtnShown(false)
          setIsDisabled(true)
        }

        // do not show right arr btn if its the last item or is narrating
        if (
          (lessonData.item.length <= item &&
            lessonData.item[item - 1].data.length <= scriptNum + 1) ||
          isNarrating
        ) {
          setIsRightShown(false)
        } else {
          setIsRightShown(true)
          setIsFinished(false)
        }
      }
      // do not show left btn if...
      if (
        lessonData.item[item - 1].data.length > 1 && // if the scripts length is greater than 1
        scriptNum <= 0 && // and the first script
        item <= 1 // and if its the first item
      ) {
        setIsLeftShown(false)
      } else {
        setIsLeftShown(true)
      }
    }
  }, [item, scriptNum, isNarrating, isActFin])

  // for setting the timer for narrating
  useEffect(() => {
    let narrInterval
    if (lessonData) {
      if (timer.value > 0) {
        setIsNarrating(true)
      }
      narrInterval = setInterval(() => {
        if (lessonData.item[item - 1].data[scriptNum]) {
          timer.value--
          console.log('Timer: ', timer.value, '\tisNarrating: ', isNarrating)
          if (timer.value <= 0) {
            console.log('Narration done.\n\n')
            setIsNarrating(false)
            clearInterval(narrInterval)
            if (
              lessonData.item.length <= item &&
              lessonData.item[item - 1].data.length <= scriptNum + 1
            ) {
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
      if (scriptNum) {
        setScriptNum((prevState) => prevState - 1)
      } else if (1 < item) {
        setItem((prevState) => prevState - 1)
      }
      if (isActFin === true || selected) {
        setSelected(null)
        setIsActFin(false)
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
        if (isActFin === true || selected) {
          setSelected(null)
          setIsActFin(false)
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
        style={{ width: '77%' }}
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
          <LessonsNavBar backgroundColor={COLORS.grayPrimary} />
        </View>
        <View
          style={[
            container,
            centered,
            {
              width: WINDOW_WIDTH,
              height: WINDOW_HEIGHT,
              zIndex: -1,
              backgroundColor:
                lessonData.item[item - 1].type !== 'activity'
                  ? COLORS.white
                  : null,
            },
          ]}
        >
          {getLesImg()}
          {activity}
          {scriptComp}
          {instruction}
          {narrator}
        </View>
        <ArrowButtons
          handleLeftBtn={handleLeftBtn}
          handleRightBtn={handleRightBtn}
          handleFinishedBtn={handleFinishedBtn}
          isFinished={isFinished}
          isActFin={isActFin}
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
  },
})

export default Lesson
