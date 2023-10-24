import React, { useState, useEffect } from 'react'
import { View, Image, TextInput } from 'react-native'
import COLORS from '../../constants/colors'
import { useChildDataContext } from '../../screens/registered-user-screens/NavScreen'
import { corresIcon } from '../../utilities/determineAvatar'
import { TouchableOpacity } from 'react-native-gesture-handler'
import DropDownPicker from 'react-native-dropdown-picker'
import { useChosenChildContext } from '../../screens/registered-user-screens/ManageProfiles'
import { AGE_ITEMS } from '../../constants/dropDownItems'

const EditSection = () => {
  const { chosenChild, handleChosenChild } = useChildDataContext()
  const { isChoosingAvatar, setIsChoosingAvatar, isAgeOpen, setIsAgeOpen } =
    useChosenChildContext()
  const {
    editConfigWrapper,
    avatar,
    genWrapperBorder,
    pickerWrapper,
    txtInputWrapper,
    inputFontStyle,
    ageNameWrapper,
    custDropDownStyle,
  } = styles
  // item for dropdown
  const [items, setItems] = useState(AGE_ITEMS)
  const { id, name, age, avatarNum } = chosenChild
  const [selectedAge, setSelectedAge] = useState(chosenChild.age)

  // useEffect for changing selected age
  useEffect(() => {
    handleChosenChild({
      id: id,
      name: name,
      age: selectedAge,
      avatarNum: avatarNum,
    })
  }, [selectedAge])

  const handleNameChange = (newName) => {
    handleChosenChild({
      id: id,
      name: newName,
      age: age,
      avatarNum: avatarNum,
    })
  }

  return (
    <View style={editConfigWrapper}>
      <TouchableOpacity onPress={() => setIsChoosingAvatar(!isChoosingAvatar)}>
        <Image source={corresIcon[avatarNum]?.link} style={avatar} />
      </TouchableOpacity>
      <View style={ageNameWrapper}>
        <View style={genWrapperBorder}>
          <View style={txtInputWrapper}>
            <TextInput
              style={inputFontStyle}
              defaultValue={`${name}`}
              value={name}
              onChangeText={(new_name) => handleNameChange(new_name)}
            />
          </View>
        </View>
        <View style={genWrapperBorder}>
          <View style={pickerWrapper}>
            <DropDownPicker
              items={items}
              open={isAgeOpen}
              setOpen={setIsAgeOpen}
              value={selectedAge}
              setValue={setSelectedAge}
              textStyle={[inputFontStyle, { fontSize: 17 }]}
              dropDownDirection="BOTTOM"
              dropDownContainerStyle={{
                zIndex: 10,
              }}
              style={custDropDownStyle}
              containerSyle={{ display: 'none' }}
            />
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = {
  editTitleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  editConfigWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  avatar: {
    height: 100,
    width: 100,
    borderColor: COLORS.grayThird,
    borderWidth: 8,
    borderRadius: 50,
  },
  genWrapperBorder: {
    borderWidth: 1,
    borderRadius: 85,
    width: 170,
    height: 35,
    justifyContent: 'center',
  },
  pickerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtInputWrapper: {
    paddingLeft: 15,
    paddingTop: 3,
  },
  inputFontStyle: {
    fontWeight: '400',
    fontSize: 19,
    fontFamily: 'QuiapoRegular',
    height: 20,
  },
  ageNameWrapper: {
    gap: 10,
  },
  custDropDownStyle: {
    borderWidth: 0,
    backgroundColor: '',
    zIndex: 10,
    paddingLeft: 15,
  },
}
export default EditSection
