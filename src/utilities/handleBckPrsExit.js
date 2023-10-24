import React from 'react'
import { BackHandler, Alert } from 'react-native'

export default handleBckPrsExit = () => {
  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      { text: 'YES', onPress: () => BackHandler.exitApp() },
    ])
    return true
  }

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction
  )

  return () => backHandler.remove()
}
