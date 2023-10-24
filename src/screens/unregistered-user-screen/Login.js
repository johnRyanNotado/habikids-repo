import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  BackHandler,
} from 'react-native'
import React, { useEffect } from 'react'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import Button from '../../components/Button'
import Message from '../../components/login-signup/Message'
import EmailPass from '../../components/login-signup/EmailPass'
import { LOGIN_MESSAGE } from '../../constants/textOptions'
import { LWGreenTop } from '../../constants/layeredWaves'

const Login = ({ navigation }) => {
  const {
    loginAccWrapper,
    askForAccWrapper,
    askForAccText,
    askForAccPressable,
    custButtonWrapper,
    btnStyle,
    btnTxtStyle,
  } = styles
  const { container, centered, bgStyle } = globalStyles
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

  const handleLogin = () => {
    navigation.navigate('NavScreen')
  }

  return (
    <SafeAreaView style={[container, centered]}>
      <LWGreenTop style={bgStyle} />
      <View style={loginAccWrapper}>
        <Message messageTxt={LOGIN_MESSAGE} />
        <EmailPass />
        <View style={custButtonWrapper}>
          <Button
            label="Login"
            onPress={handleLogin}
            btnStyle={btnStyle}
            txtStyle={btnTxtStyle}
          />
        </View>
        <View style={askForAccWrapper}>
          <Text style={askForAccText}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text style={askForAccPressable}>Register</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  loginAccWrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
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
  custButtonWrapper: {
    height: '25%',
    justifyContent: 'flex-end',
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

export default Login
