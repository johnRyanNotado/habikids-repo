import React, { createContext, useContext } from 'react'

export const SpecificLessonContext = createContext()
export const useSpecificLessonContext = () => useContext(SpecificLessonContext)
