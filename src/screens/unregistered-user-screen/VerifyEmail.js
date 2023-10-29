import React, { useState, useEffect } from 'react'
import { StyleSheet, BackHandler, ImageBackground, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import Button from '../../components/Button'
import VerifyEmailDesc from '../../components/VerifyEmailDesc'
import { getImg } from '../../utilities/getImg'
import {
  UNVERIFIED_EMAIL_DESC,
  UNVERIFIED_EMAIL_MAIN,
  VERIFIED_EMAIL_DESC,
  VERIFIED_EMAIL_MAIN,
} from '../../constants/textOptions'

const VerifyEmail = ({ navigation }) => {
  const [isVerified, setIsVerified] = useState(false)
  const { container, centered } = globalStyles
  const { mainWrapperCustom, btnStyle, btnTxtStyle } = styles

  // handling backpress (redirects to signup screen)
  useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => backHandler.remove()
  }, [])

  return (
    <ImageBackground
      style={container}
      resizeMode="cover"
      blurRadius={4}
      source={getImg.bg.lwGreenTop.link}
    >
      <View style={[container, centered, mainWrapperCustom]}>
        {isVerified ? (
          <VerifyEmailDesc
            txtMain={VERIFIED_EMAIL_MAIN}
            txtDesc={VERIFIED_EMAIL_DESC}
            iconName={'email-check'}
          />
        ) : (
          <VerifyEmailDesc
            txtMain={UNVERIFIED_EMAIL_MAIN}
            txtDesc={UNVERIFIED_EMAIL_DESC}
            iconName={'email-fast'}
          />
        )}

        <Button
          label="Magpatuloy"
          btnStyle={btnStyle}
          txtStyle={btnTxtStyle}
          onPress={
            isVerified
              ? () => navigation.navigate('NavScreen')
              : () => setIsVerified(!isVerified)
          }
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  mainWrapperCustom: {
    flexDirection: 'horizontal',
  },
  btnStyle: {
    backgroundColor: 'white',
    width: 200,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 20,
  },
  btnTxtStyle: {
    fontFamily: 'QuiapoRegular',
    fontWeight: '400',
    color: COLORS.greenPrimary,
    letterSpacing: 2,
    fontSize: 24,
  },
})

export default VerifyEmail
