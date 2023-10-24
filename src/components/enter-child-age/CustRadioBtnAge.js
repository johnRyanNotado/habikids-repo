import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import COLORS from '../../constants/colors'

const CustRadioBtnAge = (props) => {
  const { label, selected, onSelect } = props
  return (
    <TouchableOpacity onPress={onSelect}>
      <View
        style={[
          styles.textWrapper,
          {
            backgroundColor: selected ? COLORS.greenThird : COLORS.greenFourth,
            borderColor: selected ? COLORS.greenThird : COLORS.white,
          },
        ]}
      >
        <Text
          style={{
            fontSize: 22,
            fontFamily: 'Quiapo',
            color: selected ? COLORS.white : COLORS.black,
          }}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textWrapper: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default CustRadioBtnAge
