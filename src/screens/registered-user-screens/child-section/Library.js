import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../../styles/GlobalStyles'
import { BackHandler, View } from 'react-native'
import ChildSectNavBar from '../../../components/home-child/ChildSectNavBar'
import ProfileCard from '../../../components/home-child/ProfileCard'
import LibraryMainSect from '../../../components/library/LibraryMainSect'
import { useChildSectionContext } from '../../context-api/ContextAPI'
import LibrariesSvg from '../../../svg/bg/LibrariesSvg'
import BackBtn from '../../../components/BackBtn'
const Library = ({ navigation }) => {
  const { isProfileClicked } = useChildSectionContext()

  // handle back press -> navigate to home screen
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

  // This function will navigate the user to the previous screen.
  const handleUndoBtn = () => {
    navigation.goBack()
  }

  // This function will navigate the user to the activities screen.
  const handleJeepBtn = () => {
    navigation.navigate('Activities')
  }

  // This function will navigate the user to the lessons screen.
  const handleBooksBtn = () => {
    navigation.navigate('Lessons')
  }

  return (
    <View style={globalStyles.container}>
      <ChildSectNavBar backBtn={<BackBtn onPress={handleUndoBtn} />} />
      <LibraryMainSect
        handleJeepBtn={handleJeepBtn}
        handleBooksBtn={handleBooksBtn}
      />
      {isProfileClicked ? <ProfileCard /> : <></>}
      <LibrariesSvg />
    </View>
  )
}

export default Library
