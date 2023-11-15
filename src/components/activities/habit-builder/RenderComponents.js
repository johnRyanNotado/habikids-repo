import React from 'react'
import { FlatList, Image, ImageBackground, View } from 'react-native'
import CorrectComp from './CorrectComp'
import { globalStyles } from '../../../styles/GlobalStyles'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'
import WrongComp from './WrongComp'
import Character from './Character'

const RenderComponents = (props) => {
  const {
    corrData,
    wrongData,
    bg,
    char,
    score,
    itemScore,
    positionAbsolute,
    narrator,
    isNarrating,
  } = props
  const { container } = globalStyles

  const renderCorrectComp = (item) => {
    return (
      <CorrectComp
        width={item.dimension.w}
        source={item.img}
        endPos={{
          x: item.endPos.x + WINDOW_WIDTH / 2,
          y: item.endPos.y + WINDOW_HEIGHT / 2,
        }}
        initialPosX={item.dimension.x + WINDOW_WIDTH / 2}
        initialPosY={item.dimension.y + WINDOW_HEIGHT / 2}
        score={score}
        itemScore={itemScore}
      />
    )
  }
  const renderWrongComp = (item) => {
    return (
      <WrongComp
        width={item.dimension.w}
        source={item.img}
        initialPosX={item.dimension.x + WINDOW_WIDTH / 2}
        initialPosY={item.dimension.y + WINDOW_HEIGHT / 2}
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

      {corrData.map((item) => {
        return renderCorrectComp(item)
      })}

      {wrongData.map((item) => {
        return renderWrongComp(item)
      })}
    </View>
  )
}

export default RenderComponents
