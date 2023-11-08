import React, { useState, useEffect, createContext, useContext } from 'react'
import {
  BackHandler,
  View,
  ScrollView,
  Text,
  Switch,
  Alert,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import ManageProfileNavBar from '../../components/manage-profile/ManageProfileNavBar'
import ManageProfileAcc from '../../components/manage-profile/ManageProfileAcc'
import ManageProfileOverlay from '../../components/manage-profile/ManageProfileOverlay'
import ChildSect from '../../components/manage-profile/ChildSect'
import {
  useChildDataContext,
  ChosenChildContext,
  useAppContext,
} from '../context-api/ContextAPI'
import LoadingScreen from '../LoadingScreen'
import ErrorScreen from '../ErrorScreen'

const ManageProfiles = ({ navigation }) => {
  const { handleChosenChild, isChildChosen } = useChildDataContext()
  const { isLoading, isError, setDataChanged, setIsError, setUser } =
    useAppContext()
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

  // for the handling the response of the server when updating the learners
  const [response, setResponse] = useState(null)

  useEffect(() => {
    console.log('Response: ', response)
    if (response) {
      if (response.id === 101) {
        setDataChanged((prevState) => prevState + 1)
      } else if (response.id === 408) {
        Alert.alert(
          'Hindi tanggap ang pangalan.',
          'Ang pangalan na iyong inilagay ay mayroon ng kapareho.'
        )
      } else if (response.id === 500) {
        console.log('Response: ', response)
        setIsError(true)
      } else {
        Alert.alert(
          'May problemang nangyari.',
          'Maaring subukan uli pagkatapos ng ilang minuto.'
        )
      }
    }
  }, [response])

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
    setUser(null)
  }

  const handleLeftArrBtn = () => {
    navigation.goBack()
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  if (isError) {
    return <ErrorScreen />
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
        response,
        setResponse,
      }}
    >
      <View style={[container, centered, custContainer]}>
        <ManageProfileNavBar handleLeftArrBtn={handleLeftArrBtn} />
        <View style={[container, centered]}>
          <View style={cardWrapper}>
            <ManageProfileAcc handleLogout={handleLogout} />
            <ChildSect />
          </View>
        </View>

        {/* Show if a child is selected */}
        {isChildChosen ? <ManageProfileOverlay /> : <></>}
      </View>
    </ChosenChildContext.Provider>
  )
}

const styles = {
  custContainer: {
    backgroundColor: COLORS.greenPrimary,
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
