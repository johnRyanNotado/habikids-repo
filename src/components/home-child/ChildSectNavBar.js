import React from 'react'
import { Image, View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import { useChildDataContext } from '../../screens/registered-user-screens/NavScreen'
import COLORS from '../../constants/colors'
import { corresIcon } from '../../utilities/determineAvatar'
import { useChildSectionContext } from '../../screens/registered-user-screens/child-section/NavScrChild'

const ChildSectNavBar = (props) => {
  const { backBtn } = props
  const { chosenChild } = useChildDataContext()
  const { setIsProfileClicked } = useChildSectionContext()
  const { avatarNum } = chosenChild
  const { navBarWrapper, navBarElement, avatarStyle } = styles

  const handleProfileBtn = () => {
    setIsProfileClicked((prevState) => !prevState)
  }

  return (
    <View style={navBarWrapper}>
      <View style={[navBarElement, { width: '13%' }]}>{backBtn}</View>
      <View style={navBarElement}></View>
      <View style={[navBarElement, { width: '13%' }]}>
        <TouchableOpacity onPress={handleProfileBtn}>
          <Image source={corresIcon[avatarNum].link} style={avatarStyle} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navBarWrapper: {
    height: '20%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 60,
  },
  navBarElement: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarStyle: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    marginBottom: 4,
    borderWidth: 3,
    borderColor: COLORS.white,
    borderRadius: 25,
  },
})

export default ChildSectNavBar
