import React from 'react'
import { FlatList } from 'react-native'
import Card from '../activities/Card'
import {
  useChildSectionContext,
  useLessonsContext,
} from '../../screens/context-api/ContextAPI'

const RenderLessons = (props) => {
  const { data } = props
  const { selectedYear, setLesID } = useChildSectionContext()
  const { handleSelectedLes } = useLessonsContext()
  const onPress = (screen, id) => {
    setLesID(id)
    handleSelectedLes(screen)
  }

  // Create a card for each activities
  const renderItem = ({ item }) => {
    const { img, lesNum, title, screen, id } = item
    return (
      <Card
        id={id}
        img={img}
        num={lesNum}
        title={title}
        label={`Aralin`}
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

export default RenderLessons
