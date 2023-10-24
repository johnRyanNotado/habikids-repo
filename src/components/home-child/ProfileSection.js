import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import { corresIcon } from '../../utilities/determineAvatar'
import { useChildDataContext } from '../../screens/registered-user-screens/NavScreen'

const ProfileSection = () => {
  const { chosenChild } = useChildDataContext()
  const { name, age, avatarNum } = chosenChild
  const { profileSection, avatar, detailsWrapper, avatarWrapper, genTxt } =
    styles
  const { centered } = globalStyles

  return (
    <View style={profileSection}>
      <View style={[centered, avatarWrapper]}>
        <Image source={corresIcon[avatarNum]?.link} style={avatar} />
      </View>
      <View style={[centered, detailsWrapper]}>
        <Text style={genTxt}>{`Pangalan:  ${name}`}</Text>
        <Text style={genTxt}>{`Edad:  ${age} Na Taon`}</Text>
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
    height: 100,
    width: 100,
    borderColor: COLORS.greenPrimary,
    borderWidth: 8,
    borderRadius: 50,
  },
  detailsWrapper: {
    // backgroundColor: 'lightblue',
    height: '100%',
    width: '60%',
    gap: 5,
    alignItems: 'flex-start',
  },
  avatarWrapper: {
    // backgroundColor: 'lightpink',
    height: '100%',
    width: '40%',
  },
  genTxt: {
    fontSize: 22,
    width: '90%',
    fontFamily: 'QuiapoRegular',
    borderColor: COLORS.greenPrimary,
    backgroundColor: COLORS.greenSecond,
    paddingVertical: 6,
    borderWidth: 2,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ProfileSection
