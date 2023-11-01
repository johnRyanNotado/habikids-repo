import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import COLORS from '../../../constants/colors'
import { useArrTheValContext } from '../../../screens/activities/arrange-the-values/ArrTheValContext'
import { globalStyles } from '../../../styles/GlobalStyles'
const ItemBox = () => {
  const { item, ITEM_AMOUNT } = useArrTheValContext()
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
    width: 90,
    height: 50,
    borderRadius: 10,
    top: 'auto',
    bottom: 20,
    left: 20,
    flexDirection: 'row',
  },
  itemTxt: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.accent,
  },
})
export default ItemBox
