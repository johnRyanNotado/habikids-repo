import React from 'react'
import { FlatList } from 'react-native'
import { ACTIVITIES_TRADITIONS } from '../../constants/activitiesList'
import Card from './Card'

const Traditions = () => {
  // Create a card for each activities
  const renderItem = ({ item }) => {
    const { img, actNum, title } = item
    return <Card img={img} num={actNum} title={title} label={`Activities`} />
  }
  return (
    <FlatList horizontal data={ACTIVITIES_TRADITIONS} renderItem={renderItem} />
  )
}

export default Traditions
