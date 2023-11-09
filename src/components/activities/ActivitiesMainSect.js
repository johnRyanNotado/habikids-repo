import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
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
  ACTIVITIES_GOODHABITS,
  ACTIVITIES_VALUES,
  ACTIVITIES_TRADITIONS,
} from '../../constants/temp_db/activities/db_activity'
import RenderActivities from './RenderActivities'
import {
  useActivitiesContext,
  useChildSectionContext,
} from '../../screens/context-api/ContextAPI'
import Buttons from './Buttons'

const ActivitiesMainSect = () => {
  const { isOpen, setIsOpen } = useActivitiesContext()

  const { selectedYear, setSelectedYear, content } = useChildSectionContext()
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

  // Will get the corresponding components base on the value of the content useState
  const getCorresComp = () => {
    switch (content) {
      case BUTTONS:
        return <Buttons />
      case VALUES:
        return (
          <ScrollView style={[container]}>
            <RenderActivities data={ACTIVITIES_VALUES} />
          </ScrollView>
        )
      case TRADITIONS:
        return (
          <ScrollView style={[container]}>
            <RenderActivities data={ACTIVITIES_TRADITIONS} />
          </ScrollView>
        )
      case GOOD_HABITS:
        return (
          <ScrollView style={[container]}>
            <RenderActivities data={ACTIVITIES_GOODHABITS} />
          </ScrollView>
        )
      default:
        return <Text>Something went wrong</Text>
    }
  }

  // Will get the corresponding subtitle base on the value of the content useState
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

  // Will show the dropdown base on the value of the content useState
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
        <Text style={title}>Gawain</Text>
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
  },
  contentWrapper: {
    height: '80%',
    width: '100%',
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

export default ActivitiesMainSect
