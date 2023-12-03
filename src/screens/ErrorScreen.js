import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'
import { globalStyles } from '../styles/GlobalStyles'
import { MaterialIcons } from '@expo/vector-icons'
import Narrator from '../components/activities/Narrator'
import { WINDOW_WIDTH } from '../constants/windowConstants'

const narrators = ['uni', 'juan', 'vio']
const ErrorScreen = () => {
  const { errorBox, errorTxt, titleWrapper, messageWrapper } = styles
  const { container, centered } = globalStyles
  return (
    <View style={[centered, container, { backgroundColor: COLORS.redSecond }]}>
      <View style={[centered, errorBox]}>
        <View style={[centered, titleWrapper]}>
          <MaterialIcons name="error" size={40} color={COLORS.accent} />
          <Text style={errorTxt}>Error: May hindi inaasahang nangyari.</Text>
        </View>
        <View style={messageWrapper}>
          <Text style={[errorTxt, { fontSize: 23, textAlign: 'left' }]}>
            {`> Subukan muli mamaya.\n> Siguraduhing nakaconnect and device sa internet.`}
          </Text>
        </View>
      </View>
      <Narrator
        narrator={narrators[Math.floor(Math.random() * narrators.length)]}
        custImgStyle={{
          height: WINDOW_WIDTH * 0.22,
          width: WINDOW_WIDTH * 0.22,
        }}
        custDuration={500}
        custDelay={500}
        isBackgroundShown={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  errorBox: {
    backgroundColor: COLORS.redPrimary,
    width: 630,
    paddingVertical: 20,
    borderWidth: 5,
    borderColor: COLORS.white,
    borderRadius: 400,
  },
  errorTxt: {
    fontFamily: 'QuiapoRegular',
    textAlign: 'center',
    fontSize: 30,
    color: COLORS.accent,
  },
  titleWrapper: { gap: 10, flexDirection: 'row' },
  messageWrapper: { marginTop: 10 },
})

export default ErrorScreen
