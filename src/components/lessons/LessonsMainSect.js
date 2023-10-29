import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import Button from '../Button'
import COLORS from '../../constants/colors'
import {
  VALUES,
  TRADITIONS,
  GOOD_HABITS,
  BUTTONS,
} from '../../constants/contentClassification'
import { useLessonsContext } from '../../screens/registered-user-screens/child-section/Lessons'
import Values from './Values'
import Traditions from './Traditions'
import GoodHabits from './GoodHabits'
import DropDownPicker from 'react-native-dropdown-picker'
import { YEAR_LEVELS } from '../../constants/dropDownItems'

const LessonsMainSect = () => {
  const {
    content,
    setContent,
    isOpen,
    setIsOpen,
    selectedYear,
    setSelectedYear,
  } = useLessonsContext()
  const {
    custContainer,
    contentWrapper,
    btnWrapper,
    txtStyle,
    btnStyle,
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

  // Will set the content of the main section to values lessons
  const handleValBtn = () => {
    setContent(VALUES)
  }

  // Will set the content of the main section to traditions lessons
  const handleTradBtn = () => {
    setContent(TRADITIONS)
  }

  // Will set the content of the main section to good habits lessons
  const handleGoodHanBtn = () => {
    setContent(GOOD_HABITS)
  }

  const ButtonComp = (
    <View style={[centered, container, btnWrapper]}>
      <Button
        label={'Values'}
        onPress={handleValBtn}
        txtStyle={txtStyle}
        btnStyle={btnStyle}
      />
      <Button
        label={'Traditions'}
        onPress={handleTradBtn}
        txtStyle={txtStyle}
        btnStyle={btnStyle}
      />
      <Button
        label={'Good Habits'}
        onPress={handleGoodHanBtn}
        txtStyle={txtStyle}
        btnStyle={btnStyle}
      />
    </View>
  )

  const getCorresComp = () => {
    switch (content) {
      case BUTTONS:
        return ButtonComp
      case VALUES:
        return (
          <ScrollView style={[container]}>
            <Values />
          </ScrollView>
        )
      case TRADITIONS:
        return (
          <ScrollView style={[container]}>
            <Traditions />
          </ScrollView>
        )
      case GOOD_HABITS:
        return (
          <ScrollView style={[container]}>
            <GoodHabits />
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
      case TRADITIONS:
      case GOOD_HABITS:
        return (
          <View style={subTitleBg}>
            <Text style={subTitle}>{content}</Text>
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
        <Text style={title}>Lessons</Text>
      </View>
      <View style={[centered, subTitleWrapper]}>{getSubTitle()}</View>

      <View style={[positionAbsolute, dropDownWrapper]}>{getDropDown()}</View>

      <View style={contentWrapper}>{getCorresComp()}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  custContainer: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  contentWrapper: {
    height: '80%',
    width: '100%',
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: '10%',
  },
  btnStyle: {
    height: 50,
    width: 200,
    borderColor: COLORS.white,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
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
  },
  subTitle: {
    fontFamily: 'QuiapoRegular',
    fontSize: 20,
    zIndex: 10,
    letterSpacing: 1,
  },
  subTitleBg: {
    width: 120,
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
    top: 25,
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
