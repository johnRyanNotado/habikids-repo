import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import COLORS from '../../constants/colors'
import { corresIcon } from '../../utilities/determineAvatar'
import { globalStyles } from '../../styles/GlobalStyles'
import { AVATAR_LIST } from '../../constants/avatarList'
import AvatarList from './AvatarList'
import Button from '../Button'
import {
  useChildDataContext,
  useChosenChildContext,
} from '../../screens/context-api/ContextAPI'

const ChooseAvatar = () => {
  const { chosenChild, handleChosenChild } = useChildDataContext()
  const { isChoosingAvatar, setIsChoosingAvatar } = useChosenChildContext()
  const { centered, positionAbsolute } = globalStyles
  const {
    chosenChildCard,
    selectIconsCard,
    selectIconsWrapper,
    avatar,
    avatarContainerStyle,
    chosenPictureWrapper,
    chosenPicLabel,
    notChosenPictureWrapper,
    saveBtn,
  } = styles

  const { id, age, name, avatarNum } = chosenChild

  // Will set the new avatar for the chosenChild useState
  const handleSelectedAvatar = (avatarId) => {
    const newAvatar = avatarId

    // set selectedAvatar useState
    setSelectededAvatar(avatarId)

    // handle the chosenChild state
    handleChosenChild({ id: id, name: name, age: age, avatarNum: newAvatar })
  }

  // will set another style for the selected avatar
  const [selectedAvatar, setSelectededAvatar] = useState(chosenChild.avatarNum)
  const renderItem = ({ item }) => {
    return (
      <AvatarList
        id={item.id}
        selected={item.id === selectedAvatar}
        onSelect={() => handleSelectedAvatar(item.id)}
      />
    )
  }
  return (
    <View style={[centered, positionAbsolute, selectIconsWrapper]}>
      <View style={[chosenChildCard, selectIconsCard]}>
        <View style={chosenPictureWrapper}>
          <Image source={corresIcon[avatarNum]?.link} style={avatar} />
          <Text style={chosenPicLabel}>Pumili ng Bagong Avatar</Text>
        </View>
        <View style={[centered, notChosenPictureWrapper]}>
          <View style={{ height: '85%' }}>
            <FlatList
              data={AVATAR_LIST}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              numColumns={3}
              contentContainerStyle={avatarContainerStyle}
            />
          </View>
          <View
            style={[centered, { height: '15%', justifyContent: 'flex-end' }]}
          >
            <Button
              label={'Save'}
              btnStyle={saveBtn}
              txtStyle={{ color: COLORS.white }}
              onPress={() => setIsChoosingAvatar(!isChoosingAvatar)}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chosenChildCard: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 20,
    elevation: 5,
    width: 400,
    height: 235,
  },
  selectIconsWrapper: {
    zIndex: 10,
  },
  selectIconsCard: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    height: 260,
    width: 420,
  },
  avatar: {
    height: 100,
    width: 100,
    borderColor: COLORS.greenPrimary,
    borderWidth: 8,
    borderRadius: 50,
  },
  chosenPictureWrapper: {
    width: '40%',
    height: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  chosenPicLabel: {
    paddingTop: 20,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: 1,
    fontFamily: 'QuiapoRegular',
  },
  notChosenPictureWrapper: {
    width: '60%',
    height: '100%',
  },
  avatarContainerStyle: {
    justifyContent: 'center',
  },
  saveBtn: {
    backgroundColor: COLORS.greenPrimary,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },
})

export default ChooseAvatar
