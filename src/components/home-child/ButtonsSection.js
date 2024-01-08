import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import Button from '../Button'
import {
  useAppContext,
  useChildSectionContext,
} from '../../screens/context-api/ContextAPI'
import { getSound } from '../../utilities/getSound'
const ButtonsSection = () => {
  const {
    isProfileClicked,
    setIsProfileClicked,
    handleSettingsBtn,
    handleSwitchProfBtn,
  } = useChildSectionContext()
  const { setSoundBg, stopSound, playSound } = useAppContext()

  const { btnSection, btnIconWrapper, btnElement } = styles
  const { centered } = globalStyles

  // This function will hide the profile card.
  const handleCancel = () => {
    setIsProfileClicked((prevState) => !prevState)
  }

  return (
    <View style={btnSection}>
      <TouchableOpacity style={[btnElement, { flex: 1.5 }]}>
        <Button
          label="Bumalik"
          onPress={handleCancel}
          btnStyle={{
            backgroundColor: COLORS.grayPrimary,
            width: 140,
            paddingVertical: 10,
            borderRadius: 50,
          }}
          txtStyle={{
            color: COLORS.white,
            fontFamily: 'QuiapoRegular',
            fontWeight: '400',
            fontSize: 25,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity style={btnElement} onPress={handleSettingsBtn}>
        <View style={[centered, btnIconWrapper]}>
          <Ionicons name="settings-sharp" size={30} color={COLORS.greenThird} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={btnElement}
        onPress={async () => {
          await stopSound()
          await playSound(getSound.background.welcome.link)
          setSoundBg(getSound.background.welcome.link)
          handleSwitchProfBtn()
        }}
      >
        <View style={[centered, btnIconWrapper]}>
          <MaterialCommunityIcons
            name="account-switch"
            size={30}
            color={COLORS.greenThird}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btnSection: {
    height: '35%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  btnIconWrapper: {
    height: 50,
    width: 50,
    borderColor: COLORS.greenPrimary,
    backgroundColor: COLORS.greenSecond,
    borderWidth: 4,
    borderRadius: 50,
  },
  btnElement: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default ButtonsSection
