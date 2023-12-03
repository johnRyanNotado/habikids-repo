import React from 'react'
import { Image } from 'react-native'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../constants/windowConstants'
import { imgUrl } from '../../../constants/db_config'

const Character = (props) => {
  const { char } = props
  return (
    <Image
      source={{ uri: `${imgUrl}${char}` }}
      style={[
        {
          position: 'absolute',
          top: WINDOW_HEIGHT / 2 - (WINDOW_HEIGHT * 0.9) / 2,
          left: WINDOW_WIDTH / 2 - (WINDOW_HEIGHT * 0.9) / 2,
          height: WINDOW_HEIGHT * 0.9,
          width: WINDOW_HEIGHT * 0.9,
          zIndex: 1,
        },
      ]}
      resizeMode="contain"
    />
  )
}

export default Character
