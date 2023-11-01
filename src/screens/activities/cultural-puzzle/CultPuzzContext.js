import React, { createContext, useContext } from 'react'

export const CultPuzzContext = createContext()
export const useCultPuzzContext = () => useContext(CultPuzzContext)
