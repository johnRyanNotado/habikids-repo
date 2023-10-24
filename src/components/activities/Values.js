import React from 'react'
import { FlatList } from 'react-native'
import { ACTIVITIES_VALUES } from '../../constants/activitiesList'
import Card from './Card'

const Values = () => {
  const renderItem = ({ item }) => {
    const { img, actNum, title } = item
    return <Card img={img} num={actNum} title={title} label={`Activities`} />
  }
  return (
    <FlatList horizontal data={ACTIVITIES_VALUES} renderItem={renderItem} />
  )
}

export default Values
