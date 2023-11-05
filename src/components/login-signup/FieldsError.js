import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'

const FieldsError = (props) => {
  const { fieldsErr } = props
  const { fieldsErrWrapper, fieldsErrTxt } = styles
  const { centered } = globalStyles
  return (
    <View style={[centered, fieldsErrWrapper]}>
      <Text style={fieldsErrTxt}>{fieldsErr}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  fieldsErrWrapper: {
    position: 'absolute',
    top: '70%',
    right: 'auto',
    left: 'auto',
  },
  fieldsErrTxt: {
    color: COLORS.redThird,
    fontFamily: 'QuiapoRegular',
    fontSize: 20,
  },
})

export default FieldsError
