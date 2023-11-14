import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { BounceIn } from 'react-native-reanimated'
import Character from './Character'

const DisplayClothes = (props) => {
  const { handleFinishBtn, title, trivia } = props
  const {
    label,
    clotheOverlayWrapper,
    clotheCard,
    imgSection,
    clotheSection,
    clotheWrapper,
    btnSection,
    clotheTitleWrapper,
    titleStyle,
    clotheDescWrapper,
    clotheStyle,
    btnWrapper,
    clotheBtnTxt,
  } = styles
  const { positionAbsolute, centered } = globalStyles
  return (
    <View style={[positionAbsolute, centered, clotheOverlayWrapper]}>
      <Animated.View entering={BounceIn} style={clotheCard}>
        <View style={[centered, imgSection]}>
          <Character />
        </View>
        <View style={[centered, clotheSection]}>
          <View style={clotheWrapper}>
            <View style={[centered, clotheTitleWrapper]}>
              <Text style={titleStyle}>{title}</Text>
            </View>
            <View style={[centered, clotheDescWrapper]}>
              <Text style={clotheStyle}>{trivia}</Text>
            </View>
          </View>
          <View style={[centered, btnSection]}>
            <TouchableOpacity onPress={handleFinishBtn}>
              <View style={[centered, btnWrapper]}>
                <Text style={clotheBtnTxt}>Tapusin</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  clotheOverlayWrapper: {
    backgroundColor: COLORS.primaryTrans,
    height: WINDOW_HEIGHT,
    width: WINDOW_WIDTH,
  },
  clotheCard: {
    width: 600,
    height: 320,
    backgroundColor: COLORS.white,
    borderColor: COLORS.accent,
    borderWidth: 5,
    borderRadius: 10,
    flexDirection: 'row',
    padding: 5,
    marginRight: 80,
  },
  imgSection: {
    height: '100%',
    width: '40%',
  },
  clotheSection: {
    height: '100%',
    width: '60%',
  },
  imgStyle: {
    width: 260,
    height: 260,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: COLORS.accent,
  },
  clotheWrapper: {
    width: '100%',
    height: '80%',
    paddingVertical: 20,
    justifyContent: 'center',
  },

  btnSection: {
    width: '100%',
    height: '20%',
  },
  clotheTitleWrapper: {
    width: '100%',
  },
  titleStyle: {
    fontSize: 34,
    fontWeight: '400',
    fontFamily: 'Quiapo',
  },
  clotheDescWrapper: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },

  clotheStyle: {
    fontSize: 23,
    fontWeight: '400',
    fontFamily: 'QuiapoRegular',
  },
  btnWrapper: {
    backgroundColor: COLORS.accent,
    width: 120,
    paddingVertical: 10,
    borderRadius: 30,
  },
  clotheBtnTxt: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: 'Quiapo',
    fontWeight: '400',
  },
})

export default DisplayClothes
