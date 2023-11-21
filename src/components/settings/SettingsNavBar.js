import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from '../../constants/colors'
import { globalStyles } from '../../styles/GlobalStyles'
import { Ionicons } from '@expo/vector-icons'

const SettingsNavBar = (props) => {
  const { handleLeftArrBtn } = props
  const { navBarWrapper, navBarTitle, navBarElement } = styles
  const { txtShadowMedium } = globalStyles
  return (
    <View style={navBarWrapper}>
      <View style={navBarElement}>
        <TouchableOpacity onPress={handleLeftArrBtn}>
          <Ionicons
            name="chevron-back-circle-sharp"
            size={40}
            color={COLORS.white}
          />
        </TouchableOpacity>
      </View>
      <View style={[navBarElement, { width: '60%' }]}>
        <Text style={[navBarTitle, txtShadowMedium]}>Settings</Text>
      </View>
      <View style={navBarElement}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  navBarWrapper: {
    height: '15%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 60,
    zIndex: 1,
  },
  navBarTitle: {
    color: COLORS.white,
    fontSize: 40,
    fontFamily: 'Quiapo',
    letterSpacing: 8,
  },
  navBarElement: {
    width: '13%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBtn: {
    width: 35,
    height: 35,
  },
})

export default SettingsNavBar
