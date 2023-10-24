import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { globalStyles } from '../styles/GlobalStyles'

const LoadingScreen = () => {
  return (
    <View style={[globalStyles.container, { justifyContent: 'center' }]}>
      <ActivityIndicator size={'large'} color={'lightblue'} />
    </View>
  )
}

export default LoadingScreen
