import React from 'react'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import { AntDesign } from '@expo/vector-icons'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Vibration,
} from 'react-native'
import { useChildSectionContext } from '../../../screens/context-api/ContextAPI'
import { Feather } from '@expo/vector-icons'
import Animated, { SlideInRight, SlideOutRight } from 'react-native-reanimated'
import {
  ENTER_DELAY,
  ENTER_DURATION,
  EXIT_DURATION,
} from '../../../constants/narrConstants'

const ArrowButtons = (props) => {
  const {
    handleLeftBtn,
    handleRightBtn,
    isFinished,
    handleFinishedBtn,
    isActFin,
  } = props
  const { isLeftShown, isRightShown, isCheckBtnShown, isDisabled } =
    useChildSectionContext()
  const {
    btnSection,
    arrBtnStyle,
    btnSectionElement,
    finishBtnStyle,
    finishBtnTxt,
    checkBtnWrapper,
    checkBtnBox,
  } = styles
  const { centered, positionAbsolute } = globalStyles

  const wrongAnswer = () => {
    Vibration.vibrate(1000)
  }
  return (
    <View style={[positionAbsolute, btnSection]}>
      {isLeftShown ? (
        <View style={[centered, btnSectionElement]}>
          <TouchableOpacity onPress={handleLeftBtn}>
            <View style={[centered, arrBtnStyle]}>
              <AntDesign name="left" size={25} color={COLORS.grayPrimary} />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
      {isCheckBtnShown ? (
        <Animated.View
          style={checkBtnWrapper}
          entering={SlideInRight.duration(ENTER_DURATION).delay(ENTER_DELAY)}
          exiting={SlideOutRight.duration(EXIT_DURATION)}
        >
          <TouchableOpacity
            onPress={isActFin === true ? handleRightBtn : wrongAnswer}
            disabled={isDisabled}
          >
            <View
              style={[
                centered,
                checkBtnBox,
                {
                  backgroundColor: isDisabled
                    ? COLORS.grayPrimary
                    : COLORS.greenPrimary,
                },
              ]}
            >
              <Feather name="check" size={40} color={COLORS.white} />
            </View>
          </TouchableOpacity>
        </Animated.View>
      ) : isRightShown ? (
        <View style={[centered, btnSectionElement]}>
          <TouchableOpacity onPress={handleRightBtn}>
            <View style={[centered, arrBtnStyle]}>
              <AntDesign name="right" size={25} color={COLORS.grayPrimary} />
            </View>
          </TouchableOpacity>
        </View>
      ) : isFinished ? (
        <View style={[centered, btnSectionElement]}>
          <TouchableOpacity onPress={handleFinishedBtn}>
            <View style={[centered, finishBtnStyle]}>
              <Text style={finishBtnTxt}>{`Tapusin >`}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  btnSection: {
    width: '100%',
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 'auto',
    right: 'auto',
    left: 'auto',
  },
  arrBtnStyle: {
    height: 50,
    width: 50,
    borderRadius: 24,
    borderWidth: 3,
    backgroundColor: COLORS.blueFifth,
    borderColor: COLORS.grayPrimary,
  },
  btnSectionElement: {
    width: '13%',
  },
  finishBtnStyle: {
    backgroundColor: COLORS.blueFifth,
    width: 120,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: COLORS.grayPrimary,
    marginRight: 40,
  },
  finishBtnTxt: {
    color: COLORS.grayPrimary,
    fontSize: 20,
    fontFamily: 'Quiapo',
    fontWeight: '400',
  },
  checkBtnWrapper: {
    position: 'absolute',
    right: 200,
    left: 'auto',
    top: 'auto',
    bottom: 15,
    zIndex: 20,
  },
  checkBtnBox: {
    width: 90,
    height: 60,
    borderWidth: 3,
    borderColor: COLORS.white,
    borderRadius: 10,
  },
})

export default ArrowButtons
