import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import COLORS from '../../constants/colors'
import EditSection from './EditSection'
import ButtonSection from './ButtonSection'
import { globalStyles } from '../../styles/GlobalStyles'
import ChooseAvatar from './ChooseAvatar'
import { useChosenChildContext } from '../../screens/context-api/ContextAPI'

const ManageProfileOverlay = () => {
  const { isChoosingAvatar } = useChosenChildContext()
  const { centered, positionAbsolute } = globalStyles
  const {
    chosenChildWrapper,
    chosenChildCard,
    chosenOverlayBG,
    editTitleWrapper,
    editTitle,
  } = styles

  return (
    <>
      <View style={[centered, positionAbsolute, chosenOverlayBG]} />
      <View style={[centered, positionAbsolute, chosenChildWrapper]}>
        <View>
          <View style={chosenChildCard}>
            <View style={[centered, editTitleWrapper]}>
              <Text style={editTitle}>I-Edit and Mag-aaral</Text>
            </View>
            <EditSection />
            <ButtonSection />
          </View>
        </View>
      </View>
      {isChoosingAvatar ? <ChooseAvatar /> : <></>}
    </>
  )
}

const styles = StyleSheet.create({
  chosenChildCard: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 20,
    elevation: 5,
    width: 400,
    height: 235,
  },
  chosenChildWrapper: {
    zIndex: 10,
  },
  chosenOverlayBG: {
    zIndex: 5,
    backgroundColor: COLORS.grayPrimary,
    opacity: 0.5,
  },
  editTitleWrapper: {
    marginBottom: 10,
  },
  editTitle: {
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'QuiapoRegular',
    letterSpacing: 1,
  },
  avatarContainerStyle: {
    justifyContent: 'center',
  },
})
export default ManageProfileOverlay
