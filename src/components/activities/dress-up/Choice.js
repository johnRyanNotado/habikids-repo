import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'
import COLORS from '../../../constants/colors'
import { imgUrl } from '../../../constants/db_config'

const Choice = (props) => {
  const { img, name, position, height, handlePress, marginTop } = props
  const { choiceBox, choiceTxt, choiceTxtWrapper } = styles
  const { centered } = globalStyles
  return (
    <View style={[centered, choiceBox]}>
      <View style={choiceTxtWrapper}>
        <Text style={choiceTxt}>{name}</Text>
      </View>

      <View
        style={[
          position,
          {
            zIndex: -20,
          },
        ]}
      >
        <TouchableOpacity onPress={handlePress}>
          <Image
            source={{ uri: `${imgUrl}${img}` }}
            style={{
              // height: height ? height : 400,
              width: WINDOW_WIDTH * 0.25,
              height: WINDOW_HEIGHT * 0.9 - 70,
              // backgroundColor: 'lightblue',
              // marginTop: marginTop,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  choiceBox: {
    width: WINDOW_WIDTH * 0.25,
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
    backgroundColor: 'rgba(50,50,50,0.2)',
  },
  choiceTxtWrapper: {
    position: 'absolute',
    bottom: 10,
    backgroundColor: COLORS.whiteTrans,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
  },
  choiceTxt: { fontFamily: 'Quiapo', fontSize: 25 },
})

export default Choice
