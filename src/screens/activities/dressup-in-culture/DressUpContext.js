import React, { createContext, useContext } from 'react'

export const DressUpContext = createContext()
export const useDressUpContext = () => useContext(DressUpContext)
