import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../../styles/GlobalStyles'
import {
  ImageBackground,
  BackHandler,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import { getImg } from '../../../utilities/getImg'
import ChildSectNavBar from '../../../components/home-child/ChildSectNavBar'
import { useChildSectionContext } from './NavScrChild'
import ProfileCard from '../../../components/home-child/ProfileCard'
import LibraryMainSect from '../../../components/library/LibraryMainSect'
import COLORS from '../../../constants/colors'
import { Ionicons } from '@expo/vector-icons'

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

  // Back button component
  const backBtn = (
    <TouchableOpacity onPress={handleUndoBtn}>
      <View style={[globalStyles.centered, styles.homeBtnWrapper]}>
        <Ionicons name="arrow-undo" size={30} color={COLORS.accent} />
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground
        resizeMode="cover"
        style={{ flex: 1 }}
        source={getImg.bg.table.link}
      >
        <ChildSectNavBar backBtn={backBtn} />
        <LibraryMainSect
          handleJeepBtn={handleJeepBtn}
          handleBooksBtn={handleBooksBtn}
        />
        {isProfileClicked ? <ProfileCard /> : <></>}
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btnWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
    height: '100%',
  },
  homeBtnWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.white,
    borderWidth: 3,
  },
})
export default Library
