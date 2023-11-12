import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import Animated, { SlideInUp, SlideOutUp } from 'react-native-reanimated'
import { useChildSectionContext } from '../../screens/context-api/ContextAPI'

const LessonsCard = (props) => {
  const { content } = useChildSectionContext()
  const { title, handleStartBtn, handleCancelBtn, lesNum } = props
  const { container, centered, positionAbsolute } = globalStyles
  const {
    gameCard,
    overlayWrapper,
    startBtnWrapper,
    titleWrapper,
    startTxt,
    titleTxt,
    titleLabel,
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
        <View style={[centered, titleWrapper]}>
          <Text style={titleLabel}>{`${content} #${lesNum}`}</Text>
          <Text style={titleTxt}>{title}</Text>
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
  titleWrapper: {
    paddingBottom: 20,
    gap: 10,
    paddingHorizontal: 40,
  },
  titleTxt: {
    color: COLORS.accent,
    fontSize: 30,
    fontFamily: 'QuiapoRegular',
    fontWeight: '400',
    textAlign: 'center',
  },
  titleLabel: {
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

export default LessonsCard
