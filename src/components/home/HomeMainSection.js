import React from 'react'
import { globalStyles } from '../../styles/GlobalStyles'
import COLORS from '../../constants/colors'
import ListChild from './ListChild'
import { useChildDataContext } from '../../screens/registered-user-screens/NavScreen'
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native'

const HomeMainSection = (props) => {
  const { handleOnChildChosen, handleAddBtn } = props
  const { childData } = useChildDataContext()
  const {
    mainSectionWrapper,
    childrenIconWrapper,
    addChildBtnWrapper,
    plusIconStyle,
    plusIconWrapper,
  } = styles

  const renderChild = ({ item }) => {
    const { id, name, age, avatarNum } = item
    return (
      <ListChild
        id={id}
        name={name}
        avatarNum={avatarNum}
        handleOnPress={() =>
          handleOnChildChosen({
            id: id,
            name: name,
            age: age,
            avatarNum: avatarNum,
          })
        }
      />
    )
  }

  return (
    <View style={[mainSectionWrapper, globalStyles.centered]}>
      <View style={childrenIconWrapper}>
        <FlatList
          horizontal={true}
          data={childData}
          renderItem={renderChild}
          contentContainerStyle={{
            justifyContent: 'center',
            flexGrow: 1,
          }}
        />
      </View>
      <View style={addChildBtnWrapper}>
        <TouchableOpacity onPress={handleAddBtn}>
          <View style={plusIconWrapper}>
            <Image
              style={plusIconStyle}
              source={require('../../img/plus-icon.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainSectionWrapper: {
    width: '100%',
    height: '87.5%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  childrenIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '80%',
  },
  addChildBtnWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '25%',
  },
  plusIconStyle: {
    width: 20,
    height: 20,
  },
  plusIconWrapper: {
    backgroundColor: COLORS.greenPrimary,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 25,
    borderColor: COLORS.white,
  },
})

export default HomeMainSection
