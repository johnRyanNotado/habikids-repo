import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../styles/GlobalStyles'
import { Text, View } from 'react-native'
import HomeNavBar from '../../components/home/HomeNavBar'
import HomeMainSection from '../../components/home/HomeMainSection'
import HomeFooterSection from '../../components/home/HomeFooterSection'
import handleBckPrsExit from '../../utilities/handleBckPrsExit'
import { SWGreenMain } from '../../constants/svg/stackedWaves'
import EMPTY_CHILD_OBJ from '../../constants/emptyChildObj'
import { useAppContext, useChildDataContext } from '../context-api/ContextAPI'
import LoadingScreen from '../LoadingScreen'
import ErrorScreen from '../ErrorScreen'

const Home = ({ navigation }) => {
  const { container, centered, bgStyleWNavBar } = globalStyles
  const { handleChosenChild, setChosenChild, setIsChildChosen, chosenChild } =
    useChildDataContext()
  const { isLoading, isError } = useAppContext()

  // Handle back press: when click => exit app
  useEffect(handleBckPrsExit, [])

  // Initializes chosen child obj
  useEffect(() => {
    setChosenChild(EMPTY_CHILD_OBJ)
    setIsChildChosen(false)
  }, [])

  // This function will navigate the user to the EnterChildName screen
  const handleAddBtn = () => {
    navigation.navigate('EnterChildName')
  }

  // This function will navigate the user to the Settings screen
  const handleSettingsBtn = () => {
    navigation.navigate('Settings')
  }

  // This function will navigate the user to the ManageProfile screen
  const handleManageProfileBtn = () => {
    navigation.navigate('ManageProfiles')
  }

  // on child chosen -> set chosenChild and redirect to NavScrChild
  const handleOnChildChosen = (childObj) => {
    handleChosenChild(childObj)
    navigation.navigate('NavScrChild')
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  if (isError) {
    return <ErrorScreen />
  }

  return (
    <View style={[container, centered]}>
      <HomeNavBar
        handleSettingsBtn={handleSettingsBtn}
        handleManageProfileBtn={handleManageProfileBtn}
      />
      <View style={[container, centered, { width: '100%' }]}>
        <SWGreenMain style={bgStyleWNavBar} />
        <HomeMainSection
          handleAddBtn={handleAddBtn}
          handleOnChildChosen={handleOnChildChosen}
        />
        {/* <HomeFooterSection /> */}
      </View>
    </View>
  )
}

export default Home
