import React from 'react'
import { FlatList } from 'react-native'
import { LESSONS_VALUES } from '../../constants/temp_db/db_lessons'
import Card from '../activities/Card'
const Values = () => {
  // Will render a card each lessons
  const renderItem = ({ item }) => {
    const { img, lesNum, title } = item
    return <Card img={img} num={lesNum} title={title} label={`Lessons`} />
  }
  return <FlatList horizontal data={LESSONS_VALUES} renderItem={renderItem} />
}

export default Values
