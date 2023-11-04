import React, { useCallback } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import { getAni } from '../../../utilities/getAni'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'
import {
  ENTER_DELAY,
  ENTER_DURATION,
  EXIT_DURATION,
} from '../../../constants/narrConstants'

import { TouchableOpacity } from 'react-native-gesture-handler'
import Animated, {
  BounceIn,
  SlideInRight,
  SlideOutRight,
} from 'react-native-reanimated'
import { useCultPuzzContext } from '../../../screens/activities/cultural-puzzle/CultPuzzContext'

const Trivia = (props) => {
  const { PUZZLE_GAME_DATA, narrator } = useCultPuzzContext()
  const { theme, trivia, handleTriviaBtn } = props
  const {
    triviaOverlayWrapper,
    triviaCard,
    imgSection,
    triviaSection,
    imgStyle,
    triviaWrapper,
    btnSection,
    triviaTitleWrapper,
    titleStyle,
    triviaDescWrapper,
    triviaStyle,
    btnWrapper,
    triviaBtnTxt,
    narrStyle,
    narrWrapper,
  } = styles
  const { positionAbsolute, centered } = globalStyles
  const title = String(theme).toUpperCase()

  return (
    <View style={[positionAbsolute, centered, triviaOverlayWrapper]}>
      <Animated.View entering={BounceIn} style={triviaCard}>
        <View style={[centered, imgSection]}>
          <View>
            {/* In db_cultpuzz, the whole images are on fourths index, placed after the four individual pieces  */}
            <Image source={PUZZLE_GAME_DATA[`${theme}`][4]} style={imgStyle} />
          </View>
        </View>
        <View style={[centered, triviaSection]}>
          <View style={triviaWrapper}>
            <View style={[centered, triviaTitleWrapper]}>
              <Text style={titleStyle}>{`${title}`}</Text>
            </View>
            <View style={[centered, triviaDescWrapper]}>
              <Text style={triviaStyle}>{`${trivia}`}</Text>
            </View>
          </View>
          <View style={[centered, btnSection]}>
            <TouchableOpacity onPress={handleTriviaBtn}>
              <View style={[centered, btnWrapper]}>
                <Text style={triviaBtnTxt}>Tapusin</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  triviaOverlayWrapper: {
    backgroundColor: COLORS.primaryTrans,
    height: WINDOW_HEIGHT,
    width: WINDOW_WIDTH,
  },
  triviaCard: {
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
    width: '50%',
  },
  triviaSection: {
    height: '100%',
    width: '50%',
  },
  imgStyle: {
    width: 260,
    height: 260,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: COLORS.accent,
  },
  triviaWrapper: {
    width: '100%',
    height: '80%',
    paddingVertical: 20,
  },

  btnSection: {
    width: '100%',
    height: '20%',
  },
  triviaTitleWrapper: {
    width: '100%',
  },
  titleStyle: {
    fontSize: 34,
    fontWeight: '400',
    fontFamily: 'Quiapo',
  },
  triviaDescWrapper: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },

  triviaStyle: {
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
  triviaBtnTxt: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: 'Quiapo',
    fontWeight: '400',
  },
})

export default Trivia
