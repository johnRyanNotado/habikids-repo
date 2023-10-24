import React, { useEffect, createContext, useContext } from 'react'
import { BackHandler, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getImg } from '../../../utilities/getImg'
import { useChildSectionContext } from './NavScrChild'
import ChildSectNavBar from '../../../components/home-child/ChildSectNavBar'
import HomeChildMainSect from '../../../components/home-child/HomeChildMainSect'
import ProfileCard from '../../../components/home-child/ProfileCard'
import { globalStyles } from '../../../styles/GlobalStyles'

export const HomeChildSectionContext = createContext()
export const useHomeChildSectionContext = () =>
  useContext(HomeChildSectionContext)

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

  // handle records button
  const handleRecordsBtn = () => {
    navigation.navigate('Records')
  }

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
      <SafeAreaView style={container}>
        <ImageBackground
          resizeMode="cover"
          style={container}
          source={getImg.bg.bahayKubo.link}
        >
          <ChildSectNavBar />
          <HomeChildMainSect />

          {isProfileClicked ? <ProfileCard /> : <></>}
        </ImageBackground>
      </SafeAreaView>
    </HomeChildSectionContext.Provider>
  )
}

export default HomeChild
