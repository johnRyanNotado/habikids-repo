import React, { useEffect, useState } from 'react'
import { Image, View } from 'react-native'
import CorrectComp from './CorrectComp'
import { globalStyles } from '../../../styles/GlobalStyles'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'
import WrongComp from './WrongComp'
import Character from './Character'
import { useHabitBuilderContext } from '../../../screens/activities/habit-builder/HabitBuilderContext'

const RenderComponents = (props) => {
  const { corrData, wrongData, bg, char, score, itemScore, positionAbsolute } =
    props
  const { item } = useHabitBuilderContext()
  const { container } = globalStyles
  const [initPos, setInitPos] = useState([])
  const [endPos, setEndPos] = useState([])
  let numOfComponents

  const centerX = WINDOW_WIDTH / 2
  const centerPos = centerX - 100 / 2
  useEffect(() => {
    numOfComponents = corrData.length + wrongData.length
    let tempInitPos = [{ id: 0, x: centerPos, y: WINDOW_HEIGHT - 130 }]
    let tempEndPos = []
    const endPosY = WINDOW_HEIGHT / 2 - 150
    const initPosY = WINDOW_HEIGHT - 130

    for (let i = 0; i < Math.floor(numOfComponents / 2); i++) {
      tempInitPos.push({
        id: i + 1,
        x: centerPos + (i + 1) * 120,
        y: initPosY,
      })

      tempInitPos.push({
        id: i + 100,
        x: centerPos - (i + 1) * 120,
        y: initPosY,
      })
    }

    for (let i = 0; i < Math.floor(corrData.length / 2); i++) {
      tempEndPos.push({
        id: i,
        x: centerX - (i + 2) * 120,
        y: endPosY,
      })

      tempEndPos.push({
        id: i,
        x: centerX + (i + 1) * 120,
        y: endPosY,
      })
    }

    setEndPos(tempEndPos)
    setInitPos(tempInitPos.sort(() => Math.random - 0.5))
  }, [item])

  const renderCorrectComp = (item, index) => {
    const corrInitPos = initPos[index]
    const corrEndPos = endPos[index]
    return (
      <CorrectComp
        width={item.dimension.w}
        source={item.img}
        endPos={{
          x: corrEndPos.x,
          y: corrEndPos.y,
        }}
        initialPosX={corrInitPos.x}
        initialPosY={corrInitPos.y}
        score={score}
        itemScore={itemScore}
      />
    )
  }
  const renderWrongComp = (item, index) => {
    const wrongInitPos = initPos[index + corrData.length]
    return (
      <WrongComp
        width={item.dimension.w}
        source={item.img}
        initialPosX={wrongInitPos.x}
        initialPosY={wrongInitPos.y}
      />
    )
  }
  return (
    <View style={[container]}>
      <Image
        source={bg}
        style={[
          positionAbsolute,
          container,
          { width: WINDOW_WIDTH, zIndex: -5 },
        ]}
        resizeMode="contain"
      />

      <Character char={char} />

      {initPos.length && endPos.length
        ? corrData.map((item, index) => {
            return renderCorrectComp(item, index)
          })
        : null}

      {initPos.length
        ? wrongData.map((item, index) => {
            return renderWrongComp(item, index)
          })
        : null}
    </View>
  )
}

export default RenderComponents
