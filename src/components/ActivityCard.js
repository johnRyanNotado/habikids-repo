import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/GlobalStyles'
import COLORS from '../constants/colors'

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
    <View style={[container, centered, positionAbsolute, overlayWrapper]}>
      <View style={[centered, gameCard]}>
        <View style={[centered, scoreWrapper]}>
          <Text style={scoreLabel}>Score</Text>
          <Text style={scoreTxt}>{score}</Text>
        </View>
        <View style={[centered, btnSection]}>
          <TouchableOpacity onPress={handleCancelBtn}>
            <View style={[centered, goBackBtnWrapper]}>
              <Text style={startTxt}>Cancel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleStartBtn}>
            <View style={[centered, startBtnWrapper]}>
              <Text style={startTxt}>Start</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  gameCard: {
    width: 300,
    height: 220,
    backgroundColor: COLORS.white,
    borderColor: COLORS.accent,
    borderWidth: 2,
    borderRadius: 10,
  },
  overlayWrapper: {
    backgroundColor: COLORS.whiteTrans,
    zIndex: 10,
  },
  startBtnWrapper: {
    backgroundColor: COLORS.accent,
    width: 120,
    paddingVertical: 10,
    borderRadius: 30,
  },
  goBackBtnWrapper: {
    backgroundColor: COLORS.grayPrimary,
    width: 120,
    paddingVertical: 10,
    borderRadius: 30,
  },
  startTxt: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
  },
  scoreWrapper: {
    paddingBottom: 30,
  },
  scoreTxt: {
    color: COLORS.accent,
    fontSize: 50,
    fontWeight: '700',
  },
  scoreLabel: {
    color: COLORS.accent,
    fontSize: 16,
    opacity: 0.5,
  },
  btnSection: {
    gap: 15,
    flexDirection: 'row',
  },
})

export default ActivityCard
