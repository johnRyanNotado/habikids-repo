import React, { createContext, useContext } from 'react'
export const CTRPContext = createContext()
export const useCTRPContext = () => useContext(CTRPContext)
