import React from 'react'
import { View, StyleSheet } from 'react-native'
import COLORS from '../../constants/colors'
import { useChildDataContext } from '../../screens/registered-user-screens/NavScreen'
import EMPTY_CHILD_OBJ from '../../constants/emptyChildObj'
import Button from '../Button'

const ButtonSection = () => {
  const { setChildData, chosenChild, setIsChildChosen, setChosenChild } =
    useChildDataContext()
  const { editBtnWrapper, okayBtn, cancelBtn } = styles

  // removes chosen child component
  const handleCancel = () => {
    setIsChildChosen(false)
    setChosenChild(EMPTY_CHILD_OBJ)
  }

  // saves the changes
  const handleOkay = () => {
    setIsChildChosen(false)
    setChosenChild(EMPTY_CHILD_OBJ)

    // replaces the value of the chosen child with a new one
    setChildData((prevItems) =>
      prevItems.map((item) => {
        if (item.id === chosenChild.id) {
          return chosenChild
        } else {
          return item
        }
      })
    )
  }
  return (
    <View style={editBtnWrapper}>
      <Button
        label="Cancel"
        onPress={handleCancel}
        btnStyle={cancelBtn}
        txtStyle={{
          color: COLORS.white,
        }}
      />
      <Button
        label="Okay"
        onPress={handleOkay}
        btnStyle={okayBtn}
        txtStyle={{
          color: COLORS.white,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  editBtnWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 20,
  },
  okayBtn: {
    backgroundColor: COLORS.greenPrimary,
    width: 100,
    paddingVertical: 10,
    borderRadius: 50,
    zIndex: -10,
  },
  cancelBtn: {
    backgroundColor: COLORS.grayPrimary,
    width: 100,
    paddingVertical: 10,
    borderRadius: 50,
  },
})

export default ButtonSection
