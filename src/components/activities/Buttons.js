import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Button from '../Button'
import {
  useActivitiesContext,
  useChildSectionContext,
} from '../../screens/context-api/ContextAPI'
import { globalStyles } from '../../styles/GlobalStyles'
import {
  VALUES,
  TRADITIONS,
  GOOD_HABITS,
} from '../../constants/contentClassification'
import COLORS from '../../constants/colors'
import ValuesSvg from '../../svg/activities/buttons/ValuesSvg'

const Buttons = () => {
  const { setContent } = useChildSectionContext()
  const { btnWrapper, txtStyle, btnStyle } = styles
  const { container, centered } = globalStyles

  // Will set the content of the main section to values activities
  const handleValBtn = () => {
    setContent(VALUES)
  }

  // Will set the content of the main section to traditions activities
  const handleTradBtn = () => {
    setContent(TRADITIONS)
  }

  // Will set the content of the main section to good habits activities
  const handleGoodHanBtn = () => {
    setContent(GOOD_HABITS)
  }
  return (
    <View style={[centered, container, btnWrapper]}>
      <View>
        <TouchableOpacity onPress={handleValBtn}>
          <View style={{ elavation: 5 }}>
            <ValuesSvg />
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Button
          label={'Tradisyon'}
          onPress={handleTradBtn}
          txtStyle={txtStyle}
          btnStyle={btnStyle}
        />
        <Button
          label={'Mabubuting Gawi'}
          onPress={handleGoodHanBtn}
          txtStyle={txtStyle}
          btnStyle={btnStyle}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: '10%',
  },
  btnStyle: {
    height: 50,
    width: 200,
    borderColor: COLORS.white,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
  },
  txtStyle: {
    fontFamily: 'QuiapoRegular',
    fontSize: 30,
    color: COLORS.accent,
  },
})

export default Buttons
