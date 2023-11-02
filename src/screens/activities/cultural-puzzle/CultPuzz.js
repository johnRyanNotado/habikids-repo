import React, { useEffect } from 'react'
import { View, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../../styles/GlobalStyles'
import Timer from '../../../components/Timer'
import Trivia from '../../../components/activities/cultural-puzzle/Trivia'
import Narrator from '../../../components/activities/Narrator'
import { Score } from '../../../components/activities/cultural-puzzle/Score'
import PuzzlePiece from '../../../components/activities/cultural-puzzle/PuzzlePiece'
import PuzzleSpot from '../../../components/activities/cultural-puzzle/PuzzleSpot'
import { getImg } from '../../../utilities/getImg'
import { useCultPuzzContext } from './CultPuzzContext'

const CultPuzz = ({ navigation }) => {
  const {
    score,
    timerLimit,
    setTimerLimit,
    TIMER_VALUE,
    isFinished,
    setIsFinished,
    shuffledEndPos,
    narrator,
  } = useCultPuzzContext()
  const { PUZZLE_GAME_DATA } = useCultPuzzContext()

  const { container } = globalStyles

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.goBack()
    }, TIMER_VALUE)

    const interval = setInterval(() => {
      setTimerLimit((prevState) => prevState - 1)

      if (score.value === 4) {
        setIsFinished(true)
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }, 1000)
    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [])

  // handleTriviaBtn
  const handleTriviaBtn = () => {
    navigation.goBack()
  }

  return (
    <ImageBackground
      source={getImg.bg.jeepInterior.link}
      style={container}
      resizeMode="contain"
    >
      <View style={[container]}>
        {PUZZLE_GAME_DATA.pieces.map((piece, index) => {
          return (
            <PuzzlePiece
              index={index}
              endPos={shuffledEndPos[index]}
              theme={PUZZLE_GAME_DATA.theme}
              score={score}
            />
          )
        })}
        {PUZZLE_GAME_DATA.pieces.map((piece, index) => {
          return <PuzzleSpot index={index} theme={PUZZLE_GAME_DATA.theme} />
        })}
        <Score score={score.value} items={PUZZLE_GAME_DATA.pieces.length} />
        <Timer timerLimit={timerLimit} />

        {isFinished ? (
          <View style={container}>
            <Trivia
              theme={PUZZLE_GAME_DATA.theme}
              trivia={PUZZLE_GAME_DATA.trivia}
              handleTriviaBtn={handleTriviaBtn}
            />
            <Narrator narrator={narrator} custWrapperStyle={{ right: -30 }} />
          </View>
        ) : (
          <></>
        )}
      </View>
    </ImageBackground>
  )
}

export default CultPuzz
