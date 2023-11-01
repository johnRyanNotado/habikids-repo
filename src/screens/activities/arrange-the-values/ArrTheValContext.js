import React, { createContext, useContext } from 'react'

export const ArrTheValContext = createContext()
export const useArrTheValContext = () => useContext(ArrTheValContext)
