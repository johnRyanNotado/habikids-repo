import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { globalStyles } from '../styles/GlobalStyles'
import COLORS from '../constants/colors'

const LoadingScreen = () => {
  return (
    <View
      style={[
        globalStyles.container,
        { justifyContent: 'center', backgroundColor: COLORS.greenSecond },
      ]}
    >
      <ActivityIndicator size={'large'} color={COLORS.greenPrimary} />
    </View>
  )
}

export default LoadingScreen
