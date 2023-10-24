import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { corresIcon } from '../../utilities/determineAvatar'
import COLORS from '../../constants/colors'
import { globalStyles } from '../../styles/GlobalStyles'

const ListChild = (props) => {
  const {
    id,
    name,
    avatarNum,
    custNameStyle,
    custBorderStyle,
    age,
    handleOnPress,
    iconStyle,
  } = props
  const { centered } = globalStyles

  const { custContainer, iniIconStyle, nameStyle } = styles
  return (
    <View style={[centered, custContainer]}>
      <TouchableOpacity onPress={handleOnPress}>
        <Image
          style={[iniIconStyle, custBorderStyle, iconStyle]}
          source={corresIcon[avatarNum]?.link}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOnPress}>
        <Text style={[nameStyle, custNameStyle]}>{name}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  custContainer: {
    margin: 20,
  },
  iniIconStyle: {
    height: 120,
    width: 120,
    borderColor: COLORS.white,
    borderWidth: 10,
    borderRadius: 60,
  },
  nameStyle: {
    color: COLORS.white,
    fontFamily: 'Quiapo',
    fontSize: 26,
    marginTop: 10,
  },
})

export default ListChild
