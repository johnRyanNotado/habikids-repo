import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import SettingsConfigSect from './SettingsConfigSect'
import { LANGUAGES } from '../../constants/dropDownItems'
import DropDownPicker from 'react-native-dropdown-picker'
import { globalStyles } from '../../styles/GlobalStyles'

const SettingsMainSect = () => {
  // These are the useState that will serve as the value for each switch in the settings.
  const [isMusicVal, setIsMusicVal] = useState(false)
  const [isVoiceVal, setIsVoiceVal] = useState(false)
  const [isReminderVal, setIsReminderVal] = useState(false)
  const [isTipsSuppVal, setIsTipsSuppVal] = useState(false)
  const [isShowBtnVal, setIsShowBtnVal] = useState(false)
  const [isEngCapShown, setIsEngCapShown] = useState(false)
  const { cardWrapper, scrollViewCustStyle, settingsFont, sectionTitle } =
    styles
  const { container } = globalStyles

  return (
    <View style={cardWrapper}>
      <ScrollView style={scrollViewCustStyle}>
        {/* Added a horizontal scrollview because nested list with the same direction is not allowed. */}
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            width: '100%',
          }}
        >
          <View style={[container]}>
            <View>
              <Text style={[settingsFont, sectionTitle]}>General</Text>
              <View>
                <SettingsConfigSect
                  label={'Musika'}
                  value={isMusicVal}
                  setValue={setIsMusicVal}
                />
                <SettingsConfigSect
                  label={'Tunog ng Boses'}
                  value={isVoiceVal}
                  setValue={setIsVoiceVal}
                />
              </View>
            </View>
            <View>
              <Text style={[settingsFont, sectionTitle]}>Notifications</Text>
              <View>
                <SettingsConfigSect
                  label={'Mga Paalala sa Mag-aaral'}
                  value={isReminderVal}
                  setValue={setIsReminderVal}
                />
                <SettingsConfigSect
                  label={'Mga Tips at Suporta sa Pag-aaral'}
                  value={isTipsSuppVal}
                  setValue={setIsTipsSuppVal}
                />
              </View>
            </View>
            <View>
              <Text style={[settingsFont, sectionTitle]}>Preferences</Text>
              <View>
                <SettingsConfigSect
                  label={
                    'Ipakita ang Home Button Habang Nagkokodukto ng Aralin o Gawain'
                  }
                  value={isShowBtnVal}
                  setValue={setIsShowBtnVal}
                />
                <SettingsConfigSect
                  label={'Ipakita nag Ingles na Captions'}
                  value={isEngCapShown}
                  setValue={setIsEngCapShown}
                />
              </View>
            </View>
          </View>
        </ScrollView>
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
    maxWidth: 800,
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
  dropDownStyle: {
    borderWidth: 0,
    backgroundColor: '',
    paddingLeft: 15,
    zIndex: 10,
  },
  dropDownContainerStyle: {
    borderRadius: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    paddingLeft: 10,
    width: '100%',
  },
  dropDownTxtStyle: {
    fontSize: 22,
    fontFamily: 'QuiapoRegular',
    letterSpacing: 2,
  },
})

export default SettingsMainSect
