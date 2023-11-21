import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import COLORS from '../../constants/colors'
import { globalStyles } from '../../styles/GlobalStyles'
import { Ionicons } from '@expo/vector-icons'

const HomeNavBar = (props) => {
  const { handleSettingsBtn, handleManageProfileBtn } = props
  const {
    navBarWrapper,
    navBarElement,
    settingsIcon,
    appName,
    manageProfileIcon,
  } = styles

  const { txtShadow } = globalStyles

  return (
    <View style={navBarWrapper}>
      <View style={[navBarElement, { width: '13%' }]}>
        <TouchableOpacity onPress={handleSettingsBtn}>
          <Ionicons name="md-settings-sharp" size={30} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <View style={navBarElement}>
        <Text style={[txtShadow, appName]}>Habikids</Text>
      </View>
      <View style={[navBarElement, { width: '13%' }]}>
        <TouchableOpacity onPress={handleManageProfileBtn}>
          <Ionicons name="person" size={30} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navBarWrapper: {
    height: '20%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.greenPrimary,
    minHeight: 60,
    zIndex: 1,
  },
  navBarElement: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    color: COLORS.white,
    fontSize: 48,
    fontFamily: 'Quiapo',
    letterSpacing: 8,
  },
  settingsIcon: {
    width: 25,
    height: 25,
    backgroundColor: 'lightpink',
  },
  manageProfileIcon: {
    width: 25,
    height: 25,
  },
})

export default HomeNavBar
