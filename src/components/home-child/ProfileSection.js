import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import { corresIcon } from '../../utilities/determineAvatar'
import { useChildDataContext } from '../../screens/context-api/ContextAPI'

const ProfileSection = () => {
  const { chosenChild } = useChildDataContext()
  const { name, age, avatarNum } = chosenChild
  const {
    profileSection,
    avatar,
    detailsWrapper,
    avatarWrapper,
    genTxt,
    txtWrapper,
  } = styles
  const { centered } = globalStyles

  return (
    <View style={profileSection}>
      <View style={[centered, avatarWrapper]}>
        <Image source={corresIcon[avatarNum]?.link} style={avatar} />
      </View>
      <View style={[centered, detailsWrapper]}>
        <View style={txtWrapper}>
          <Text style={genTxt}>{`Pangalan:  ${name}`}</Text>
        </View>
        <View style={txtWrapper}>
          <Text style={genTxt}>{`Edad:  ${age} Na Taon`}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileSection: {
    height: '65%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  avatar: {
    height: 110,
    width: 110,
    borderColor: COLORS.greenPrimary,
    borderWidth: 8,
    borderRadius: 60,
  },
  detailsWrapper: {
    height: '100%',
    width: '65%',
    gap: 5,
    alignItems: 'flex-start',
  },
  avatarWrapper: {
    height: '100%',
    width: '35%',
  },
  txtWrapper: {
    borderColor: COLORS.greenPrimary,
    backgroundColor: COLORS.greenSecond,
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 3,
    width: '100%',
  },
  genTxt: {
    fontSize: 25,
    width: '100%',
    fontFamily: 'QuiapoRegular',
    paddingVertical: 6,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ProfileSection
