import React from 'react'
import { View, StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import ProfileSection from './ProfileSection'
import ButtonsSection from './ButtonsSection'
import Animated, { BounceIn } from 'react-native-reanimated'

const ProfileCard = () => {
  const { profileCard, profileCardWrapperBg } = styles
  const { centered, positionAbsolute } = globalStyles

  return (
    <View style={[positionAbsolute, centered]}>
      <View style={[positionAbsolute, profileCardWrapperBg]} />
      <Animated.View entering={BounceIn} style={profileCard}>
        <ProfileSection />
        <ButtonsSection />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileCard: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    elevation: 5,
    minWidth: 380,
    minHeight: 215,
    width: '30%',
    height: '30%',
    maxWidth: 230,
    maxHeight: 430,
  },
  profileCardWrapperBg: {
    backgroundColor: COLORS.grayPrimary,
    opacity: 0.5,
  },
})

export default ProfileCard
