import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  BackHandler,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import Button from '../../components/Button'
import Message from '../../components/login-signup/Message'
import EmailPass from '../../components/login-signup/EmailPass'
import { LOGIN_MESSAGE } from '../../constants/textOptions'
import { LWGreenTop } from '../../constants/svg/layeredWaves'
import { useAppContext } from '../context-api/ContextAPI'
import LoadingScreen from '../LoadingScreen'
import { validEmail } from '../../utilities/validFields'
import { loginUrl } from '../../constants/db_config'
import FieldsError from '../../components/login-signup/FieldsError'
import ErrorScreen from '../ErrorScreen'

const Login = ({ navigation }) => {
  const { isLoading, isError, setIsLoading, setIsError, setUser, user } =
    useAppContext()
  const [email, setEmail] = useState('johnryannotado@gmail.com')
  const [password, setPassword] = useState('password01')
  const [response, setResponse] = useState(null)
  const [fieldsErr, setFieldsErr] = useState('')
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

    return () => {
      setEmail(null)
      setPassword(null)
      setResponse(null)
      backHandler.remove()
    }
  }, [])

  const handleLogin = async () => {
    let isValid = false
    if (email && password) {
      if (!validEmail.test(email)) {
        setFieldsErr('Hindi tanggap ang email!')
      } else {
        setFieldsErr('')
        isValid = true
      }
    } else {
      setFieldsErr('Kailangan ng parehong email at password!')
    }

    const logIn = async () => {
      try {
        const resp = await fetch(loginUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            user_email: `${email}`,
            user_password: `${password}`,
            user_type: `P`,
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
      await logIn()
    }
  }

  useEffect(() => {
    console.log('Response: ', response)
    if (response) {
      if (response.id === 101) {
        setFieldsErr('')
        setUser({
          user_id: response.user_id,
          user_email: email,
          user_password: password,
        })
        navigation.removeListener
        navigation.navigate('NavScreen')
      } else if (response.id === 401) {
        setFieldsErr('Kailangan ng parehong email at password!')
      } else if (response.id === 403) {
        setFieldsErr('Hindi makilala ng database ang email')
      } else if (response.id === 404) {
        setFieldsErr('Mali ang password')
      } else if (response.id === 400) {
        setIsError(true)
      } else {
        Alert.alert(
          'May problemang nangyari.',
          'Maaring subukan uli pagkatapos ng ilang minuto.'
        )
      }
    }
  }, [response])

  const handleRegisterBtn = () => {
    setEmail(null)
    setPassword(null)
    setResponse(null)
    navigation.navigate('Signup')
  }

  if (isLoading) {
    return <LoadingScreen />
  }
  if (isError) {
    return <ErrorScreen />
  }

  if (user) {
    navigation.navigate('NavScreen')
  }

  return (
    <View style={[container, centered]}>
      <LWGreenTop style={bgStyle} />
      <View style={loginAccWrapper}>
        <FieldsError fieldsErr={fieldsErr} />
        <Message messageTxt={LOGIN_MESSAGE} />
        <EmailPass
          setEmail={setEmail}
          setPassword={setPassword}
          email={email}
          password={password}
        />
        <View style={custButtonWrapper}>
          <Button
            label="Login"
            onPress={handleLogin}
            btnStyle={btnStyle}
            txtStyle={btnTxtStyle}
          />
        </View>
        <View style={askForAccWrapper}>
          <Text style={askForAccText}>Wala ka pang account?</Text>
          <Pressable onPress={handleRegisterBtn}>
            <Text style={askForAccPressable}>Mag-Register</Text>
          </Pressable>
        </View>
      </View>
    </View>
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
    fontFamily: 'QuiapoRegular',
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
