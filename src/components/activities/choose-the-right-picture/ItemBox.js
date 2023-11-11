import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import COLORS from '../../../constants/colors'
import { useCTRPContext } from '../../../screens/activities/choose-the-right-picture/CTRPContext'
import { globalStyles } from '../../../styles/GlobalStyles'

const ItemBox = () => {
  const { item, ITEM_AMOUNT } = useCTRPContext()
  const { centered, positionAbsolute } = globalStyles
  const { itemWrapper, itemTxt } = styles
  return (
    <View style={[centered, positionAbsolute, itemWrapper]}>
      <Text style={itemTxt}>
        # {item}/{ITEM_AMOUNT}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: COLORS.primaryTrans,
    width: 70,
    height: 50,
    borderRadius: 10,
    top: 'auto',
    bottom: 20,
    left: 20,
    flexDirection: 'row',
  },
  itemTxt: {
    fontSize: 26,
    fontWeight: '400',
    color: COLORS.accent,
    fontFamily: 'Quiapo',
  },
})
export default ItemBox
