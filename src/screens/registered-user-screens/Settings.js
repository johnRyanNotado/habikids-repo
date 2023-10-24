import React, { useEffect } from 'react'
import { View, StyleSheet, BackHandler } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../styles/GlobalStyles'
import SettingsNavBar from '../../components/settings/SettingsNavBar'
import COLORS from '../../constants/colors'
import SettingsMainSect from '../../components/settings/SettingsMainSect'

const Settings = ({ navigation }) => {
  const { custContainer } = styles
  const { container, centered } = globalStyles
  // handle backpress (goBack)
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
    navigation.goBack()
  }
  return (
    <SafeAreaView style={[container, custContainer]}>
      <SettingsNavBar handleLeftArrBtn={handleLeftArrBtn} />
      <View style={[container, centered, { justifyContent: 'flex-start' }]}>
        <SettingsMainSect />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  custContainer: {
    backgroundColor: COLORS.greenPrimary,
  },
})

export default Settings
