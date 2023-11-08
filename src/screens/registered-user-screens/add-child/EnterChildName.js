import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../../styles/GlobalStyles'
import EnterChildNameNavBar from '../../../components/enter-child-name/EnterChildNameNavBar'
import EnterChildNameMainSec from '../../../components/enter-child-name/EnterChildNameMainSec'
import { BackHandler, Vibration, View } from 'react-native'
import EMPTY_CHILD_OBJ from '../../../constants/emptyChildObj'
import {
  useAppContext,
  useChildDataContext,
} from '../../context-api/ContextAPI'
import FieldsError from '../../../components/login-signup/FieldsError'
import emptyChildObj from '../../../constants/emptyChildObj'
import ErrorScreen from '../../ErrorScreen'
import LoadingScreen from '../../LoadingScreen'

const EnterChildName = ({ navigation }) => {
  const { isError, isLoading } = useAppContext()
  const { childData, newChild, setNewChild } = useChildDataContext()
  const [fieldsErr, setFieldsErr] = useState('')
  const { container, centered } = globalStyles

  // handling backpress (redirects to home screen)
  useEffect(() => {
    const backAction = () => {
      setNewChild(EMPTY_CHILD_OBJ)
      navigation.goBack()
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => {
      setFieldsErr('')
      setNewChild(emptyChildObj)
      backHandler.remove()
    }
  }, [])

  // This function will navigate the user to home screen
  const handleLeftArrBtn = () => {
    setNewChild(EMPTY_CHILD_OBJ)
    navigation.navigate('Home')
  }

  const handleRightArrBtn = () => {
    // check if name is empty
    if (!newChild.name) {
      Vibration.vibrate(1000)
      setFieldsErr('Hindi tanggap pangalan!')
      console.log('Name is empty')
      return
    }

    // check if name is not unique
    let isUnique = true
    childData.forEach((element) => {
      if (element.name === newChild.name) {
        isUnique = false
      }
    })

    if (!isUnique) {
      Vibration.vibrate(1000)
      setFieldsErr('Dapat walang kapareho ang pangalan!')
      return
    }
    setFieldsErr('')
    navigation.navigate('EnterChildAge')
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  if (isError) {
    return <ErrorScreen />
  }

  return (
    <View style={[centered, container]}>
      <FieldsError
        fieldsErr={fieldsErr}
        custStyle={{ top: '85%', zIndex: 5 }}
      />
      <EnterChildNameNavBar
        handleLeftArrBtn={handleLeftArrBtn}
        handleRightArrBtn={handleRightArrBtn}
      />
      <EnterChildNameMainSec />
    </View>
  )
}

export default EnterChildName
