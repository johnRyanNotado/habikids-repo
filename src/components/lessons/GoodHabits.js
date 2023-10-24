import React from 'react'
import { FlatList } from 'react-native'
import { LESSONS_GOODHABITS } from '../../constants/lessonsList'
import Card from '../activities/Card'
const GoodHabits = () => {
  const renderItem = ({ item }) => {
    const { img, lesNum, title } = item
    return <Card img={img} num={lesNum} title={title} label={`Lessons`} />
  }
  return (
    <FlatList horizontal data={LESSONS_GOODHABITS} renderItem={renderItem} />
  )
}

export default GoodHabits
