import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import {
  VALUES,
  TRADITIONS,
  GOOD_HABITS,
  BUTTONS,
} from '../../constants/contentClassification'
import DropDownPicker from 'react-native-dropdown-picker'
import { YEAR_LEVELS } from '../../constants/dropDownItems'
import {
  useChildSectionContext,
  useLessonsContext,
} from '../../screens/context-api/ContextAPI'
import Buttons from './Buttons'
import RenderLessons from './RenderLessons'
import {
  LESSONS_GOODHABITS,
  LESSONS_TRADITIONS,
  LESSONS_VALUES,
} from '../../constants/temp_db/lessons/db_lessons'

const LessonsMainSect = () => {
  const { isOpen, setIsOpen } = useLessonsContext()
  const { content, selectedYear, setSelectedYear } = useChildSectionContext()
  const {
    custContainer,
    contentWrapper,
    titleWrapper,
    title,
    subTitleWrapper,
    subTitle,
    subTitleBg,
    dropDownWrapper,
    dropDownContainerStyle,
    dropDownBg,
  } = styles
  const { container, centered, positionAbsolute } = globalStyles

  const getCorresComp = () => {
    switch (content) {
      case BUTTONS:
        return null
      case VALUES:
        return (
          <ScrollView style={[container, positionAbsolute]}>
            <RenderLessons data={LESSONS_VALUES} />
          </ScrollView>
        )
      case TRADITIONS:
        return (
          <ScrollView style={[container, positionAbsolute]}>
            <RenderLessons data={LESSONS_TRADITIONS} />
          </ScrollView>
        )
      case GOOD_HABITS:
        return (
          <ScrollView style={[container, positionAbsolute]}>
            <RenderLessons data={LESSONS_GOODHABITS} />
          </ScrollView>
        )
      default:
        return <Text>Something went wrong</Text>
    }
  }

  const getSubTitle = () => {
    switch (content) {
      case BUTTONS:
        return <></>
      case VALUES:
        return (
          <View style={subTitleBg}>
            <Text style={subTitle}>PRINSIPYO</Text>
          </View>
        )
      case TRADITIONS:
        return (
          <View style={subTitleBg}>
            <Text style={subTitle}>TRADISYON</Text>
          </View>
        )
      case GOOD_HABITS:
        return (
          <View style={subTitleBg}>
            <Text style={subTitle}>MABUBUTING GAWI</Text>
          </View>
        )
      default:
        return <Text>Something went wrong</Text>
    }
  }

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

  return (
    <View style={[container, centered, custContainer]}>
      <View style={[centered, titleWrapper]}>
        <Text style={title}>Aralin</Text>
      </View>

      <View style={[centered, subTitleWrapper]}>{getSubTitle()}</View>

      <View style={[positionAbsolute, dropDownWrapper]}>{getDropDown()}</View>

      <View style={contentWrapper}>
        <Buttons />
        {getCorresComp()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  custContainer: {
    paddingBottom: 20,
    height: '100%',
    width: '100%',
  },
  contentWrapper: {
    height: '80%',
    width: '100%',
  },
  txtStyle: {
    fontFamily: 'QuiapoRegular',
    fontSize: 30,
    color: COLORS.accent,
  },
  titleWrapper: {
    width: 200,
    height: 50,
    marginTop: -20,
    backgroundColor: COLORS.whiteTrans,
    borderRadius: 20,
  },
  title: {
    fontFamily: 'Quiapo',
    fontSize: 48,
    zIndex: 10,
  },
  subTitleWrapper: {
    width: 120,
    height: 25,
    marginVertical: 10,
    zIndex: 10,
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
    width: 140,
    height: 35,
    right: 10,
    top: 15,
    left: 'auto',
    zIndex: 10,
  },
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
})

export default LessonsMainSect
