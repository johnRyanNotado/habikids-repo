import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import COLORS from '../../constants/colors'
import { corresIcon } from '../../utilities/determineAvatar'
import { WINDOW_WIDTH } from '../../constants/windowConstants'

const AVATART_DIMENSION = { s: WINDOW_WIDTH * 0.065 }

const CustRadioBtnAvatar = (props) => {
  // based on the selected useState, the styles of the buttons will change.
  const { id, selected, onSelect } = props
  const { imageStyle, selectedStyle, notSelectedStyle } = styles
  return (
    <TouchableOpacity onPress={onSelect}>
      <Image
        style={[imageStyle, selected ? selectedStyle : notSelectedStyle]}
        source={corresIcon[id].link}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 50,
    height: 50,
    width: AVATART_DIMENSION.s,
    height: AVATART_DIMENSION.s,
    marginHorizontal: 5,
    marginBottom: 4,
  },
  selectedStyle: {
    borderWidth: 3,
    borderColor: COLORS.greenThird,
    borderRadius: 30,
  },
  notSelectedStyle: {
    borderWidth: 3,
    borderColor: COLORS.white,
    borderRadius: 30,
  },
})

export default CustRadioBtnAvatar
