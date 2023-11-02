import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
  PUZZLE_DIMENSIONS,
  PUZZLE_PIECES,
  CENTER_X,
  CENTER_Y,
} from '../../../constants/puzzleConstants'
import COLORS from '../../../constants/colors'

const PuzzleSpot = ({ index }) => {
  const piece = PUZZLE_PIECES[index]
  const initialPosX = CENTER_X + (PUZZLE_DIMENSIONS.w / 2) * piece.x
  const initialPosY = CENTER_Y + (PUZZLE_DIMENSIONS.h / 2) * piece.y

  return (
    <View
      style={[
        styles.container,
        {
          transform: [{ translateX: initialPosX }, { translateY: initialPosY }],
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: PUZZLE_DIMENSIONS.w,
    height: PUZZLE_DIMENSIONS.h,
    zIndex: -5,
    borderColor: COLORS.accent,
    backgroundColor: COLORS.primaryTrans,
    borderWidth: 1,
  },
})

export default PuzzleSpot
