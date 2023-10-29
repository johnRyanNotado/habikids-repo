import React, { useState } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import COLORS from '../../constants/colors'
import { useChildSectionContext } from '../../screens/registered-user-screens/child-section/NavScrChild'
import DropDownPicker from 'react-native-dropdown-picker'
import { TOPICS_ITEMS } from '../../constants/dropDownItems'
import ActivitiesData from './ActivitiesData'

const ActivitiesRec = () => {
  const { activitiesGHData, activitiesVData, activitiesTData } =
    useChildSectionContext()

  const { activitiesListWrapper, titleWrapper, title, dropDownContainerStyle } =
    styles

  // returns a list depending on a given value
  const getCorresData = (value) => {
    switch (value) {
      case 'Good Habits':
        return activitiesGHData
      case 'Values':
        return activitiesVData
      case 'Traditions':
        return activitiesTData
      default:
        console.log('something went wrong')
    }
  }

  const [selectedTopic, setSelectedTopic] = useState(TOPICS_ITEMS[0].value)
  const [listData, setListData] = useState(getCorresData(TOPICS_ITEMS[0].value))
  const [isOpen, setIsOpen] = useState(false)

  // change data, topic, and label based on dropdown
  const handleDropDownChange = (value) => {
    setSelectedTopic(value)
    setListData(getCorresData(value))
  }

  const renderItem = ({ item }) => {
    const { id, actNum, title, date, score, items } = item
    const scoreOverItems = `Done | ${score}/${items}`
    return (
      <ActivitiesData
        title={title}
        date={date}
        scoreOverItems={scoreOverItems}
        actNum={actNum}
      />
    )
  }

  return (
    <View style={activitiesListWrapper}>
      <View style={titleWrapper}>
        <DropDownPicker
          items={TOPICS_ITEMS}
          open={isOpen}
          setOpen={setIsOpen}
          value={selectedTopic}
          setValue={setSelectedTopic}
          dropDownDirection="BOTTOM"
          dropDownContainerStyle={dropDownContainerStyle}
          onChangeValue={(value) => {
            handleDropDownChange(value)
          }}
          textStyle={title}
          style={{ borderWidth: 0, backgroundColor: 'auto' }}
        />
      </View>
      <FlatList data={listData} renderItem={renderItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  activitiesListWrapper: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
    width: '90%',
    height: '90%',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  titleWrapper: {
    height: '25%',
    justifyContent: 'center',
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    zIndex: 10,
  },
  title: {
    fontSize: 25,
    fontFamily: 'QuiapoRegular',
    letterSpacing: 2,
  },
  dropDownContainerStyle: {
    borderColor: COLORS.primary,
  },
})

export default ActivitiesRec
