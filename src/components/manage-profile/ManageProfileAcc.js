import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useChildDataContext } from '../../screens/registered-user-screens/NavScreen'
import DropDownPicker from 'react-native-dropdown-picker'
import { useChosenChildContext } from '../../screens/registered-user-screens/ManageProfiles'
import { MY_ACC_ITEMS } from '../../constants/dropDownItems'

const ManageProfileAcc = (props) => {
  const { handleLogout } = props
  const { isChildChosen } = useChildDataContext()
  const { isMyAccOpen, setIsMyAccOpen } = useChosenChildContext()
  const [selectedAcc, setSelectedAcc] = useState('sample@gmail.com')
  const {
    sectionWrapper,
    genFont,
    custBorderWrapper,
    dropDownContainerStyle,
    pickerWrapper,
  } = styles

  // closes the dropdown if a child is chosen
  useEffect(() => {
    if (isChildChosen) {
      setIsMyAccOpen(false)
    }
  }, [isChildChosen])

  // items for dropdown
  const items = MY_ACC_ITEMS

  return (
    <View style={sectionWrapper}>
      <Text style={genFont}>Ang Iyong Account</Text>
      <View style={custBorderWrapper}>
        <View style={pickerWrapper}>
          <DropDownPicker
            items={items}
            open={isMyAccOpen}
            setOpen={setIsMyAccOpen}
            value={selectedAcc}
            setValue={setSelectedAcc}
            dropDownDirection="BOTTOM"
            dropDownContainerStyle={dropDownContainerStyle}
            onChangeValue={(value) => {
              if (value === 'Logout') {
                handleLogout()
              }
            }}
            style={{
              borderWidth: 0,
              backgroundColor: '',
              paddingLeft: 15,
            }}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    height: 30,
    width: '100%',
    zIndex: 15,
    paddingRight: 30,
  },
  genFont: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'QuiapoRegular',
  },
  custBorderWrapper: {
    borderWidth: 1,
    borderRadius: 18,
    width: 300,
    zIndex: 10,
  },
  pickerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropDownContainerStyle: {
    borderRadius: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingLeft: 10,
  },
})

export default ManageProfileAcc
