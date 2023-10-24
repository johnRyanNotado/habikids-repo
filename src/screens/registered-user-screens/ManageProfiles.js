import React, { useState, useEffect, createContext, useContext } from 'react'
import { BackHandler, View, ScrollView, Text, Switch } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import ManageProfileNavBar from '../../components/manage-profile/ManageProfileNavBar'
import ManageProfileAcc from '../../components/manage-profile/ManageProfileAcc'
import ManageProfileOverlay from '../../components/manage-profile/ManageProfileOverlay'
import { useChildDataContext } from './NavScreen'
import ChildSect from '../../components/manage-profile/ChildSect'

export const ChosenChildContext = createContext()
export const useChosenChildContext = () => useContext(ChosenChildContext)

const ManageProfiles = ({ navigation }) => {
  const { handleChosenChild, isChildChosen } = useChildDataContext()
  const { custContainer, cardWrapper } = styles
  const { centered, container } = globalStyles

  // handle back press (navigate to home screen)
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

  // for showing the avatar selection component
  const [isChoosingAvatar, setIsChoosingAvatar] = useState(false)

  // for showing the dropdown for age selection
  const [isAgeOpen, setIsAgeOpen] = useState(false)

  // for showing the dropdown for my account selection
  const [isMyAccOpen, setIsMyAccOpen] = useState(false)

  // for allowing deletion of learners
  const [isDeleteEnabled, setIsDeleteEnabled] = useState(false)

  // for logout
  const handleLogout = () => {
    navigation.navigate('Welcome')
  }

  const handleLeftArrBtn = () => {
    navigation.goBack()
  }

  return (
    <ChosenChildContext.Provider
      value={{
        isChoosingAvatar,
        setIsChoosingAvatar,
        isAgeOpen,
        setIsAgeOpen,
        isMyAccOpen,
        setIsMyAccOpen,
        isDeleteEnabled,
        setIsDeleteEnabled,
      }}
    >
      <SafeAreaView style={[container, centered, custContainer]}>
        <ManageProfileNavBar handleLeftArrBtn={handleLeftArrBtn} />
        <View style={[container, centered, { justifyContent: 'flex-start' }]}>
          <View style={cardWrapper}>
            <ManageProfileAcc handleLogout={handleLogout} />
            <ChildSect />
          </View>
        </View>

        {/* Show if a child is selected */}
        {isChildChosen ? <ManageProfileOverlay /> : <></>}
      </SafeAreaView>
    </ChosenChildContext.Provider>
  )
}

const styles = {
  custContainer: {
    backgroundColor: COLORS.greenPrimary,
    width: '100%',
  },
  cardWrapper: {
    backgroundColor: 'white',
    paddingLeft: 30,
    paddingTop: 15,
    paddingBottom: 20,
    borderRadius: 20,
    elevation: 5,
    width: '95%',
    height: '95%',
    minHeight: 290,
    maxHeight: 310,
    minWidth: 600,
    maxWidth: 715,
  },
}

export default ManageProfiles
