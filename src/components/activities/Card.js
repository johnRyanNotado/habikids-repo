import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import { imgUrl } from '../../constants/db_config'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../constants/windowConstants'

const Card = (props) => {
  const { id, img, num, title, label, screen, onPress } = props
  const {
    custContainer,
    bg,
    card,
    imgWrapper,
    titleWrapper,
    imgStyle,
    titleStyle,
  } = styles
  const { container, centered, positionAbsolute } = globalStyles
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(screen, id)
      }}
    >
      <View style={[container, centered, custContainer]}>
        <View style={[centered, card]}>
          <View style={imgWrapper}>
            <Image
              source={{ uri: `${imgUrl}${img}` }}
              resizeMode="cover"
              style={imgStyle}
            />
          </View>
          <View style={[centered, titleWrapper]}>
            <Text style={titleStyle}>{`${label} ${num}: ${title}`}</Text>
          </View>
        </View>
        <View style={[container, positionAbsolute, bg]} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  custContainer: {
    marginHorizontal: 10,
  },
  bg: {
    opacity: 0,
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.greenSecond,
  },
  card: {
    height: WINDOW_HEIGHT * 0.6,
    width: WINDOW_HEIGHT * 0.6,
    minHeight: 150,
    minWidth: 150,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: COLORS.accent,
    marginHorizontal: 5,
    backgroundColor: COLORS.primaryTrans,
  },
  imgWrapper: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    width: '90%',
    height: '60%',
    marginBottom: '5%',
    marginTop: '2%',
    borderColor: COLORS.accent,
    borderWidth: 2,
  },
  titleWrapper: {
    backgroundColor: COLORS.greenSecond,
    width: '90%',
    height: '30%',
    marginBottom: '3%',
    borderRadius: 20,
    paddingHorizontal: 10,
    borderColor: COLORS.accent,
    borderWidth: 2,
  },
  imgStyle: {
    borderRadius: 18,
    height: '100%',
    width: '100%',
  },
  titleStyle: {
    fontFamily: 'QuiapoRegular',
    fontSize: WINDOW_HEIGHT * 0.05,
    color: COLORS.accent,
  },
})
export default Card
