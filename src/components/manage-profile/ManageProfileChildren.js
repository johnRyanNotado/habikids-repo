import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native'
import COLORS from '../../constants/colors'
import { globalStyles } from '../../styles/GlobalStyles'
import ListChild from '../home/ListChild'
import { MaterialIcons } from '@expo/vector-icons'
import {
  useAppContext,
  useChildDataContext,
  useChosenChildContext,
} from '../../screens/context-api/ContextAPI'
import { delLearnerUrl } from '../../constants/db_config'

const ManageProfileChildren = () => {
  const { childData, setChildData, handleChosenChild } = useChildDataContext()
  const { isDeleteEnabled, setResponse } = useChosenChildContext()
  const { user, setIsLoading, setIsError } = useAppContext()
  const {
    custNameStyle,
    custBorderStyle,
    ageStyles,
    iconStyle,
    childWrapper,
    delBtnWrapper,
  } = styles
  const { centered } = globalStyles

  const deleteLearner = async (id) => {
    try {
      const resp = await fetch(delLearnerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          user_id: user.user_id,
          learner_id: id,
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

  // This function will alert the user, asking for confirmation about the delete request.
  const handleDeleteBtn = (id, name) => {
    Alert.alert('Saglit!', `Sigurado ka bang gusto mong i-delete si ${name}?`, [
      {
        text: 'Kanselahin',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Oo',
        onPress: () => {
          setIsLoading(true)
          deleteLearner(id)
        },
      },
    ])
  }

  // renders the child by using listChild component and an additional delete button and text for the age
  const renderChild = ({ item }) => {
    const { id, name, avatarNum, age } = item
    return (
      <View style={[centered, childWrapper]}>
        <View>
          <ListChild
            id={id}
            name={name}
            custNameStyle={custNameStyle}
            custBorderStyle={custBorderStyle}
            avatarNum={avatarNum}
            age={age}
            iconStyle={iconStyle}
            handleOnPress={() =>
              handleChosenChild({
                id: id,
                name: name,
                age: age,
                avatarNum: avatarNum,
              })
            }
          />
          <View style={delBtnWrapper}>
            {isDeleteEnabled ? (
              <TouchableOpacity onPress={() => handleDeleteBtn(id, name)}>
                <MaterialIcons
                  name="delete"
                  size={24}
                  color={COLORS.greenPrimary}
                />
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </View>
        </View>
        <Text style={ageStyles}>
          <Text style={{ fontFamily: 'QuiapoRegular' }}>{`${item.age} `}</Text>
          Na Taong Gulang
        </Text>
      </View>
    )
  }

  return (
    <FlatList
      horizontal={true}
      data={childData}
      renderItem={renderChild}
      contentContainerStyle={{
        justifyContent: 'center',
        height: '100%',
        flexGrow: 1,
      }}
    />
  )
}
const styles = StyleSheet.create({
  custNameStyle: {
    color: COLORS.black,
  },
  custBorderStyle: {
    borderColor: COLORS.grayThird,
  },
  ageStyles: {
    fontSize: 15,
    fontFamily: 'QuiapoLight',
    position: 'absolute',
    bottom: 0,
  },
  iconStyle: {
    height: 100,
    width: 100,
  },
  childWrapper: {
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  delBtnWrapper: {
    position: 'absolute',
    top: 15,
    right: 10,
  },
})
export default ManageProfileChildren
