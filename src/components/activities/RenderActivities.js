import React from 'react'
import { FlatList } from 'react-native'
import Card from './Card'
import { useActivitiesContext } from '../../screens/context-api/ContextAPI'

const RenderActivities = (props) => {
  const { handleSelectedAct } = useActivitiesContext()
  const { data } = props
  // Create a card for each activities
  const renderItem = ({ item }) => {
    const { img, actNum, title, screen } = item
    return (
      <Card
        img={img}
        num={actNum}
        title={title}
        label={`Gawain`}
        screen={screen}
        onPress={handleSelectedAct}
      />
    )
  }
  return (
    <FlatList
      horizontal
      data={data}
      renderItem={renderItem}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  )
}

export default RenderActivities
