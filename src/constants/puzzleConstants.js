import { WINDOW_WIDTH, WINDOW_HEIGHT } from './windowConstants'

export const PUZZLE_DIMENSIONS = { w: 120, h: 120 }

export const CENTER_X = WINDOW_WIDTH / 2 - PUZZLE_DIMENSIONS.w / 2
export const CENTER_Y = WINDOW_HEIGHT / 2 - PUZZLE_DIMENSIONS.h / 2

export const PUZZLE_PIECE_SIZE = 90
export const PIECE_SCALE = 0.9

export const PUZZLE_PIECES = [
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: -1, y: 1 },
  { x: 1, y: 1 },
]
