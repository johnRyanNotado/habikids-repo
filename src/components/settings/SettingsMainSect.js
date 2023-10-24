import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import SettingsConfigSect from './SettingsConfigSect'

const SettingsMainSect = () => {
  // These are the useState that will serve as the value for each switch in the settings.
  const [isMusicVal, setIsMusicVal] = useState(false)
  const [isVoiceVal, setIsVoiceVal] = useState(false)
  const [isReminderVal, setIsReminderVal] = useState(false)
  const [isTipsSuppVal, setIsTipsSuppVal] = useState(false)
  const [isShowBtnVal, setIsShowBtnVal] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('Filipino')

  const {
    cardWrapper,
    scrollViewCustStyle,
    settingsFont,
    sectionTitle,
    sectionConfigWrapper,
  } = styles

  return (
    <View style={cardWrapper}>
      <ScrollView style={scrollViewCustStyle}>
        <View>
          <Text style={[settingsFont, sectionTitle]}>General</Text>
          <View>
            <SettingsConfigSect
              label={'Music'}
              value={isMusicVal}
              setValue={setIsMusicVal}
            />
            <SettingsConfigSect
              label={'Voice'}
              value={isVoiceVal}
              setValue={setIsVoiceVal}
            />
          </View>
        </View>
        <View>
          <Text style={[settingsFont, sectionTitle]}>Notifications</Text>
          <View>
            <SettingsConfigSect
              label={'Learning Reminder'}
              value={isReminderVal}
              setValue={setIsReminderVal}
            />
            <SettingsConfigSect
              label={'Learning Tips and Support'}
              value={isTipsSuppVal}
              setValue={setIsTipsSuppVal}
            />
          </View>
        </View>
        <View>
          <Text style={[settingsFont, sectionTitle]}>Preferences</Text>
          <View>
            <SettingsConfigSect
              label={'Show Home Button in Learning Path Lessons'}
              value={isShowBtnVal}
              setValue={setIsShowBtnVal}
            />
            <View style={sectionConfigWrapper}>
              <Text style={settingsFont}>Language: </Text>
              <View style={{ width: '85%' }}>
                <Picker
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                  }
                >
                  <Picker.Item label="Filipino" value="Filipino" />
                  <Picker.Item label="English" value="English" />
                </Picker>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    backgroundColor: 'white',
    paddingLeft: 30,
    paddingTop: 15,
    paddingBottom: 20,
    borderRadius: 20,
    elevation: 5,
    width: '95%',
    height: '95%',
    minHeight: 290,
    maxHeight: 310,
    minWidth: 600,
    maxWidth: 715,
  },
  scrollViewCustStyle: {
    paddingRight: 30,
  },
  settingsFont: {
    fontSize: 22,
    fontFamily: 'QuiapoRegular',
    letterSpacing: 2,
  },
  sectionTitle: {
    height: 30,
    marginVertical: 5,
  },
  sectionConfigWrapper: {
    borderWidth: 1,
    borderRadius: 23,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default SettingsMainSect
