import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../constants/colors'
import { MaterialIcons, FontAwesome5, Feather } from '@expo/vector-icons'
import { globalStyles } from '../../styles/GlobalStyles'

const EmailPass = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const {
    formWrapperEmail,
    formWrapperPassword,
    inputText,
    inputView,
    passwordIcon,
    custEmailPassStyle,
    formLabelWrapper,
    txtReminder,
  } = styles

  return (
    <View style={custEmailPassStyle}>
      <View style={formWrapperEmail}>
        <View style={formLabelWrapper}>
          <MaterialIcons name="email" size={24} color={COLORS.white} />
          <Text style={inputText}>Email Address</Text>
        </View>

        <View style={inputView}>
          <TextInput
            placeholder="Halimbawa: pangalan@gmail.com"
            keyboardType="email-address"
            style={{
              width: '100%',
              fontWeight: '400',
              fontFamily: 'QuiapoRegular',
              fontSize: 18,
            }}
          />
        </View>
        {/* <Text style={txtReminder}>
          Kailangan ng Account ng Tagapangalaga Upang ma-Save ang Progress ng
          Mag-aaral
        </Text> */}
      </View>

      <View style={formWrapperPassword}>
        <View style={formLabelWrapper}>
          <FontAwesome5 name="user-lock" size={24} color={COLORS.white} />
          <Text style={[inputText]}>Password</Text>
        </View>
        <View style={inputView}>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={isPasswordShown}
            style={{
              width: '100%',
              fontWeight: '700',
            }}
          />

          <TouchableOpacity
            style={passwordIcon}
            onPress={() => setIsPasswordShown(!isPasswordShown)}
          >
            {isPasswordShown === false ? (
              <Feather name="eye-off" size={24} color={COLORS.greenPrimary} />
            ) : (
              <Feather name="eye" size={24} color={COLORS.greenPrimary} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formWrapperEmail: {
    height: '50%',
    marginBottom: 10,
  },
  formWrapperPassword: {
    height: '50%',
  },
  inputText: {
    fontSize: 20,
    fontWeight: '400',
    marginVertical: 8,
    color: COLORS.white,
    fontWeight: '400',
    fontFamily: 'QuiapoRegular',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
  inputView: {
    width: '100%',
    height: 48,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 22,
    elevation: 5,
  },
  passwordIcon: {
    position: 'absolute',
    right: 12,
  },
  custEmailPassStyle: {
    height: '45%',
    width: 400,
    justifyContent: 'center',
    // backgroundColor: 'lightpink',
  },
  formLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  txtReminder: {
    color: COLORS.greenPrimary,
    textAlign: 'center',
    fontFamily: 'QuiapoLight',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    letterSpacing: 2,
  },
})

export default EmailPass
