import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../../styles/GlobalStyles'
import EnterChildNameNavBar from '../../../components/enter-child-name/EnterChildNameNavBar'
import EnterChildNameMainSec from '../../../components/enter-child-name/EnterChildNameMainSec'
import { BackHandler, ToastAndroid } from 'react-native'
import { useChildDataContext } from '../NavScreen'
import EMPTY_CHILD_OBJ from '../../../constants/emptyChildObj'

const EnterChildName = ({ navigation }) => {
  const { childData, newChild, setNewChild } = useChildDataContext()

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

    return () => backHandler.remove()
  }, [])

  const handleLeftArrBtn = () => {
    setNewChild(EMPTY_CHILD_OBJ)
    navigation.navigate('Home')
  }

  const handleRightArrBtn = () => {
    // check if name is empty
    if (!newChild.name) {
      ToastAndroid.show('Enter a valid name!', ToastAndroid.SHORT)
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
      console.log('name not unique!')
      ToastAndroid.show('Name should be unique!', ToastAndroid.SHORT)
      return
    }

    navigation.navigate('EnterChildAge')
  }

  return (
    <SafeAreaView style={[centered, container]}>
      <EnterChildNameNavBar
        handleLeftArrBtn={handleLeftArrBtn}
        handleRightArrBtn={handleRightArrBtn}
      />
      <EnterChildNameMainSec />
    </SafeAreaView>
  )
}

export default EnterChildName
