import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import COLORS from '../../constants/colors'
import { globalStyles } from '../../styles/GlobalStyles'

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
          <Image
            style={settingsIcon}
            source={require('../../img/white-settings-icon.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={navBarElement}>
        <Text style={[txtShadow, appName]}>Habikids</Text>
      </View>
      <View style={[navBarElement, { width: '13%' }]}>
        <TouchableOpacity onPress={handleManageProfileBtn}>
          <Image
            style={manageProfileIcon}
            source={require('../../img/profile-icon.png')}
          />
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
  },
  manageProfileIcon: {
    width: 25,
    height: 25,
  },
})

export default HomeNavBar
