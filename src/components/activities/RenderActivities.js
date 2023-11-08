import React from 'react'
import { FlatList } from 'react-native'
import Card from './Card'
import {
  useActivitiesContext,
  useChildSectionContext,
} from '../../screens/context-api/ContextAPI'

const RenderActivities = (props) => {
  const { selectedYear, setActID } = useChildSectionContext()
  const { handleSelectedAct } = useActivitiesContext()
  const { data } = props

  const onPress = (screen, id) => {
    setActID(id)
    handleSelectedAct(screen)
  }

  // Create a card for each activities
  const renderItem = ({ item }) => {
    const { img, actNum, title, screen, id } = item
    return (
      <Card
        id={id}
        img={img}
        num={actNum}
        title={title}
        label={`Gawain`}
        screen={screen}
        year={selectedYear}
        onPress={onPress}
      />
    )
  }
  return (
    <FlatList
      horizontal
      data={data.grade[selectedYear - 1]}
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
