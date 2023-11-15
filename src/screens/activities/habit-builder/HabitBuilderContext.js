import React, { createContext, useContext } from 'react'

export const HabitBuilderContext = createContext()
export const useHabitBuilderContext = () => useContext(HabitBuilderContext)
