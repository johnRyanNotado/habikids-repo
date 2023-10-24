import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'
import { globalStyles } from '../styles/GlobalStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const VerifyEmailDesc = (props) => {
  const { txtMain, txtDesc, iconName } = props
  const { txtVerEmail, txtVerEmailMain, txtVerEmailDesc, txtVerEmailWrapper } =
    styles
  const { centered, txtShadowSmall } = globalStyles
  return (
    <View style={[txtVerEmailWrapper, centered]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
        }}
      >
        <MaterialCommunityIcons
          name={iconName}
          size={35}
          color={COLORS.black}
        />
        <Text style={[txtShadowSmall, txtVerEmail, txtVerEmailMain]}>
          {txtMain}
        </Text>
      </View>
      <Text style={[txtShadowSmall, txtVerEmail, txtVerEmailDesc]}>
        {txtDesc}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  txtVerEmail: {
    color: COLORS.black,
    textAlign: 'center',
    letterSpacing: 2,
  },
  txtVerEmailMain: {
    fontSize: 25,
    fontFamily: 'QuiapoLight',
  },
  txtVerEmailDesc: {
    fontSize: 18,
    marginTop: 20,
    fontFamily: 'QuiapoLight',
  },
  txtVerEmailWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  },
})

export default VerifyEmailDesc
