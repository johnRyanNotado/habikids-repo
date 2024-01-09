import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { AVATAR_LIST } from '../../constants/avatarList'
import CustRadioBtnAvatar from './CustRadioBtnAvatar'
import { useChildDataContext } from '../../screens/context-api/ContextAPI'
import { WINDOW_HEIGHT } from '../../constants/windowConstants'

const PickAvatar = () => {
  const { newChild, setNewChild } = useChildDataContext()
  const [selectedAvatar, setSelectedAvatar] = useState(null)
  const {
    pickAvatarWrapper,
    avatarLabelWrapper,
    avatarLabel,
    avatarImagesWrapper,
    avatarContainerStyle,
  } = styles

  // This function will change the value of the newChild and selectedAvatar useStates
  const handleAvatarRadioBtn = (avatarNum) => {
    // set new age value
    setNewChild({ ...newChild, avatarNum: avatarNum })

    // change the 'selectedAge' so the style will change
    setSelectedAvatar(avatarNum)
  }

  const renderItem = ({ item }) => {
    return (
      <CustRadioBtnAvatar
        id={item.id}
        selected={item.id === selectedAvatar}
        onSelect={() => handleAvatarRadioBtn(item.id)}
      />
    )
  }

  // useEffect to save the icon number if the user went back to enterName screen
  useEffect(() => {
    // check if there is a value for age
    if (newChild.avatarNum) {
      setSelectedAvatar(newChild.avatarNum)
    }
  }, [])

  return (
    <View style={pickAvatarWrapper}>
      <View style={avatarLabelWrapper}>
        <Text style={avatarLabel}>Pumili ng Avatar</Text>
      </View>
      <View style={avatarImagesWrapper}>
        <FlatList
          data={AVATAR_LIST}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={8}
          contentContainerStyle={avatarContainerStyle}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pickAvatarWrapper: {
    height: 0.65 * WINDOW_HEIGHT,
    width: '100%',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarLabelWrapper: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarLabel: {
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'QuiapoRegular',
  },
  avatarImagesWrapper: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainerStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    // height: '100%',
    marginTop: 5,
  },
})

export default PickAvatar
