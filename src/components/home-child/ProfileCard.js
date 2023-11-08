import React from 'react'
import { View, StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import ProfileSection from './ProfileSection'
import ButtonsSection from './ButtonsSection'
import Animated, { BounceIn, BounceOut } from 'react-native-reanimated'

const ProfileCard = () => {
  const { profileCard, profileCardWrapperBg } = styles
  const { centered, positionAbsolute } = globalStyles

  return (
    <View style={[positionAbsolute, centered, { zIndex: 10 }]}>
      <View style={[positionAbsolute, profileCardWrapperBg]} />
      <Animated.View
        entering={BounceIn.duration(500)}
        exiting={BounceOut.duration(500)}
        style={profileCard}
      >
        <ProfileSection />
        <ButtonsSection />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileCard: {
    borderColor: COLORS.accent,
    borderWidth: 5,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    elevation: 5,
    minWidth: 410,
    minHeight: 215,
    width: '30%',
    height: '50%',
    maxWidth: 450,
    maxHeight: 250,
  },
  profileCardWrapperBg: {
    backgroundColor: COLORS.grayPrimary,
    opacity: 0.5,
  },
})

export default ProfileCard
