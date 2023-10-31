import React from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import COLORS from '../../constants/colors'
import { SWGreenMain } from '../../constants/stackedWaves'
import { MaterialIcons } from '@expo/vector-icons'
import { globalStyles } from '../../styles/GlobalStyles'
import EMPTY_CHILD_OBJ from '../../constants/emptyChildObj'
import { useChildDataContext } from '../../screens/context-api/ContextAPI'

const EnterChildNameMainSec = () => {
  const { newChild, setNewChild } = useChildDataContext()
  const {
    mainSectionWrapper,
    labelWrapper,
    labelTxt,
    inputWrapper,
    inputChildName,
    cardWrapper,
  } = styles
  const { bgStyleWNavBar } = globalStyles

  // This function will change the name of the new child whenever the value of the text input changes
  const handleChangeText = (new_name) => {
    setNewChild({ ...EMPTY_CHILD_OBJ, name: new_name })
  }

  return (
    <View style={mainSectionWrapper}>
      <SWGreenMain style={bgStyleWNavBar} />
      <View style={cardWrapper}>
        <View style={labelWrapper}>
          <MaterialIcons
            name="drive-file-rename-outline"
            size={30}
            color="black"
          />
          <Text style={labelTxt}>Ano ang pangalan ng inyong anak?</Text>
        </View>
        <View style={inputWrapper}>
          <TextInput
            placeholder="Name"
            style={inputChildName}
            maxLength={15}
            onChangeText={(new_name) => handleChangeText(new_name)}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainSectionWrapper: {
    height: '80%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelWrapper: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    height: 50,
  },
  labelTxt: {
    fontSize: 26,
    fontWeight: '400',
    fontFamily: 'QuiapoRegular',
  },
  inputWrapper: {
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
  inputChildName: {
    width: 350,
    height: '100%',
    borderRadius: 150,
    paddingHorizontal: 20,
    fontSize: 26,
    fontWeight: '400',
    fontFamily: 'QuiapoRegular',
    backgroundColor: COLORS.white,
  },
  cardWrapper: {
    paddingTop: 15,
    paddingBottom: 30,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.greenFifth,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 20,
    elevation: 5,
  },
})

export default EnterChildNameMainSec
