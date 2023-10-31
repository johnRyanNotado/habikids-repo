import React from 'react'
import { View, StyleSheet } from 'react-native'
import COLORS from '../../constants/colors'
import PickAge from './PickAge'
import PickAvatar from './PickAvatar'
import { SWGreenMain } from '../../constants/svg/stackedWaves'
import { globalStyles } from '../../styles/GlobalStyles'

const EnterChildAgeMainSec = () => {
  const { bgStyleWNavBar } = globalStyles
  const { mainSectionWrapper, cardWrapper } = styles
  return (
    <View style={mainSectionWrapper}>
      <SWGreenMain style={bgStyleWNavBar} />
      <View style={cardWrapper}>
        <PickAge />
        <PickAvatar />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainSectionWrapper: {
    height: '80%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardWrapper: {
    height: '90%',
    width: '75%',
    minWidth: 500,
    backgroundColor: COLORS.greenSecond,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 20,
    elevation: 5,
  },
})
export default EnterChildAgeMainSec
