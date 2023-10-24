import React from 'react'
import { View, StyleSheet, Text, Switch } from 'react-native'
import COLORS from '../../constants/colors'

const SettingsConfigSect = (props) => {
  const { label, value, setValue } = props
  const switchProps = {
    trackColor: { false: COLORS.greenPrimary, true: COLORS.greenPrimary },
    thumbColor: COLORS.white,
  }
  return (
    <View style={styles.sectionConfigWrapper}>
      <Text style={styles.settingsFont}>{label}</Text>
      <View style={styles.switchWrapper}>
        <Switch
          {...switchProps}
          style={styles.switch}
          value={value}
          onValueChange={() => setValue(!value)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  settingsFont: {
    fontSize: 22,
    fontFamily: 'QuiapoRegular',
    letterSpacing: 2,
  },
  sectionConfigWrapper: {
    borderWidth: 1,
    borderRadius: 18,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
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
})

export default SettingsConfigSect
