import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import {
  VALUES,
  TRADITIONS,
  GOOD_HABITS,
  BUTTONS,
} from '../../constants/contentClassification'
import { useChildSectionContext } from '../../screens/context-api/ContextAPI'
import { getImg } from '../../utilities/getImg'
import { globalStyles } from '../../styles/GlobalStyles'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../constants/windowConstants'

const VALUES_DIMENSION = {
  h: 235,
  w: 77,
  h: WINDOW_HEIGHT * 0.57,
  w: WINDOW_HEIGHT * 0.2,
}
const TRADITION_DIMENSION = {
  h: 240,
  w: 79,
  h: WINDOW_HEIGHT * 0.59,
  w: WINDOW_HEIGHT * 0.18,
}
const GOOD_HABITS_DIMENSION = {
  h: 235,
  w: 150,
  h: WINDOW_HEIGHT * 0.6,
  w: WINDOW_HEIGHT * 0.38,
}

const Buttons = () => {
  const { content, setContent } = useChildSectionContext()
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
            zIndex: 1,
          },
        ]}
      >
        <TouchableOpacity
          enable={content === BUTTONS ? true : false}
          onPress={handleValBtn}
          style={[centered, { width: VALUES_DIMENSION.w }]}
        >
          <Image
            source={getImg.components.bookValues.link}
            resizeMode="contain"
            style={{
              height: VALUES_DIMENSION.h,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          enable={content === BUTTONS ? true : false}
          onPress={handleTradBtn}
          style={[centered, { width: TRADITION_DIMENSION.w }]}
        >
          <Image
            source={getImg.components.bookTraditions.link}
            resizeMode="contain"
            style={{
              height: TRADITION_DIMENSION.h,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          enable={content === BUTTONS ? true : false}
          onPress={handleGoodHanBtn}
          style={[
            centered,
            {
              width: GOOD_HABITS_DIMENSION.w,
              borderBottomStartRadius: 1000,
            },
          ]}
        >
          <Image
            source={getImg.components.bookGoodHabits.link}
            resizeMode="contain"
            style={{
              height: GOOD_HABITS_DIMENSION.h,
              zIndex: -5,
              borderBottomLeftRadius: 100,
              width: GOOD_HABITS_DIMENSION.w,
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
    bottom: WINDOW_HEIGHT * 0.1,
    zIndex: 0,
  },
  btnShadow: {
    zIndex: -1,
    opacity: 0.2,
    height: WINDOW_HEIGHT * 0.2,
    width: WINDOW_WIDTH,
    transform: [{ scaleY: 0.7 }],
  },
})

export default Buttons
