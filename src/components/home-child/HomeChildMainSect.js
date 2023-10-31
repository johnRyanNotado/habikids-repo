import React from 'react'
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native'
import { getImg } from '../../utilities/getImg'
import COLORS from '../../constants/colors'
import { useHomeChildSectionContext } from '../../screens/context-api/ContextAPI'

const HomeChildMainSect = () => {
  const { handleRecordsBtn, handleBooksBtn } = useHomeChildSectionContext()
  const {
    mainSectWrapper,
    recordsWrapper,
    recordsImg,
    libraryWrapper,
    booksImg,
    libraryBtn,
    jeepImg,
    bookShadow,
    jeepShadow,
    recordsShadow,
  } = styles

  return (
    <View style={mainSectWrapper}>
      <View style={recordsWrapper}>
        <View>
          <View style={recordsShadow} />
          <TouchableOpacity onPress={handleRecordsBtn}>
            <Image source={getImg.components.records.link} style={recordsImg} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={libraryWrapper}>
        <View>
          <View style={jeepShadow} />
          <View style={bookShadow} />
          <TouchableOpacity onPress={handleBooksBtn} style={libraryBtn}>
            <Image source={getImg.components.books.link} style={booksImg} />
            <Image source={getImg.components.jeepRed.link} style={jeepImg} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainSectWrapper: {
    height: '80%',
    width: '100%',
  },
  recordsWrapper: {
    position: 'absolute',
    bottom: 80,
    right: 94,
  },
  recordsImg: {
    width: 140,
    height: 200,
  },
  recordsShadow: {
    position: 'absolute',
    width: 100,
    height: 120,
    backgroundColor: COLORS.black,
    opacity: 0.3,
    bottom: 35,
    right: 17,
  },
  libraryWrapper: {
    position: 'absolute',
    bottom: '23%',
    left: '13%',
    height: 200,
    justifyContent: 'flex-end',
  },
  booksImg: {
    width: 190,
    height: 148,
    marginBottom: 15,
  },
  jeepImg: {
    marginTop: 30,
    width: 180,
    height: 128,
  },
  libraryBtn: {
    flexDirection: 'row',
  },
  bookShadow: {
    position: 'absolute',
    width: 85,
    height: 15,
    borderRadius: 65,
    backgroundColor: COLORS.black,
    transform: [{ scaleX: 2 }],
    opacity: 0.2,
    bottom: 23,
    left: 55,
  },
  jeepShadow: {
    position: 'absolute',
    width: 85,
    height: 15,
    borderRadius: 65,
    backgroundColor: COLORS.black,
    transform: [{ scaleX: 2 }],
    opacity: 0.2,
    bottom: 23,
    right: 43,
  },
})

export default HomeChildMainSect
