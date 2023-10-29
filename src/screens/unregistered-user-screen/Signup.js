import React, { useEffect } from 'react'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import Button from '../../components/Button'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  BackHandler,
  btnStyle,
  btnTxtStyle,
} from 'react-native'
import EmailPass from '../../components/login-signup/EmailPass'
import Message from '../../components/login-signup/Message'
import { SIGNUP_MESSAGE } from '../../constants/textOptions'
import { LWGreenTop } from '../../constants/layeredWaves'
const Signup = ({ navigation }) => {
  const {
    createAccWrapper,
    askForAccWrapper,
    askForAccText,
    askForAccPressable,
    custButtonWrapper,
    btnStyle,
    btnTxtStyle,
  } = styles
  const { centered, container, bgStyle } = globalStyles

  const handleSignUp = () => {
    navigation.navigate('VerifyEmail')
  }

  // handling backpress (redirects to welcome screen)
  useEffect(() => {
    const backAction = () => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Welcome',
          },
        ],
      })
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => backHandler.remove()
  }, [])

  return (
    <View style={[container, centered]}>
      <LWGreenTop style={bgStyle} />
      <View style={createAccWrapper}>
        <Message messageTxt={SIGNUP_MESSAGE} />
        <EmailPass />
        <View style={custButtonWrapper}>
          <Button
            label="Mag-Signup"
            onPress={handleSignUp}
            btnStyle={btnStyle}
            txtStyle={btnTxtStyle}
          />
        </View>
        <View style={[askForAccWrapper]}>
          <Text style={[askForAccText]}>Mayroon ka nang account?</Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={[askForAccPressable]}>Mag-Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  createAccWrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  custButtonWrapper: {
    height: '25%',
    justifyContent: 'flex-end',
  },
  askForAccWrapper: {
    height: '10%',
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'center',
  },
  askForAccText: {
    color: COLORS.greenPrimary,
    fontSize: 16,
    fontFamily: 'QuiapoLight',
    letterSpacing: 2,
    marginEnd: 6,
  },
  askForAccPressable: {
    color: COLORS.greenPrimary,
    fontSize: 16,
    fontFamily: 'QuiapoLight',
    textDecorationLine: 'underline',
    letterSpacing: 2,
    marginEnd: 6,
  },
  btnStyle: {
    backgroundColor: 'white',
    width: 200,
    paddingVertical: 10,
    borderRadius: 50,
  },
  btnTxtStyle: {
    fontFamily: 'QuiapoRegular',
    fontWeight: '400',
    color: COLORS.greenPrimary,
    letterSpacing: 2,
    fontSize: 24,
  },
})

export default Signup
