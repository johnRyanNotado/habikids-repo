import React from 'react'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import { AntDesign } from '@expo/vector-icons'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useChildSectionContext } from '../../../screens/context-api/ContextAPI'

const ArrowButtons = (props) => {
  const { handleLeftBtn, handleRightBtn, isFinished, handleFinishedBtn } = props
  const { isLeftShown, isRightShown } = useChildSectionContext()
  const {
    btnSection,
    arrBtnStyle,
    btnSectionElement,
    finishBtnStyle,
    finishBtnTxt,
  } = styles
  const { centered, positionAbsolute } = globalStyles

  return (
    <View style={[positionAbsolute, btnSection]}>
      {isLeftShown ? (
        <View style={[centered, btnSectionElement]}>
          <TouchableOpacity onPress={handleLeftBtn}>
            <View style={[centered, arrBtnStyle]}>
              <AntDesign name="left" size={25} color={COLORS.white} />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
      {isRightShown ? (
        <View style={[centered, btnSectionElement]}>
          <TouchableOpacity onPress={handleRightBtn}>
            <View style={[centered, arrBtnStyle]}>
              <AntDesign name="right" size={25} color={COLORS.white} />
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
    backgroundColor: COLORS.accent,
    borderColor: COLORS.white,
  },
  btnSectionElement: {
    width: '13%',
  },
  finishBtnStyle: {
    backgroundColor: COLORS.accent,
    width: 120,
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: COLORS.white,
    marginRight: 40,
  },
  finishBtnTxt: {
    color: COLORS.white,
    fontSize: 20,
    fontFamily: 'Quiapo',
    fontWeight: '400',
  },
})

export default ArrowButtons
