import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from 'expo-font'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import Button from '../../components/Button'
import LoadingScreen from '../LoadingScreen'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import handleBckPrsExit from '../../utilities/handleBckPrsExit'
import { LWGreenBottom } from '../../constants/layeredWaves'

const Welcome = ({ navigation }) => {
  const {
    welcomeTitle,
    welcomeDescription,
    titleWrapper,
    askForAccWrapper,
    askForAccText,
    askForAccPressable,
    btnWrapper,
    btnStyle,
    btnTxtStyle,
  } = styles
  const { container, textCenterAlign, bgStyle, txtShadowSmall, txtShadow } =
    globalStyles
  const [fontsLoaded, fontError] = useFonts({
    Batangas: require('../../../assets/fonts/Batangas.otf'),
    Quiapo: require('../../../assets/fonts/Quiapo.ttf'),
    QuiapoRegular: require('../../../assets/fonts/QuiapoRegular.ttf'),
    QuiapoLight: require('../../../assets/fonts/QuiapoLight.ttf'),
  })

  // handling back press
  useEffect(handleBckPrsExit, [])

  if (fontsLoaded) {
    return (
      <SafeAreaView style={[container, { backgroundColor: 'red' }]}>
        <LWGreenBottom style={bgStyle} />
        <View style={[container, titleWrapper]}>
          <View>
            <Text style={[txtShadow, textCenterAlign, welcomeTitle]}>
              HabiKids
            </Text>
            <Text style={[txtShadowSmall, textCenterAlign, welcomeDescription]}>
              Maglaro at Maturo Tungkol sa Filipino Values, Traditions, at Good
              Habits
            </Text>
          </View>
          <View style={btnWrapper}>
            <Button
              label="Mag-Signup"
              onPress={() => navigation.navigate('Signup')}
              btnStyle={btnStyle}
              txtStyle={btnTxtStyle}
              color={COLORS.white}
            />
          </View>

          <View style={askForAccWrapper}>
            <Text style={[txtShadow, askForAccText]}>
              Mayroon ka nang account?
            </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={[txtShadow, askForAccPressable]}>Mag-Login</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    )
  }

  return <LoadingScreen />
}

const styles = StyleSheet.create({
  welcomeTitle: {
    color: COLORS.white,
    fontSize: 75,
    fontFamily: 'Quiapo',
  },
  welcomeDescription: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: 'QuiapoLight',
    letterSpacing: 2,
  },
  titleWrapper: {
    justifyContent: 'center',
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
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxtStyle: {
    fontFamily: 'QuiapoRegular',
    fontWeight: '400',
    color: COLORS.greenPrimary,
    letterSpacing: 2,
    fontSize: 24,
  },
  btnStyle: {
    backgroundColor: 'white',
    width: 200,
    paddingVertical: 10,
    borderRadius: 50,
  },
})

export default Welcome
