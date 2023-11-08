import React from 'react'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import { AntDesign } from '@expo/vector-icons'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { useChildSectionContext } from '../../../screens/context-api/ContextAPI'

const ArrowButtons = (props) => {
  const { handleLeftBtn, handleRightBtn } = props
  const { isLeftShown, isRightShown } = useChildSectionContext()
  const { centered, positionAbsolute } = globalStyles
  return (
    <View style={[positionAbsolute, styles.btnSection]}>
      {isLeftShown ? (
        <View style={[centered, styles.btnSectionElement]}>
          <TouchableOpacity onPress={handleLeftBtn}>
            <View style={[centered, styles.arrBtnStyle]}>
              <AntDesign name="left" size={25} color={COLORS.white} />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
      {isRightShown ? (
        <View style={[centered, styles.btnSectionElement]}>
          <TouchableOpacity onPress={handleRightBtn}>
            <View style={[centered, styles.arrBtnStyle]}>
              <AntDesign name="right" size={25} color={COLORS.white} />
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
})

export default ArrowButtons
