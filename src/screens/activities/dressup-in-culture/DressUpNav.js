import React, { useState, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { MAIN_HEADER_OPT } from '../../../constants/headerOption'
import { DressUp, DressUpCA } from './index'
import { db_DressUp } from '../../../constants/temp_db/activities/db_DressUp'
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated'
import { DressUpContext } from './DressUpContext'
import { useChildSectionContext } from '../../context-api/ContextAPI'
import SelectionCard from '../../../components/activities/dress-up/SelectionCard'
import COLORS from '../../../constants/colors'

const DressUpStack = createStackNavigator()

const DressUpNav = ({ navigation }) => {
  const { selectedYear, actID } = useChildSectionContext()
  const score = useSharedValue(0)
  const [isFinished, setIsFinished] = useState(false)
  const [gameData, setGameData] = useState(null)
  const [character, setCharacter] = useState(null)
  const [gender, setGender] = useState(null)
  const [bottom, setBottom] = useState(null)
  const [top, setTop] = useState(null)
  const [shoes, setShoes] = useState(null)
  const [accessories, setAccessories] = useState(null)
  const [charSelection, setCharSelection] = useState(null)
  const [topSelection, setTopSelection] = useState(null)
  const [bottomSelection, setBottomSelection] = useState(null)
  const [shoesSelection, setShoesSelection] = useState(null)
  const [accessSelection, setAccessSelection] = useState(null)
  const [numOfClothes, setNumOfClothes] = useState(0)
  const [instruction, setInstruction] = useState('')
  const [instructionDuration, setInstructionDuration] = useState(0)
  const [narrator, setNarrator] = useState('uni')
  const [comp, setComp] = useState(<DressUpCA />)
  const goBack = () => {
    navigation.goBack()
  }
  const showScoreCard = () => {
    setComp(<DressUpCA />)
  }

  useEffect(() => {
    db_DressUp.grade[selectedYear - 1].map((item) => {
      if (actID === item.id) {
        setGameData(item)
        setInstruction(item.instruction)
        setInstructionDuration(item.instructionDuration * 1000)
        setNarrator(item.narrator)
      }
    })
  }, [selectedYear, actID])

  const handleGenderChanged = (gender) => {
    setNumOfClothes(0)
    setGender(gender)
    setTop(null)
    setBottom(null)
    setShoes(null)
    setAccessories(null)
  }

  useEffect(() => {
    if (gameData) {
      const custPosition = {
        position: 'absolute',
        top: 'auto',
        left: 'auto',
        bottom: 'auto',
        right: 'auto',
      }
      let tempAccessSelect = (
        <SelectionCard
          data={
            gender === 'boy'
              ? gameData.data.boy.accessories
              : gameData.data.girl.accessories
          }
          color={COLORS.redPrimary}
          handleLeftBtn={() => setAccessSelection(null)}
          handleRightBtn={() => setAccessSelection(null)}
          checker={4}
          position={{ ...custPosition }}
          marginTop={60}
          height={300}
          putOn={(link) => setAccessories(link)}
          label={'Akseso'}
          hideRightArr={true}
          showSave={true}
        />
      )
      let tempShoesSelect = (
        <SelectionCard
          data={
            gender === 'boy'
              ? gameData.data.boy.shoes
              : gameData.data.girl.shoes
          }
          color={COLORS.yellowPrimary}
          handleLeftBtn={() => setShoesSelection(null)}
          handleRightBtn={() => setAccessSelection(tempAccessSelect)}
          checker={3}
          position={{ ...custPosition }}
          putOn={(link) => setShoes(link)}
          label={'Pangyapak'}
        />
      )
      let tempBottomSelect = (
        <SelectionCard
          data={
            gender === 'boy'
              ? gameData.data.boy.bottom
              : gameData.data.girl.bottom
          }
          color={COLORS.bluePrimary}
          handleLeftBtn={() => setBottomSelection(null)}
          handleRightBtn={() => setShoesSelection(tempShoesSelect)}
          checker={2}
          position={{ ...custPosition }}
          putOn={(link) => setBottom(link)}
          label={'Pang-ibaba'}
        />
      )
      let tempTopSelect = (
        <SelectionCard
          data={
            gender === 'boy' ? gameData.data.boy.top : gameData.data.girl.top
          }
          color={COLORS.greenSecond}
          handleLeftBtn={() => setTopSelection(null)}
          handleRightBtn={() => setBottomSelection(tempBottomSelect)}
          checker={1}
          position={{ ...custPosition }}
          putOn={(link) => setTop(link)}
          label={'Pang-itaas'}
        />
      )

      setCharSelection(
        <SelectionCard
          data={gameData.data.character}
          color={COLORS.primary}
          handleLeftBtn={() => setTopSelection(null)}
          handleRightBtn={() => setTopSelection(tempTopSelect)}
          checker={0}
          position={{ ...custPosition }}
          height={250}
          putOn={(link) => setCharacter(link)}
          label={'Karakter'}
          setGender={handleGenderChanged}
          hideLeftArr={true}
        />
      )
    }
  }, [gameData, character, top, bottom, accessories, shoes, gender])

  return (
    <DressUpContext.Provider
      value={{
        score,
        instruction,
        instructionDuration,
        narrator,
        gameData,
        setGameData,
        isFinished,
        setIsFinished,
        character,
        setCharacter,
        gender,
        setGender,
        charSelection,
        setCharSelection,
        bottom,
        setBottom,
        top,
        setTop,
        shoes,
        setShoes,
        accessories,
        setAccessories,
        bottomSelection,
        setBottomSelection,
        topSelection,
        setTopSelection,
        shoesSelection,
        setShoesSelection,
        accessSelection,
        setAccessSelection,
        numOfClothes,
        setNumOfClothes,
        comp,
        setComp,
        showScoreCard,
        goBack,
        DressUp,
        DressUpCA,
      }}
    >
      {comp ? comp : null}
      {/* <DressUpStack.Navigator>
        <DressUpStack.Screen
          name="DressUpCA"
          component={DressUpCA}
          options={MAIN_HEADER_OPT}
        />
        <DressUpStack.Screen
          name="DressUp"
          component={DressUp}
          options={MAIN_HEADER_OPT}
        />
      </DressUpStack.Navigator> */}
    </DressUpContext.Provider>
  )
}
export default DressUpNav
