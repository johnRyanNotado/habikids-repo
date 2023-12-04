import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'
export const COMP_DIMENSION = {
  h: 30,
  w: 30,
  h: WINDOW_WIDTH * 0.035,
  w: WINDOW_WIDTH * 0.035,
  x: WINDOW_WIDTH / 2 - 25,
  y: WINDOW_HEIGHT / 2 - 25,
}

export const VALUE_DIMENSION = {
  h: 100,
  w: 100,
  h: WINDOW_WIDTH * 0.12,
  w: WINDOW_WIDTH * 0.12,
  x: WINDOW_WIDTH / 2 - 25,
  y: WINDOW_HEIGHT / 2 - 25,
}

export const LINE_DIMENSION = {
  h: 20,
  w: 20,
}

export const sampleData = {
  firstColumn: [
    { id: 1, img: null, value: 'Pic ni Sofie' },
    { id: 2, img: null, value: 'Pic ni Manong Manny' },
    { id: 3, img: null, value: 'Pic ni Aling Annie' },
    // { id: 4, img: null, value: 'Pic ni John' },
  ],
  secondColumn: [
    { id: 1, img: null, value: 'Sofie' },
    { id: 2, img: null, value: 'Manong Manny' },
    { id: 3, img: null, value: 'Aling Annie' },
    // { id: 4, img: null, value: 'John' },
  ],
}
