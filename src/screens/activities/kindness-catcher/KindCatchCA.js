import React, { useState } from 'react'
import { Image, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../../styles/GlobalStyles'
import { useKindCatchContext } from './KindCatchContext'
import ActivityCard from '../../../components/ActivityCard'
import JeepSvg from '../../../svg/bg/JeepSvg'
import { getAni } from '../../../utilities/getAni'
import Animated, {
  SlideInRight,
  SlideInUp,
  SlideOutUp,
  SlideOutRight,
} from 'react-native-reanimated'
import COLORS from '../../../constants/colors'

const ACTIVITY_CARD = 'ACTIVITY_CARD'
const INSTRUCTIONS = 'INSTRUCTIONS'
const INSTRUCTIONS_DURATION = 10000

const KindCatchCA = ({ navigation }) => {
  const { score, timerLimit, GAME_INSTRUCTIONS, NARRATOR } =
    useKindCatchContext()
  const { container, centered } = globalStyles
  const [content, setContent] = useState(ACTIVITY_CARD)

  const handleStartBtn = () => {
    score.value = 0
    timerLimit.value = 30
    setContent(INSTRUCTIONS)
    const instrucTimeout = setTimeout(() => {
      setContent(ACTIVITY_CARD)
      clearTimeout(instrucTimeout)
    }, INSTRUCTIONS_DURATION)

    const startTimeout = setTimeout(() => {
      navigation.navigate('KindCatch')
      clearTimeout(startTimeout)
    }, INSTRUCTIONS_DURATION + 1000)
  }

  const handleCancelBtn = () => {
    navigation.goBack()
  }

  console.log('Called: KindCatchCA Screen')
  return (
    <Animated.View style={[container, centered]}>
      <JeepSvg />
      {content === ACTIVITY_CARD ? (
        <ActivityCard
          score={score.value}
          handleStartBtn={handleStartBtn}
          handleCancelBtn={handleCancelBtn}
        />
      ) : (
        <Animated.View
          style={[
            container,
            centered,
            { width: '100%', justifyContent: 'flex-start' },
          ]}
        >
          <Animated.View
            style={[centered, styles.narrTxtWrapper]}
            entering={SlideInUp.duration(1000)}
            exiting={SlideOutUp.duration(500)}
          >
            <Text style={styles.narrTxt}>{GAME_INSTRUCTIONS}</Text>
          </Animated.View>
          <Animated.View
            style={[globalStyles.positionAbsolute, styles.narrWrapper]}
            entering={SlideInRight.duration(1000)}
            exiting={SlideOutRight.duration(500)}
          >
            <Image
              style={styles.narrStyle}
              source={getAni.characters[`${NARRATOR}`]?.link}
            />
          </Animated.View>
        </Animated.View>
      )}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  narrWrapper: {
    top: 'auto',
    left: 'auto',
    right: 0,
    bottom: 0,
  },
  narrStyle: {
    height: 300,
    width: 300,
  },
  narrTxtWrapper: {
    backgroundColor: COLORS.whiteTrans,
    borderRadius: 50,
    paddingVertical: 20,
    width: '80%',
    marginTop: 40,
  },
  narrTxt: {
    fontSize: 30,
    color: COLORS.accent,
    fontFamily: 'QuiapoRegular',
  },
})

export default KindCatchCA
