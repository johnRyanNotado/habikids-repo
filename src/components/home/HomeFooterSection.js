import React from 'react'
import COLORS from '../../constants/colors'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const HomeFooterSection = () => {
  const { footerSectionWrapper, offlineContentTxt, offlineContentWrapper } =
    styles

  return (
    <View style={footerSectionWrapper}>
      <TouchableOpacity>
        <View style={offlineContentWrapper}>
          <Text style={offlineContentTxt}>Downloads</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  footerSectionWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: 35,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  offlineContentWrapper: {
    marginEnd: 10,
    marginBottom: 5,
    backgroundColor: COLORS.greenPrimary,
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
  },
  offlineContentTxt: {
    color: COLORS.white,
    fontFamily: 'QuiapoRegular',
    fontSize: 20,
  },
})

export default HomeFooterSection
