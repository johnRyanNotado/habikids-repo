import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import {
  VALUES,
  TRADITIONS,
  GOOD_HABITS,
  BUTTONS,
} from '../../constants/contentClassification'
import { useLessonsContext } from '../../screens/context-api/ContextAPI'
import { getImg } from '../../utilities/getImg'
import { globalStyles } from '../../styles/GlobalStyles'

const VALUES_DIMENSTION = { h: 235, w: 77 }
const TRADITION_DIMENSTION = { h: 240, w: 79 }
const GOOD_HABITS_DIMENSTION = { h: 235, w: 150 }

const Buttons = () => {
  const { content, setContent } = useLessonsContext()
  const { btnWrapper, btnShadow, shadowWrapper } = styles
  const { centered } = globalStyles

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

  return (
    <View style={[centered, btnWrapper]}>
      <View
        style={[
          {
            flexDirection: 'row',
          },
        ]}
      >
        <TouchableOpacity
          enable={content === BUTTONS ? true : false}
          onPress={handleValBtn}
          style={[centered, { width: VALUES_DIMENSTION.w }]}
        >
          <Image
            source={getImg.components.bookValues.link}
            resizeMode="contain"
            style={{
              height: VALUES_DIMENSTION.h,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          enable={content === BUTTONS ? true : false}
          onPress={handleTradBtn}
          style={[centered, { width: TRADITION_DIMENSTION.w }]}
        >
          <Image
            source={getImg.components.bookTraditions.link}
            resizeMode="contain"
            style={{
              height: TRADITION_DIMENSTION.h,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          enable={content === BUTTONS ? true : false}
          onPress={handleGoodHanBtn}
          style={[
            centered,
            {
              width: GOOD_HABITS_DIMENSTION.w,
              borderBottomStartRadius: 1000,
            },
          ]}
        >
          <Image
            source={getImg.components.bookGoodHabits.link}
            resizeMode="contain"
            style={{
              height: GOOD_HABITS_DIMENSTION.h,
              zIndex: -5,
              borderBottomLeftRadius: 100,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={shadowWrapper}>
        <Image
          style={[btnShadow]}
          source={getImg.components.shadow.link}
          resizeMode="contain"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btnWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: '10%',
    width: 'auto',
    marginStart: 30,
    marginBottom: 20,
  },
  shadowWrapper: {
    position: 'absolute',
    left: 'auto',
    right: 'auto',
    bottom: 40,
    zIndex: -1,
  },
  btnShadow: {
    zIndex: -1,
    opacity: 0.2,
    height: 80,
    width: 400,
    transform: [{ scaleY: 0.7 }],
  },
})

export default Buttons
