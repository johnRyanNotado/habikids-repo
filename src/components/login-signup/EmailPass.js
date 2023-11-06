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
const EmailPass = (props) => {
  const { setEmail, setPassword, email, password } = props

  const [isPasswordShown, setIsPasswordShown] = useState(false)
  const {
    formWrapperEmail,
    formWrapperPassword,
    inputLabel,
    inputView,
    passwordIcon,
    custEmailPassStyle,
    formLabelWrapper,
    inputTxt,
  } = styles

  return (
    <View style={custEmailPassStyle}>
      <View style={formWrapperEmail}>
        <View style={formLabelWrapper}>
          <MaterialIcons name="email" size={24} color={COLORS.white} />
          <Text style={inputLabel}>Email Address</Text>
        </View>

        <View style={inputView}>
          <TextInput
            placeholder="Halimbawa: pangalan@gmail.com"
            keyboardType="email-address"
            style={inputTxt}
            value={email}
            onChangeText={(newEmail) => setEmail(newEmail)}
          />
        </View>
      </View>

      <View style={formWrapperPassword}>
        <View style={formLabelWrapper}>
          <FontAwesome5 name="user-lock" size={24} color={COLORS.white} />
          <Text style={[inputLabel]}>Password</Text>
        </View>
        <View style={inputView}>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={isPasswordShown}
            style={inputTxt}
            value={password}
            onChangeText={(newPass) => setPassword(newPass)}
          />

          <TouchableOpacity
            style={passwordIcon}
            onPress={() => setIsPasswordShown(!isPasswordShown)}
          >
            {isPasswordShown === false ? (
              <Feather name="eye" size={24} color={COLORS.greenPrimary} />
            ) : (
              <Feather name="eye-off" size={24} color={COLORS.greenPrimary} />
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
  inputTxt: {
    width: '100%',
    fontWeight: '400',
    fontFamily: 'QuiapoRegular',
    fontSize: 18,
  },
  inputLabel: {
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
  },
  formLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
})

export default EmailPass
