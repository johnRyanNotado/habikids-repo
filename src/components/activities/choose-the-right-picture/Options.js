import React from 'react'
import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import Animated, { BounceIn } from 'react-native-reanimated'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import CorrectSection from './CorrectSection'
import WrongSection from './WrongSection'
import { Audio } from 'expo-av'

const Options = (props) => {
  const { goBack } = props
  const { imgSect, gestureHandlerStyle } = styles
  const { centered } = globalStyles

  const leftEnteringProps = { delay: 300, duration: 1000 }
  const rightEnteringProps = { delay: 1300, duration: 1000 }

  const playSound = async (soundVal) => {
    const { sound } = await Audio.Sound.createAsync(soundVal)
    await sound.playAsync()
  }

  const renderInRandomOrder = () => {
    const num = Math.random() - 0.5

    if (num > 0) {
      return (
        <>
          <CorrectSection
            goBack={goBack}
            enteringProps={leftEnteringProps}
            playSound={playSound}
          />
          <WrongSection
            enteringProps={rightEnteringProps}
            playSound={playSound}
          />
        </>
      )
    } else {
      return (
        <>
          <WrongSection
            enteringProps={leftEnteringProps}
            playSound={playSound}
          />
          <CorrectSection
            goBack={goBack}
            enteringProps={rightEnteringProps}
            playSound={playSound}
          />
        </>
      )
    }
  }
  return (
    <GestureHandlerRootView style={gestureHandlerStyle}>
      <Animated.View
        entering={BounceIn.duration(1000)}
        style={[centered, imgSect]}
      >
        {renderInRandomOrder()}
      </Animated.View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  gestureHandlerStyle: {
    height: '70%',
    width: '100%',
  },
  imgSect: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
})

export default Options
