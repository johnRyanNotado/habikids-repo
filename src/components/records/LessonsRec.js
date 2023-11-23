import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import COLORS from '../../constants/colors'
import DropDownPicker from 'react-native-dropdown-picker'
import { TOPICS_ITEMS } from '../../constants/dropDownItems'
import LessonData from './LessonData'
import { useChildSectionContext } from '../../screens/context-api/ContextAPI'

const LessonsRec = () => {
  const { lessonsGHData, lessonsVData, lessonsTData } = useChildSectionContext()

  const { lessonsListWrapper, titleWrapper, title, dropDownContainerStyle } =
    styles

  // returns a list depending on a given value
  const getCorresData = (value) => {
    switch (value) {
      case 'Good Habits':
        return lessonsGHData
      case 'Values':
        return lessonsVData
      case 'Traditions':
        return lessonsTData
      default:
        console.log('something went wrong')
    }
  }

  const [selectedTopic, setSelectedTopic] = useState(TOPICS_ITEMS[0].value)
  const [listData, setListData] = useState(getCorresData(TOPICS_ITEMS[0].value))
  const [isOpen, setIsOpen] = useState(false)

  // change data and topic based on dropdown
  const handleDropDownChange = (value) => {
    setSelectedTopic(value)
    setListData(getCorresData(value))
  }

  const renderItem = ({ item }) => {
    const { title, date, lesNum } = item
    return <LessonData title={title} date={date} lesNum={lesNum} />
  }

  return (
    <View style={lessonsListWrapper}>
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
  lessonsListWrapper: {
    backgroundColor: COLORS.white,
    width: '100%',
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

export default LessonsRec
