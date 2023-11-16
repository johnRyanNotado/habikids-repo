import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ScrollView } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'
import Dot from './Dot'
import Choice from './Choice'
import COLORS from '../../../constants/colors'
import Answer from './Answer'
import Spot from './Spot'

import { COMP_DIMENSION, VALUE_DIMENSION } from './constants'
import { useSharedValue } from 'react-native-reanimated'
import { useSpecificLessonContext } from '../../../screens/lessons/LessonsContext'

const ConnectTheDots = (props) => {
  const { data } = props
  const { setIsActFin } = useSpecificLessonContext()
  const { container } = globalStyles
  const [initPos, setInitPos] = useState(null)
  const [shuffledEndPos, setShuffledEndPos] = useState(null)
  let arr = []
  const [endPos, setEndPos] = useState(null)
  const tempEndPos = []
  const tempAns = []
  const initialPosX = COMP_DIMENSION.x - 100
  const initialPosY = 30
  const score = useSharedValue(0)

  useEffect(() => {
    const initPosTemp = data.firstColumn.map((item, index) => {
      const gap = 10 + 10 * index
      arr.push(index)
      return {
        x: initialPosX,
        y: initialPosY + index * VALUE_DIMENSION.h + gap + 30,
      }
    })
    setInitPos(initPosTemp)
    setEndPos(
      data.firstColumn.map((item, index) => {
        return { x: initialPosX + 150, y: initPosTemp[index].y }
      })
    )
  }, [])

  useEffect(() => {
    if (endPos) {
      arr = []
      data.firstColumn.map((item, index) => {
        arr.push(index)
      })
      // randomize the indices
      arr = arr.sort(() => Math.random() - 0.5)
      for (let i = 0; i < arr.length; i++) {
        tempEndPos.push(endPos[arr[i]])
        tempAns.push(data.secondColumn[arr[i]])
      }

      setShuffledEndPos(tempEndPos)
    }
  }, [endPos])

  useEffect(() => {
    const scoreInterval = setInterval(() => {
      console.log('Score: ', score.value)
      if (score.value >= data.firstColumn.length) {
        setIsActFin(true)
        clearInterval(scoreInterval)
      }
    }, 500)

    return () => clearInterval(scoreInterval)
  })

  return (
    <View
      style={[
        container,
        {
          width: WINDOW_WIDTH,
          height: WINDOW_HEIGHT,
        },
      ]}
    >
      <ScrollView>
        {/* the images/values */}
        {initPos && endPos
          ? data.firstColumn.map((item, index) => {
              return (
                <Choice
                  initialPosX={initPos[index].x}
                  initialPosY={initPos[index].y}
                  label={data.firstColumn[index].value}
                />
              )
            })
          : null}

        {/* the dot to be dragged */}
        {initPos && endPos && shuffledEndPos
          ? data.firstColumn.map((item, index) => {
              return (
                <Dot
                  initialPosX={initPos[index].x}
                  initialPosY={initPos[index].y}
                  endPos={{
                    x: shuffledEndPos[index].x,
                    y: shuffledEndPos[index].y,
                  }}
                  score={score}
                />
              )
            })
          : null}

        {initPos && endPos
          ? data.firstColumn.map((item, index) => {
              return <Spot x={initPos[index].x} y={initPos[index].y} />
            })
          : null}

        {initPos && endPos
          ? data.firstColumn.map((item, index) => {
              console.log('End pos: ', endPos)
              return <Spot x={endPos[index].x} y={endPos[index].y} />
            })
          : null}

        {initPos && endPos && shuffledEndPos
          ? data.firstColumn.map((item, index) => {
              return (
                <Answer
                  endPosX={shuffledEndPos[index].x}
                  endPosY={shuffledEndPos[index].y}
                  label={data.secondColumn[index].value}
                  img={data.secondColumn[index].img}
                />
              )
            })
          : null}
      </ScrollView>
    </View>
  )
}

export default ConnectTheDots
