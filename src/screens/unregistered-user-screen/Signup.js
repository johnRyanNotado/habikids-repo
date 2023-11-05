import React, { useState, useEffect } from 'react'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import Button from '../../components/Button'
import { signupUrl } from '../../constants/db_config'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  BackHandler,
} from 'react-native'
import EmailPass from '../../components/login-signup/EmailPass'
import Message from '../../components/login-signup/Message'
import { SIGNUP_MESSAGE } from '../../constants/textOptions'
import { LWGreenTop } from '../../constants/svg/layeredWaves'
import { useAppContext } from '../context-api/ContextAPI'
import LoadingScreen from '../LoadingScreen'
import { validEmail, validPassword } from '../../utilities/validFields'
import FieldsError from '../../components/login-signup/FieldsError'
import Success from '../../components/login-signup/Success'

const Signup = ({ navigation }) => {
  const { isLoading, isError, setIsLoading, setIsError } = useAppContext()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [response, setResponse] = useState(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [fieldsErr, setFieldsErr] = useState('')
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

  // handling backpress (redirects to welcome screen)
  useEffect(() => {
    const backAction = () => {
      setFieldsErr('')
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

  const handleSignup = async () => {
    let isValid = false
    if (email && password) {
      if (!validEmail.test(email)) {
        setFieldsErr('Hindi tanggap ang email!')
      } else if (!validPassword.test(password)) {
        setFieldsErr('Hindi tanggap ang password')
      } else {
        setFieldsErr('')
        isValid = true
      }
    } else {
      setFieldsErr('Kailangan ng parehong email at password!')
    }

    const signUp = async () => {
      try {
        const resp = await fetch(signupUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            user_email: `${email}`,
            user_password: `${password}`,
          }),
        }).catch((err) => console.log(err))

        const response = await resp.json()
        setResponse(response)
      } catch (err) {
        console.log('Error: ', err)
        setIsError(true)
      }
      setIsLoading(false)
    }

    if (isValid) {
      setIsLoading(true)
      await signUp()
    }
  }

  useEffect(() => {
    console.log('Response: ', response)
    if (response) {
      if (response.id === 101) {
        setFieldsErr('')
        setIsSuccess(true)
      } else if (response.id === 401) {
        setFieldsErr('Kailangan ng parehong email at password!')
      } else if (response.id === 402) {
        setFieldsErr('Mayroon ng gumagamit ng iyong email!')
      } else if (response.id === 400) {
        setIsError(true)
      }
      setIsLoading(false)
    }
  }, [response])

  if (isLoading) {
    return <LoadingScreen />
  }
  if (isError) {
    return (
      <View>
        <Text> {`Something went wrong :( `}</Text>
      </View>
    )
  }

  const handleContinueBtn = () => {
    navigation.navigate('NavScreen', { screen: 'EnterChildName' })
    setIsSuccess(false)
    setResponse(null)
  }

  return (
    <View style={[container, centered]}>
      <LWGreenTop style={bgStyle} />
      <View style={createAccWrapper}>
        <FieldsError fieldsErr={fieldsErr} />
        <Message messageTxt={SIGNUP_MESSAGE} />
        <EmailPass setEmail={setEmail} setPassword={setPassword} />
        <View style={custButtonWrapper}>
          <Button
            label="Mag-Signup"
            onPress={handleSignup}
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

      {isSuccess ? <Success onPress={handleContinueBtn} /> : <></>}
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
    fontFamily: 'QuiapoRegular',
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
