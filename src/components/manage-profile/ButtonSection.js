import React from 'react'
import { View, StyleSheet } from 'react-native'
import COLORS from '../../constants/colors'
import EMPTY_CHILD_OBJ from '../../constants/emptyChildObj'
import Button from '../Button'
import { editLearnerUrl } from '../../constants/db_config'
import {
  useAppContext,
  useChildDataContext,
  useChosenChildContext,
} from '../../screens/context-api/ContextAPI'

const ButtonSection = () => {
  const { chosenChild, setIsChildChosen, setChosenChild } =
    useChildDataContext()
  const { setResponse } = useChosenChildContext()
  const { user, setIsLoading, setIsError } = useAppContext()
  const { editBtnWrapper, okayBtn, cancelBtn } = styles

  // removes chosen child component
  const handleCancel = () => {
    setIsChildChosen(false)
    setChosenChild(EMPTY_CHILD_OBJ)
  }

  // saves the changes
  const handleOkay = async () => {
    setIsChildChosen(false)
    setChosenChild(EMPTY_CHILD_OBJ)

    try {
      const resp = await fetch(editLearnerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          user_id: user.user_id,
          learner_id: chosenChild.id,
          name: chosenChild.name,
          age: chosenChild.age,
          avatarNum: chosenChild.avatarNum,
        }),
      }).catch((err) => console.log(err))

      const response = await resp.json()
      setResponse(response)
    } catch (err) {
      console.log('Error: ', err)
      setIsError(true)
    }
    setIsLoading(false)
  }
  return (
    <View style={editBtnWrapper}>
      <Button
        label="Kanselahin"
        onPress={handleCancel}
        btnStyle={cancelBtn}
        txtStyle={{
          color: COLORS.white,
          fontFamily: 'QuiapoRegular',
        }}
      />
      <Button
        label="I-Save"
        onPress={handleOkay}
        btnStyle={okayBtn}
        txtStyle={{
          color: COLORS.white,
          fontFamily: 'QuiapoRegular',
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
