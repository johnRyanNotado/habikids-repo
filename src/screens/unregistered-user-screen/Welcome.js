import React, { useEffect, useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import Button from '../../components/Button'
import LoadingScreen from '../LoadingScreen'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from 'react-native'
import handleBckPrsExit from '../../utilities/handleBckPrsExit'
import { Video, ResizeMode } from 'expo-av'
import { getVid } from '../../utilities/getVid'
import { useFocusEffect } from '@react-navigation/native'
import { useAppContext } from '../context-api/ContextAPI'
import { getAni } from '../../utilities/getAni'

const Welcome = ({ navigation }) => {
  const { user } = useAppContext()
  const {
    welcomeTitle,
    welcomeTitleShadow,
    titleWrapper,
    askForAccWrapper,
    askForAccText,
    askForAccPressable,
    btnWrapper,
    btnStyle,
    btnTxtStyle,
    btnShadow,
  } = styles
  const {
    container,
    textCenterAlign,
    bgStyle,
    txtShadowSmall,
    positionAbsolute,
    txtShadow,
  } = globalStyles

  // const { shouldPlay, setShouldPlay } = useAppContext()
  const [fontsLoaded, fontError] = useFonts({
    Batangas: require('../../../assets/fonts/Batangas.otf'),
    Quiapo: require('../../../assets/fonts/Quiapo.ttf'),
    QuiapoRegular: require('../../../assets/fonts/QuiapoRegular.ttf'),
    QuiapoLight: require('../../../assets/fonts/QuiapoLight.ttf'),
  })

  // handling back press
  useEffect(handleBckPrsExit, [])

  // const video = useRef(null)
  // const [status, setStatus] = useState({})

  // pause video before exiting this screen
  const handleSignUp = () => {
    // video.current.pauseAsync()
    navigation.navigate('Signup')
  }

  // pause video before exiting this screen

  const handleLogin = () => {
    // video.current.pauseAsync()
    navigation.navigate('Login')
  }

  // Play background vid if this screen is on focus
  // useFocusEffect(() => {
  //   if (video.current !== null) {
  //     video.current.playAsync()
  //   }
  // })

  if (user) {
    navigation.navigate('NavScreen')
  }

  if (fontsLoaded) {
    return (
      <ImageBackground
        style={container}
        source={getAni.background.welcome.link}
      >
        <View style={[container]}>
          {/* <Video
          ref={video}
          style={bgStyle}
          source={getVid.bg.welcome}
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          shouldPlay
        /> */}
          <View style={[container, titleWrapper]}>
            <View>
              <Text
                style={[textCenterAlign, positionAbsolute, welcomeTitleShadow]}
              >
                HabiKids
              </Text>
              <Text style={[textCenterAlign, welcomeTitle]}>HabiKids</Text>
            </View>
            <View style={btnWrapper}>
              <Button
                label="Mag-Signup"
                onPress={handleSignUp}
                btnStyle={btnStyle}
                txtStyle={[txtShadowSmall, btnTxtStyle]}
                color={COLORS.white}
              />
              <View style={[positionAbsolute, btnShadow]} />
            </View>

            <View style={askForAccWrapper}>
              <Text style={[txtShadow, askForAccText]}>
                Mayroon ka nang account?
              </Text>
              <Pressable onPress={handleLogin}>
                <Text style={[txtShadow, askForAccPressable]}>Mag-Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
    )
  }
  return <LoadingScreen />
}

const styles = StyleSheet.create({
  welcomeTitle: {
    color: COLORS.accent,
    fontSize: 90,
    fontFamily: 'Quiapo',
  },
  welcomeTitleShadow: {
    color: COLORS.yellowPrimary,
    fontSize: 90,
    fontFamily: 'Quiapo',
    left: 'auto',
    right: 5,
  },
  titleWrapper: {
    justifyContent: 'center',
    gap: 40,
    alignItems: 'center',
  },
  askForAccWrapper: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'center',
  },
  askForAccText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: 'QuiapoLight',
    letterSpacing: 2,
    marginEnd: 6,
  },
  askForAccPressable: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: 'QuiapoRegular',
    letterSpacing: 2,
    marginEnd: 6,
  },
  btnWrapper: {
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxtStyle: {
    fontFamily: 'Quiapo',
    fontWeight: '400',
    color: COLORS.white,
    letterSpacing: 2,
    fontSize: 24,
  },
  btnStyle: {
    width: 200,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: COLORS.greenSecond,
  },
  btnShadow: {
    width: 200,
    height: 45,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: COLORS.greenThird,
    left: 'auto',
    right: 5,
    top: 5,
    zIndex: -1,
  },
})

export default Welcome
