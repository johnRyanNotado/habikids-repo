import React from 'react'
import { View, StyleSheet, FlatList, Vibration } from 'react-native'
import { globalStyles } from '../../../styles/GlobalStyles'
import COLORS from '../../../constants/colors'
import SelectionNavbar from './SelectionNavbar'
import Animated, { SlideInLeft, SlideOutLeft } from 'react-native-reanimated'
import { useDressUpContext } from '../../../screens/activities/dressup-in-culture/DressUpContext'
import Choice from './Choice'
import { WINDOW_HEIGHT } from '../../../constants/windowConstants'

const SelectionCard = (props) => {
  const {
    data,
    color,
    handleRightBtn,
    handleLeftBtn,
    position,
    height,
    putOn,
    setGender,
    hideLeftArr,
    hideRightArr,
    checker,
    showSave,
    marginTop,
    label,
  } = props
  const { numOfClothes, setNumOfClothes } = useDressUpContext()
  const { centered, container } = globalStyles
  const { selectionCard, listContainer } = styles

  const goNext = () => {
    console.log(
      'Go next\tChecker: ',
      checker,
      '\tNum of Clothes: ',
      numOfClothes
    )
    if (checker <= numOfClothes) {
      handleRightBtn()
    } else {
      Vibration.vibrate(1000)
    }
  }

  const renderData = ({ item }) => {
    const handlePress = () => {
      putOn(item.img)
      if (setGender) {
        setGender(item.gender)
      }
      if (numOfClothes < checker) {
        setNumOfClothes((prevState) => prevState + 1)
      }
      console.log(
        'Changed\tChecker: ',
        checker,
        '\tNum of Clothes: ',
        numOfClothes
      )
    }

    return (
      <Choice
        img={item.prev}
        name={item.name}
        position={position}
        height={height}
        handlePress={handlePress}
        marginTop={marginTop}
      />
    )
  }

  return (
    <Animated.View
      style={[
        selectionCard,
        { backgroundColor: color ? color : COLORS.primaryTrans },
      ]}
      entering={SlideInLeft.duration(500)}
      exiting={SlideOutLeft.duration(1000)}
    >
      <View style={[container, listContainer]}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={renderData}
          contentContainerStyle={{
            justifyContent: 'center',
            height: '100%',
            flexGrow: 1,
          }}
        />
      </View>
      <SelectionNavbar
        handleLeftBtn={handleLeftBtn}
        handleRightBtn={goNext}
        hideLeftArr={hideLeftArr}
        hideRightArr={hideRightArr}
        showSave={showSave}
        checker={checker}
        label={label}
      />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  selectionCard: {
    width: '100%',
    height: WINDOW_HEIGHT * 0.9,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 3,
    borderColor: COLORS.accent,
    position: 'absolute',
    top: 'auto',
    bottom: 'auto',
  },
  listContainer: {
    height: WINDOW_HEIGHT * 0.9 - 70,
    width: '100%',
  },
})

export default SelectionCard
