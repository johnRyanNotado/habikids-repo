import React from 'react'
import { FlatList } from 'react-native'
import { LESSONS_TRADITIONS } from '../../constants/lessonsList'
import Card from '../activities/Card'
const Traditions = () => {
  const renderItem = ({ item }) => {
    const { img, lesNum, title } = item
    return <Card img={img} num={lesNum} title={title} label={`Lessons`} />
  }
  return (
    <FlatList horizontal data={LESSONS_TRADITIONS} renderItem={renderItem} />
  )
}

export default Traditions
