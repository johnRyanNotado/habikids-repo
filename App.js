import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  MAIN_HEADER_OPT,
  MAIN_TRANSITION_SPEC,
} from './src/constants/headerOption'
import {
  Login,
  Welcome,
  Signup,
  VerifyEmail,
  NavScreen,
} from './src/screens/unregistered-user-screen'
import handleBckPrsExit from './src/utilities/handleBckPrsExit'
import { AppContext } from './src/screens/context-api/ContextAPI'
import { Audio } from 'expo-av'
import { getSound } from './src/utilities/getSound'

const Stack = createStackNavigator()

export default function App() {
  const [shouldPlay, setShouldPlay] = useState(false)
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [dataChanged, setDataChanged] = useState(0)
  const [sound, setSound] = useState()
  const [soundBg, setSoundBg] = useState(getSound.background.welcome.link)

  // These are the useState that will serve as the value for each switch in the settings.
  const [isMusicVal, setIsMusicVal] = useState(true)
  const [isVoiceVal, setIsVoiceVal] = useState(false)
  const [isReminderVal, setIsReminderVal] = useState(false)
  const [isTipsSuppVal, setIsTipsSuppVal] = useState(false)
  const [isShowBtnVal, setIsShowBtnVal] = useState(false)
  const [isEngCapShown, setIsEngCapShown] = useState(false)
  const playSound = async (soundVal) => {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync(soundVal)
    setSound(sound)

    console.log('Playing Sound')
    await sound.playAsync()
    await sound.setIsLoopingAsync(true)
  }

  const stopSound = async () => {
    await sound.stopAsync()
    await sound.unloadAsync()
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound')
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  useEffect(() => {
    playSound(getSound.background.welcome.link)
  }, [])

  // handle back press
  useEffect(handleBckPrsExit, [])
  // Hide status bar
  StatusBar.setHidden(true)

  return (
    <AppContext.Provider
      value={{
        shouldPlay,
        setShouldPlay,
        user,
        setUser,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
        dataChanged,
        setDataChanged,
        sound,
        playSound,
        setSound,
        isMusicVal,
        setIsMusicVal,
        isReminderVal,
        setIsReminderVal,
        isVoiceVal,
        setIsVoiceVal,
        isTipsSuppVal,
        setIsTipsSuppVal,
        isShowBtnVal,
        setIsShowBtnVal,
        isEngCapShown,
        setIsEngCapShown,
        stopSound,
        soundBg,
        setSoundBg,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              ...MAIN_HEADER_OPT,
              ...MAIN_TRANSITION_SPEC,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              ...MAIN_HEADER_OPT,
              ...MAIN_TRANSITION_SPEC,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              ...MAIN_HEADER_OPT,
              ...MAIN_TRANSITION_SPEC,
            }}
          />
          <Stack.Screen
            name="VerifyEmail"
            component={VerifyEmail}
            options={MAIN_HEADER_OPT}
          />
          <Stack.Screen
            name="NavScreen"
            component={NavScreen}
            options={MAIN_HEADER_OPT}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  )
}
