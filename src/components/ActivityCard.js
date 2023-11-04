import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/GlobalStyles'
import COLORS from '../constants/colors'
import Animated, { SlideInUp, SlideOutUp } from 'react-native-reanimated'

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
      entering={SlideInUp.duration(1000).delay(2000)}
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
    width: 350,
    height: 200,
    backgroundColor: COLORS.white,
    borderColor: COLORS.accent,
    borderWidth: 5,
    borderRadius: 10,
  },
  overlayWrapper: {},
  startBtnWrapper: {
    backgroundColor: COLORS.primary,
    width: 140,
    paddingVertical: 10,
    borderRadius: 30,
  },
  goBackBtnWrapper: {
    backgroundColor: COLORS.grayPrimary,
    width: 140,
    paddingVertical: 10,
    borderRadius: 30,
  },
  startTxt: {
    color: COLORS.white,
    fontSize: 25,
    fontFamily: 'QuiapoRegular',
  },
  scoreWrapper: {
    paddingBottom: 30,
  },
  scoreTxt: {
    color: COLORS.accent,
    fontSize: 60,
    fontFamily: 'Quiapo',
    fontWeight: '400',
  },
  scoreLabel: {
    color: COLORS.accent,
    fontFamily: 'QuiapoRegular',
    fontSize: 20,
    opacity: 0.5,
  },
  btnSection: {
    gap: 30,
    flexDirection: 'row',
  },
})

export default ActivityCard
