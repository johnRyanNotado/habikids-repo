import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../../styles/GlobalStyles'
import { BackHandler, ImageBackground, View } from 'react-native'
import ChildSectNavBar from '../../../components/home-child/ChildSectNavBar'
import ProfileCard from '../../../components/home-child/ProfileCard'
import LibraryMainSect from '../../../components/library/LibraryMainSect'
import {
  useAppContext,
  useChildSectionContext,
} from '../../context-api/ContextAPI'
import LibrariesSvg from '../../../svg/bg/LibrariesSvg'
import BackBtn from '../../../components/BackBtn'
import { Audio } from 'expo-av'
import { getSound } from '../../../utilities/getSound'
import { getImg } from '../../../utilities/getImg'

const Library = ({ navigation }) => {
  const { sound, playSound, stopSound, setSoundBg } = useAppContext()
  const { isProfileClicked } = useChildSectionContext()
  const soundComp = new Audio.Sound()
  const playThisSound = async (soundVal) => {
    try {
      await soundComp.loadAsync(soundVal)
      await soundComp.playAsync()
    } catch (err) {
      console.log('Errod: ', err)
    }
  }

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

    return async () => {
      backHandler.remove()
      await soundComp.unloadAsync()
    }
  }, [])

  // This function will navigate the user to the previous screen.
  const handleUndoBtn = () => {
    navigation.goBack()
  }

  // This function will navigate the user to the activities screen.
  const handleJeepBtn = async () => {
    await playThisSound(getSound.effects.jeepney.link)

    await stopSound()
    await playSound(getSound.background.activity.link)
    setSoundBg(getSound.background.activity.link)
    navigation.navigate('Activities')
  }

  // This function will navigate the user to the lessons screen.
  const handleBooksBtn = async () => {
    await playThisSound(getSound.effects.book.link)
    navigation.navigate('Lessons')
  }

  return (
    <ImageBackground
      style={globalStyles.container}
      source={getImg.bg.table.link}
    >
      <View style={globalStyles.container}>
        <ChildSectNavBar backBtn={<BackBtn onPress={handleUndoBtn} />} />
        <LibraryMainSect
          handleJeepBtn={handleJeepBtn}
          handleBooksBtn={handleBooksBtn}
        />
        {isProfileClicked ? <ProfileCard /> : <></>}
        <LibrariesSvg />
      </View>
    </ImageBackground>
  )
}

export default Library
