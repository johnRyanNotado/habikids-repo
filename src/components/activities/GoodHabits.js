import React from 'react'
import { FlatList } from 'react-native'
import { ACTIVITIES_GOODHABITS } from '../../constants/activitiesList'
import Card from './Card'

const GoodHabits = () => {
  // Create a card for each activities
  const renderItem = ({ item }) => {
    const { img, actNum, title } = item
    return <Card img={img} num={actNum} title={title} label={`Activities`} />
  }
  return (
    <FlatList horizontal data={ACTIVITIES_GOODHABITS} renderItem={renderItem} />
  )
}

export default GoodHabits
