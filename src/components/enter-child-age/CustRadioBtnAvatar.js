import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import COLORS from '../../constants/colors'
import { corresIcon } from '../../utilities/determineAvatar'

const CustRadioBtnAvatar = (props) => {
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
    width: 60,
    height: 60,
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
