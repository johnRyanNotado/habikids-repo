import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import { getImg } from '../../utilities/getImg'
import COLORS from '../../constants/colors'

const LibraryMainSect = (props) => {
  const { handleJeepBtn, handleBooksBtn } = props
  const {
    libraryMainSectWrapper,
    libraryTitleWrapper,
    libraryTitle,
    btnWrapper,
    btnSection,
    bookStyle,
    jeepStyle,
    bookShadow,
    jeepShadow,
  } = styles
  const { container, centered } = globalStyles
  return (
    <View style={[container, centered, libraryMainSectWrapper]}>
      <View style={container}>
        <View style={btnWrapper}>
          <View style={btnSection}>
            <View style={bookShadow} />
            <TouchableOpacity onPress={handleBooksBtn}>
              <Image source={getImg.components.books.link} style={bookStyle} />
            </TouchableOpacity>
          </View>
          <View style={[btnSection, { marginTop: 30 }]}>
            <View style={jeepShadow} />
            <TouchableOpacity onPress={handleJeepBtn}>
              <Image
                source={getImg.components.jeepRed.link}
                style={jeepStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[centered, { width: '100%' }]}>
        <View style={libraryTitleWrapper}>
          <Text style={libraryTitle}>Library</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  libraryMainSectWrapper: {
    justifyContent: 'flex-start',
    gap: 20,
  },
  libraryTitleWrapper: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 4,
    borderColor: COLORS.accent,
    borderRadius: 20,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  libraryTitle: {
    fontFamily: 'Quiapo',
    fontSize: 40,
    letterSpacing: 2,
    color: COLORS.accent,
  },
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 550,
    height: 200,
    marginLeft: '7%',
    marginTop: '-1%',
  },
  btnSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookStyle: {
    width: 260,
    height: 220,
    marginBottom: 20,
    zIndex: 10,
  },
  bookShadow: {
    position: 'absolute',
    width: 130,
    height: 30,
    borderRadius: 65,
    backgroundColor: COLORS.black,
    transform: [{ scaleX: 2 }],
    opacity: 0.2,
    bottom: 15,
  },
  jeepStyle: {
    width: 260,
    height: 200,
    zIndex: 10,
  },
  jeepShadow: {
    position: 'absolute',
    width: 130,
    height: 30,
    borderRadius: 65,
    backgroundColor: COLORS.black,
    transform: [{ scaleX: 2 }],
    opacity: 0.2,
    bottom: 15,
  },
})

export default LibraryMainSect
