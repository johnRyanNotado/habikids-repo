import React from 'react'
import { StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import Animated, { BounceIn } from 'react-native-reanimated'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import CorrectSection from './CorrectSection'
import WrongSection from './WrongSection'

const Options = (props) => {
  const { goBack } = props
  const { imgSect, gestureHandlerStyle } = styles
  const { centered } = globalStyles

  const leftEnteringProps = { delay: 300, duration: 1000 }
  const rightEnteringProps = { delay: 1300, duration: 1000 }

  const renderInRandomOrder = () => {
    const num = Math.random() - 0.5

    if (num > 0) {
      return (
        <>
          <CorrectSection goBack={goBack} enteringProps={leftEnteringProps} />
          <WrongSection enteringProps={rightEnteringProps} />
        </>
      )
    } else {
      return (
        <>
          <WrongSection enteringProps={leftEnteringProps} />
          <CorrectSection goBack={goBack} enteringProps={rightEnteringProps} />
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
