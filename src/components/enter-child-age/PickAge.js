import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import CustRadioBtnAge from './CustRadioBtnAge'
import { useChildDataContext } from '../../screens/context-api/ContextAPI'
import COLORS from '../../constants/colors'

const PickAge = () => {
  const { newChild, setNewChild } = useChildDataContext()
  const [selectedAge, setSelectedAge] = useState(null)
  const {
    pickAgeWrapper,
    ageLabelWrapper,
    ageLabel,
    ageSelectedWrapper,
    inputChildName,
    inputWrapper,
  } = styles

  // This function will change the value of the newChild and selectedAge useStates
  const handleAgeRadioBtn = (ageVal) => {
    // set new age value
    setNewChild({ ...newChild, age: ageVal })

    // change the 'selectedAge' so the style will change
    setSelectedAge(ageVal)
  }

  // useEffect to save the age value if the user went back to enterName screen
  useEffect(() => {
    // check if there is a value for age
    if (newChild.age) {
      setSelectedAge(newChild.age)
    }
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={pickAgeWrapper}>
        <View style={ageLabelWrapper}>
          <Text style={ageLabel}>
            Ilang taong gulang na si {newChild.name}?
          </Text>
        </View>
        <View style={ageSelectedWrapper}>
          {/* <CustRadioBtnAge
          label={6}
          selected={selectedAge === 6}
          onSelect={() => handleAgeRadioBtn(6)}
        />
        <CustRadioBtnAge
          label={7}
          selected={selectedAge === 7}
          onSelect={() => handleAgeRadioBtn(7)}
        />
        <CustRadioBtnAge
          label={8}
          selected={selectedAge === 8}
          onSelect={() => handleAgeRadioBtn(8)}
        /> */}
          <View style={inputWrapper}>
            <TextInput
              placeholder="Edad"
              style={inputChildName}
              maxLength={2}
              keyboardType="numeric"
              onChangeText={(newAge) => handleAgeRadioBtn(newAge)}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  pickAgeWrapper: {
    height: '35%',
    width: '100%',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    justifyContent: 'center',
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
  inputWrapper: {
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
  ageLabelWrapper: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ageLabel: {
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'QuiapoRegular',
  },
  ageSelectedWrapper: {
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20,
  },
})

export default PickAge
