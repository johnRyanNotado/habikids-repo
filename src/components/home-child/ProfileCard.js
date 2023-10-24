import React from 'react'
import { View, StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import ProfileSection from './ProfileSection'
import ButtonsSection from './ButtonsSection'

const ProfileCard = () => {
  const { profileCard, profileCardWrapperBg } = styles
  const { centered, positionAbsolute } = globalStyles

  return (
    <View style={[positionAbsolute, centered]}>
      <View style={[positionAbsolute, profileCardWrapperBg]} />
      <View style={profileCard}>
        <ProfileSection />
        <ButtonsSection />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileCard: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    elevation: 5,
    width: 380,
    height: 215,
  },
  profileCardWrapperBg: {
    backgroundColor: COLORS.grayPrimary,
    opacity: 0.5,
  },
})

export default ProfileCard
