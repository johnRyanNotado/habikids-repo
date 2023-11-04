import React, { useEffect } from 'react'
import { BackHandler, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChildSectNavBar from '../../../components/home-child/ChildSectNavBar'
import HomeChildMainSect from '../../../components/home-child/HomeChildMainSect'
import ProfileCard from '../../../components/home-child/ProfileCard'
import { globalStyles } from '../../../styles/GlobalStyles'
import {
  useChildSectionContext,
  HomeChildSectionContext,
} from '../../context-api/ContextAPI'
import HomePageSvg from '../../../svg/bg/HomePageSvg'

const HomeChild = ({ navigation }) => {
  const { isProfileClicked } = useChildSectionContext()
  const { container } = globalStyles
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

  // This function will navigate the user to Records screen
  const handleRecordsBtn = () => {
    navigation.navigate('Records')
  }

  // This function will navigate the user to Library screen
  const handleBooksBtn = () => {
    navigation.navigate('Library')
  }

  return (
    <HomeChildSectionContext.Provider
      value={{
        handleRecordsBtn,
        handleBooksBtn,
      }}
    >
      <View style={container}>
        <ChildSectNavBar />
        <HomeChildMainSect />

        {isProfileClicked ? <ProfileCard /> : <></>}
        <HomePageSvg />
      </View>
    </HomeChildSectionContext.Provider>
  )
}

export default HomeChild
