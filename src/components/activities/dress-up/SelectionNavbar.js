import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import { AntDesign } from '@expo/vector-icons'
import { useDressUpContext } from '../../../screens/activities/dressup-in-culture/DressUpContext'

const SelectionNavbar = (props) => {
  const {
    handleLeftBtn,
    handleRightBtn,
    hideRightArr,
    hideLeftArr,
    showSave,
    checker,
    label,
  } = props
  const { numOfClothes, setIsFinished, score } = useDressUpContext()
  const { centered } = globalStyles
  const {
    navBarWrapper,
    navBarElement,
    arrBtnStyle,
    labelWrapper,
    labelStyle,
    finishBtnStyle,
    finishBtnTxt,
  } = styles
  const handleSave = () => {
    console.log(
      'Go next\tChecker: ',
      checker,
      '\tNum of Clothes: ',
      numOfClothes
    )
    if (checker <= numOfClothes) {
      setIsFinished(true)
      score.value = 4
      console.log('Saved?')
    }
  }
  return (
    <View style={navBarWrapper}>
      <View style={[centered, navBarElement]}>
        {hideLeftArr ? null : (
          <TouchableOpacity onPress={handleLeftBtn}>
            <View style={[centered, arrBtnStyle]}>
              <AntDesign name="left" size={25} color={COLORS.white} />
            </View>
          </TouchableOpacity>
        )}
      </View>
      <View style={[centered, navBarElement]}>
        <View style={labelWrapper}>
          <Text style={labelStyle}>{label}</Text>
        </View>
      </View>

      <View style={[centered, navBarElement]}>
        {hideRightArr ? null : (
          <TouchableOpacity onPress={handleRightBtn}>
            <View style={[centered, arrBtnStyle]}>
              <AntDesign name="right" size={25} color={COLORS.white} />
            </View>
          </TouchableOpacity>
        )}
        {showSave ? (
          <TouchableOpacity onPress={handleSave}>
            <View style={[centered, finishBtnStyle]}>
              <Text style={finishBtnTxt}>{`I-Save >`}</Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navBarWrapper: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    zIndex: 10,
  },
  navBarElement: {
    height: '100%',
    width: '33.33%',
  },
  arrBtnStyle: {
    height: 45,
    width: 45,
    borderRadius: 24,
    borderWidth: 3,
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.white,
  },
  finishBtnStyle: {
    backgroundColor: COLORS.secondary,
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
  labelWrapper: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  labelStyle: { color: COLORS.accent, fontFamily: 'Quiapo', fontSize: 35 },
})

export default SelectionNavbar
