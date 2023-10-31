import React, { useState, createContext, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MAIN_HEADER_OPT } from '../../constants/headerOption'
import {
  Home,
  EnterChildName,
  EnterChildAge,
  Settings,
  ManageProfiles,
  NavScrChild,
} from './index.js'
import EMPTY_CHILD_OBJ from '../../constants/emptyChildObj'
import { sampleListChildObj } from '../../constants/childList'
import { ChildDataContext } from '../context-api/ContextAPI'

const RegisteredUserStack = createStackNavigator()

const NavScreen = () => {
  // for the identifying if there is a chosen child (used in managing profile and child section)
  const [isChildChosen, setIsChildChosen] = useState(false)

  // for the selected child (used in managing profile and child section)
  const [chosenChild, setChosenChild] = useState(EMPTY_CHILD_OBJ)

  // for the data of all the children
  const [childData, setChildData] = useState(sampleListChildObj)

  // for the new child that will be added (used in EnterChildName and EnterChildAge screens)
  const [newChild, setNewChild] = useState(EMPTY_CHILD_OBJ)

  // will set the isChild chosen to true and will set the value for the chosen child based on a given value
  const handleChosenChild = (childObj) => {
    const { id, name, age, avatarNum } = childObj
    setIsChildChosen(true)
    setChosenChild((prevState) => {
      return {
        id: id,
        name: name,
        age: age,
        avatarNum: avatarNum,
      }
    })
  }
  return (
    <ChildDataContext.Provider
      value={{
        childData,
        chosenChild,
        isChildChosen,
        newChild,
        setChildData,
        setIsChildChosen,
        setChosenChild,
        setNewChild,
        handleChosenChild,
      }}
    >
      <RegisteredUserStack.Navigator initialRouteName="Home">
        <RegisteredUserStack.Screen
          name="Home"
          component={Home}
          options={MAIN_HEADER_OPT}
        />
        <RegisteredUserStack.Screen
          name="EnterChildName"
          component={EnterChildName}
          options={MAIN_HEADER_OPT}
        />
        <RegisteredUserStack.Screen
          name="EnterChildAge"
          component={EnterChildAge}
          options={MAIN_HEADER_OPT}
        />
        <RegisteredUserStack.Screen
          name="Settings"
          component={Settings}
          options={MAIN_HEADER_OPT}
        />
        <RegisteredUserStack.Screen
          name="ManageProfiles"
          component={ManageProfiles}
          options={MAIN_HEADER_OPT}
        />
        <RegisteredUserStack.Screen
          name="NavScrChild"
          component={NavScrChild}
          options={MAIN_HEADER_OPT}
        />
      </RegisteredUserStack.Navigator>
    </ChildDataContext.Provider>
  )
}

export default NavScreen
