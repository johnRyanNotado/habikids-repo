import React from 'react'
import { View, Text, Switch } from 'react-native'
import ManageProfileChildren from './ManageProfileChildren'
import COLORS from '../../constants/colors'
import { useChosenChildContext } from '../../screens/registered-user-screens/ManageProfiles'

const ChildSect = () => {
  const {
    genFont,
    childrenSectWrapper,
    childrenListWrapper,
    learnersLabel,
    delBtnWrapper,
    delTxt,
    custBorderWrapper,
    switchWrapper,
  } = styles

  const { isDeleteEnabled, setIsDeleteEnabled } = useChosenChildContext()

  // this is the props for the switch component
  const switchProps = {
    trackColor: { false: COLORS.greenPrimary, true: COLORS.greenPrimary },
    thumbColor: COLORS.white,
  }

  return (
    <View style={childrenSectWrapper}>
      <View style={learnersLabel}>
        <Text style={genFont}>Mag-aaral (I-Tap Upang Ma-Edit)</Text>
      </View>
      <View style={delBtnWrapper}>
        <View style={custBorderWrapper}>
          <Text style={delTxt}>Enable Delete</Text>
          <View style={switchWrapper}>
            <Switch
              {...switchProps}
              value={isDeleteEnabled}
              onValueChange={() => setIsDeleteEnabled(!isDeleteEnabled)}
            />
          </View>
        </View>
      </View>
      <View style={childrenListWrapper}>
        <ManageProfileChildren />
      </View>
    </View>
  )
}

const styles = {
  childrenSectWrapper: {
    height: '90%',
    justifyContent: 'flex-end',
  },
  childrenListWrapper: {
    paddingRight: 30,
    height: '100%',
    paddingBottom: 15,
  },
  learnersLabel: {
    position: 'absolute',
    top: 5,
    left: 0,
    zIndex: 10,
    paddingBottom: 10,
    paddingRight: 20,
    borderBottomRightRadius: 20,
  },
  delBtnWrapper: {
    position: 'absolute',
    top: -5,
    right: 10,
    zIndex: 10,
    paddingBottom: 10,
    paddingRight: 20,
    borderBottomRightRadius: 20,
  },
  delTxt: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'QuiapoRegular',
    color: COLORS.black,
    opacity: 1,
  },
  genFont: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'QuiapoRegular',
    color: COLORS.black,
    opacity: 1,
  },
  custBorderWrapper: {
    borderWidth: 1,
    borderRadius: 18,
    width: 200,
    height: 40,
    zIndex: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switchWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: 50,
    height: 28,
    borderRadius: 26,
    borderColor: COLORS.greenPrimary,
    backgroundColor: COLORS.greenPrimary,
  },
}

export default ChildSect
