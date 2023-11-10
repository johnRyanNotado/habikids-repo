import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'

const ConnectTheDots = (props) => {
  const { data } = props
  const { container, centered } = globalStyles
  return (
    <View style={[container, centered]}>
      <Text>SHEESH</Text>
    </View>
  )
}

export default ConnectTheDots
