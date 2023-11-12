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
  } = props
  const { centered } = globalStyles
  const { numOfClothes, setIsFinished, score } = useDressUpContext()
  const { navBarWrapper, navBarElement, arrBtnStyle } = styles
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
        {/* <Text style={{}}>SHEESH</Text> */}
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
            <View style={[centered, styles.finishBtnStyle]}>
              <Text style={styles.finishBtnTxt}>{`Tapusin >`}</Text>
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
    // backgroundColor: COLORS.whiteTrans,
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
})

export default SelectionNavbar
