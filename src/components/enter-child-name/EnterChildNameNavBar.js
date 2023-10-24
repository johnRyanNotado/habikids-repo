import React from 'react'
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native'
import COLORS from '../../constants/colors'

const EnterChildNameNavBar = (props) => {
  const { navBarWrapper, navBarElement, appName, navBtn } = styles
  const { handleLeftArrBtn, handleRightArrBtn } = props
  return (
    <View style={navBarWrapper}>
      <View style={[navBarElement, { width: '13%' }]}>
        <TouchableOpacity onPress={handleLeftArrBtn}>
          <Image
            style={navBtn}
            source={require('../../img/left-arrow-btn.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={navBarElement}>
        <Text style={appName}>Habikids</Text>
      </View>
      <View style={[navBarElement, { width: '13%' }]}>
        <TouchableOpacity onPress={handleRightArrBtn}>
          <Image
            style={navBtn}
            source={require('../../img/right-arrow-btn.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  navBarWrapper: {
    height: '20%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.greenPrimary,
    minHeight: 60,
  },
  navBarElement: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    color: COLORS.white,
    fontSize: 48,
    fontFamily: 'Quiapo',
    letterSpacing: 8,
  },
  navBtn: {
    width: 35,
    height: 35,
  },
})

export default EnterChildNameNavBar
