import React, { useState, useEffect } from 'react'
import { BackHandler, Text, Vibration, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import EnterChileAgeNavBar from '../../../components/enter-child-age/EnterChildAgeNavBar'
import { globalStyles } from '../../../styles/GlobalStyles'
import EnterChildAgeMainSec from '../../../components/enter-child-age/EnterChildAgeMainSec'
import {
  useAppContext,
  useChildDataContext,
} from '../../context-api/ContextAPI'
import FieldsError from '../../../components/login-signup/FieldsError'
import emptyChildObj from '../../../constants/emptyChildObj'
import LoadingScreen from '../../LoadingScreen'
import { addLearnerUrl } from '../../../constants/db_config'
import ErrorScreen from '../../ErrorScreen'

const EnterChildAge = ({ navigation }) => {
  const { newChild, setNewChild } = useChildDataContext()
  const { user, isLoading, setIsLoading, isError, setIsError, setDataChanged } =
    useAppContext()
  const [fieldsErr, setFieldsErr] = useState('')
  const [response, setResponse] = useState(null)
  const { container, centered } = globalStyles

  // Use effect for handling backpress
  useEffect(() => {
    const backAction = () => {
      navigation.goBack()
      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => {
      setFieldsErr('')
      backHandler.remove()
    }
  }, [])

  useEffect(() => {
    if (response) {
      if (response.id === 101) {
        setFieldsErr('')
        setDataChanged((prevState) => prevState + 1)
      } else if (response.id == 500) {
        console.log('Response: ', response)
        setIsError(true)
      } else {
        Alert.alert(
          'May problemang nangyari.',
          'Maaring subukan uli pagkatapos ng ilang minuto.'
        )
      }
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Home',
          },
        ],
      })
    }
  }, [response])

  const handleLeftArrBtn = () => {
    navigation.navigate('EnterChildName')
  }

  const saveChild = async () => {
    try {
      const resp = await fetch(addLearnerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          user_id: user.user_id,
          name: newChild.name,
          age: newChild.age,
          avatarNum: newChild.avatarNum,
        }),
      }).catch((err) => console.log(err))

      const response = await resp.json()
      setResponse(response)
    } catch (err) {
      console.log('Error: ', err)
      setIsError(true)
    }
    setIsLoading(false)
  }

  const handleRightArrBtn = async () => {
    // check if age is empty
    if (!newChild.age) {
      Vibration.vibrate(1000)
      setFieldsErr('Kailangan pumili ng edad!')
      return
    }

    // check if iconNum is empty
    if (!newChild.avatarNum) {
      Vibration.vibrate(1000)
      setFieldsErr('Kailangan pumili ng avatar!')
      return
    }

    // save the new child
    setFieldsErr('')
    setIsLoading(true)
    await saveChild()
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  if (isError) {
    return <ErrorScreen />
  }

  return (
    <View style={[container, centered]}>
      <FieldsError
        fieldsErr={fieldsErr}
        custStyle={{ top: '90%', zIndex: 5 }}
      />
      <EnterChileAgeNavBar
        handleLeftArrBtn={handleLeftArrBtn}
        handleRightArrBtn={handleRightArrBtn}
      />
      <EnterChildAgeMainSec />
    </View>
  )
}

export default EnterChildAge
