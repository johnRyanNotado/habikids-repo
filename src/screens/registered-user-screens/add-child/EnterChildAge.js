import React, { useEffect } from 'react'
import { BackHandler, ToastAndroid, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import EnterChileAgeNavBar from '../../../components/enter-child-age/EnterChildAgeNavBar'
import { globalStyles } from '../../../styles/GlobalStyles'
import EnterChildAgeMainSec from '../../../components/enter-child-age/EnterChildAgeMainSec'
import { useChildDataContext } from '../../context-api/ContextAPI'

const EnterChildAge = ({ navigation }) => {
  const { childData, setChildData, newChild, setNewChild } =
    useChildDataContext()

  const { container, centered } = globalStyles

  // Use effect for handling backpress
  useEffect(() => {
    const backAction = () => {
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
    navigation.navigate('EnterChildName')
  }

  const saveChild = () => {
    const newChildObj = {
      id: Date.now(),
      name: newChild.name,
      avatarNum: newChild.avatarNum,
      age: newChild.age,
    }

    // add the new child to the child data
    setChildData([...childData, newChildObj])
  }

  const handleRightArrBtn = () => {
    // check if age is empty
    if (!newChild.age) {
      ToastAndroid.show('Pick an age!', ToastAndroid.SHORT)
      return
    }

    // check if iconNum is empty
    if (!newChild.avatarNum) {
      ToastAndroid.show('Pick an icon!', ToastAndroid.SHORT)
      return
    }

    // save the new child
    saveChild()

    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Home',
        },
      ],
    })
  }

  return (
    <View style={[container, centered]}>
      <EnterChileAgeNavBar
        handleLeftArrBtn={handleLeftArrBtn}
        handleRightArrBtn={handleRightArrBtn}
      />
      <EnterChildAgeMainSec />
    </View>
  )
}

export default EnterChildAge
