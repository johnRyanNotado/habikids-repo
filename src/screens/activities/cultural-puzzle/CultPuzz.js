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
import {
  useAppContext,
  useChildSectionContext,
} from '../../context-api/ContextAPI'
import PausedCard from '../../../components/activities/PausedCard'
import ActivityNavBar from '../../../components/activities/ActivityNavBar'
import { useCultPuzzContext } from './CultPuzzContext'
import LoadingScreen from '../../LoadingScreen'
import ErrorScreen from '../../ErrorScreen'

const CultPuzz = ({ navigation }) => {
  const {
    score,
    timerLimit,
    setTimerLimit,
    isFinished,
    setIsFinished,
    shuffledEndPos,
    narrator,
  } = useCultPuzzContext()
  const { isLoading, isError } = useAppContext()
  const { positionAbsolute, centered } = globalStyles
  const { isGamePaused, saveAct } = useChildSectionContext()
  const { PUZZLE_GAME_DATA } = useCultPuzzContext()

  const { container } = globalStyles

  useEffect(() => {
    if (isFinished) return
    const interval = setInterval(() => {
      if (!isGamePaused) setTimerLimit((prevState) => prevState - 1)
      if (score.value === 4) {
        setIsFinished(true)
        clearInterval(interval)
      }

      if (timerLimit <= 0) {
        navigation.goBack()
      }
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })

  // handleTriviaBtn
  const handleTriviaBtn = async () => {
    await saveAct(4)
    navigation.goBack()
  }

  const exitGame = () => {
    score.value = 0
    navigation.goBack()
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  if (isError) {
    return <ErrorScreen />
  }

  return (
    <ImageBackground source={getImg.bg.jeepInterior.link} style={container}>
      <View style={[container]}>
        <View style={[positionAbsolute, centered, { height: '20%' }]}>
          <ActivityNavBar />
        </View>
        {PUZZLE_GAME_DATA.pieces.map((piece, index) => {
          return (
            <PuzzlePiece
              index={index}
              key={index}
              endPos={shuffledEndPos[index]}
              theme={PUZZLE_GAME_DATA.theme}
              score={score}
            />
          )
        })}
        {PUZZLE_GAME_DATA.pieces.map((piece, index) => {
          return (
            <PuzzleSpot
              index={index}
              key={index}
              theme={PUZZLE_GAME_DATA.theme}
            />
          )
        })}
        <Score score={score.value} items={PUZZLE_GAME_DATA.pieces.length} />
        <Timer timer={timerLimit} />

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
        {isGamePaused ? <PausedCard exitGame={exitGame} /> : null}
      </View>
    </ImageBackground>
  )
}

export default CultPuzz
