import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import ProfileSection from '../../home-child/ProfileSection'
import Animated, { BounceIn, BounceOut, FadeOut } from 'react-native-reanimated'
import { useChildSectionContext } from '../../../screens/context-api/ContextAPI'

const LessonCard = (props) => {
  const { exitLesson } = props
  const { setIsGamePaused } = useChildSectionContext()
  const { profileCard, profileCardWrapperBg, btnSection, genBtn, btnTxt } =
    styles
  const { centered, positionAbsolute, container } = globalStyles

  const handleResume = () => {
    setIsGamePaused(false)
  }
  const handleGoBack = () => {
    exitLesson()
    setIsGamePaused(false)
  }
  return (
    <View style={[positionAbsolute, centered, { zIndex: 10 }]}>
      <Animated.View
        style={[positionAbsolute, profileCardWrapperBg]}
        exiting={FadeOut.duration(500)}
      />
      <Animated.View
        entering={BounceIn.duration(500)}
        exiting={BounceOut.duration(500)}
        style={profileCard}
      >
        <ProfileSection />
        <View style={btnSection}>
          <View style={[container, centered]}>
            <TouchableOpacity onPress={handleGoBack}>
              <View style={[centered, genBtn]}>
                <Text style={btnTxt}>Umalis</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[container, centered]}>
            <TouchableOpacity onPress={handleResume}>
              <View
                style={[
                  centered,
                  genBtn,
                  { backgroundColor: COLORS.greenPrimary },
                ]}
              >
                <Text style={btnTxt}>Ituloy</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileCard: {
    borderColor: COLORS.accent,
    borderWidth: 5,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    elevation: 5,
    minWidth: 410,
    minHeight: 215,
    width: '30%',
    height: '50%',
    maxWidth: 450,
    maxHeight: 250,
  },
  profileCardWrapperBg: {
    backgroundColor: COLORS.grayPrimary,
    opacity: 0.5,
  },
  btnSection: {
    height: '35%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'centered',
    paddingHorizontal: 15,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  genBtn: {
    backgroundColor: COLORS.grayPrimary,
    width: 140,
    paddingVertical: 10,
    borderRadius: 50,
  },
  btnTxt: {
    color: COLORS.white,
    fontFamily: 'QuiapoRegular',
    fontWeight: '400',
    fontSize: 25,
  },
})

export default LessonCard
