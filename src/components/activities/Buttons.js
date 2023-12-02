import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import Button from '../Button'
import {
  useActivitiesContext,
  useChildSectionContext,
} from '../../screens/context-api/ContextAPI'
import { globalStyles } from '../../styles/GlobalStyles'
import {
  VALUES,
  TRADITIONS,
  GOOD_HABITS,
} from '../../constants/contentClassification'
import COLORS from '../../constants/colors'
import ValuesSvg from '../../svg/activities/buttons/ValuesSvg'
import { getImg } from '../../utilities/getImg'
import { CENTER_X } from '../../constants/puzzleConstants'
import { WINDOW_WIDTH } from '../../constants/windowConstants'

const VALUES_DIMENSIONS = { w: WINDOW_WIDTH * 0.18, h: WINDOW_WIDTH * 0.1 }
const TRADITIONS_DIMENSIONS = {
  w: WINDOW_WIDTH * 0.18,
  h: WINDOW_WIDTH * 0.103,
}
const GOOD_HABITS_DIMENSIONS = {
  w: WINDOW_WIDTH * 0.18,
  h: WINDOW_WIDTH * 0.108,
}

const Buttons = () => {
  const { setContent } = useChildSectionContext()
  const { btnWrapper, txtStyle, btnStyle } = styles
  const { container, centered } = globalStyles

  // Will set the content of the main section to values activities
  const handleValBtn = () => {
    setContent(VALUES)
  }

  // Will set the content of the main section to traditions activities
  const handleTradBtn = () => {
    setContent(TRADITIONS)
  }

  // Will set the content of the main section to good habits activities
  const handleGoodHabitBtn = () => {
    setContent(GOOD_HABITS)
  }
  return (
    <View style={[centered, container, btnWrapper]}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: CENTER_X - WINDOW_WIDTH * 0.07,
        }}
      >
        <TouchableOpacity onPress={handleValBtn}>
          <View style={{ elavation: 5 }}>
            <Image
              source={getImg.components.cardValues.link}
              style={{
                width: 150,
                height: 90,
                width: VALUES_DIMENSIONS.w,
                height: VALUES_DIMENSIONS.h,
              }}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: CENTER_X - WINDOW_WIDTH * 0.25,
        }}
      >
        <TouchableOpacity onPress={handleTradBtn}>
          <View style={{ elavation: 5 }}>
            <Image
              source={getImg.components.cardTraditions.link}
              style={{
                width: 150,
                height: 90,
                width: TRADITIONS_DIMENSIONS.w,
                height: TRADITIONS_DIMENSIONS.h,
              }}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{ position: 'absolute', right: CENTER_X - WINDOW_WIDTH * 0.17 }}
      >
        <TouchableOpacity onPress={handleGoodHabitBtn}>
          <View style={{ elavation: 5 }}>
            <Image
              source={getImg.components.cardGoodHabits.link}
              style={{
                width: 160,
                height: 90,
                width: GOOD_HABITS_DIMENSIONS.w,
                height: GOOD_HABITS_DIMENSIONS.h,
              }}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
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
})

export default Buttons
