import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/GlobalStyles'
import COLORS from '../constants/colors'
import Animated, { SlideInUp, SlideOutUp } from 'react-native-reanimated'
import { WINDOW_WIDTH } from '../constants/windowConstants'

const ActivityCard = (props) => {
  const { score, handleStartBtn, handleCancelBtn } = props
  const { container, centered, positionAbsolute } = globalStyles
  const {
    gameCard,
    overlayWrapper,
    startBtnWrapper,
    scoreWrapper,
    startTxt,
    scoreTxt,
    scoreLabel,
    goBackBtnWrapper,
    btnSection,
  } = styles
  return (
    <Animated.View
      style={[container, centered, positionAbsolute, overlayWrapper]}
      entering={SlideInUp.duration(1000).delay(1000)}
      exiting={SlideOutUp.duration(1000)}
    >
      <View style={[centered, gameCard]}>
        <View style={[centered, scoreWrapper]}>
          <Text style={scoreLabel}>Puntos</Text>
          <Text style={scoreTxt}>{score}</Text>
        </View>
        <View style={[centered, btnSection]}>
          <TouchableOpacity onPress={handleCancelBtn}>
            <View style={[centered, goBackBtnWrapper]}>
              <Text style={startTxt}>Bumalik</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleStartBtn}>
            <View style={[centered, startBtnWrapper]}>
              <Text style={startTxt}>Magsimula</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  gameCard: {
    width: 370,
    height: 220,
    width: WINDOW_WIDTH * 0.43,
    height: WINDOW_WIDTH * 0.25,
    backgroundColor: COLORS.white,
    borderColor: COLORS.accent,
    borderWidth: 5,
    borderRadius: 10,
    zIndex: 14,
  },
  overlayWrapper: {},
  startBtnWrapper: {
    backgroundColor: COLORS.primary,
    width: 140,
    width: WINDOW_WIDTH * 0.16,
    paddingVertical: 10,
    paddingVertical: WINDOW_WIDTH * 0.012,
    borderRadius: 100,
  },
  goBackBtnWrapper: {
    backgroundColor: COLORS.grayPrimary,
    width: 140,
    width: WINDOW_WIDTH * 0.16,
    paddingVertical: 10,
    paddingVertical: WINDOW_WIDTH * 0.012,
    borderRadius: 100,
  },
  startTxt: {
    color: COLORS.white,
    fontSize: 25,
    fontSize: WINDOW_WIDTH * 0.03,
    fontFamily: 'QuiapoRegular',
  },
  scoreWrapper: {
    paddingBottom: 30,
  },
  scoreTxt: {
    color: COLORS.accent,
    fontSize: 60,
    fontSize: WINDOW_WIDTH * 0.07,
    fontFamily: 'Quiapo',
    fontWeight: '400',
  },
  scoreLabel: {
    color: COLORS.accent,
    fontFamily: 'QuiapoRegular',
    fontSize: 20,
    fontSize: WINDOW_WIDTH * 0.025,
    opacity: 0.5,
  },
  btnSection: {
    gap: 30,
    gap: WINDOW_WIDTH * 0.03,

    flexDirection: 'row',
  },
})

export default ActivityCard
