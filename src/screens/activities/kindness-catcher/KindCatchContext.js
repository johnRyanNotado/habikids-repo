import React, { createContext, useContext } from 'react'
export const KindCatchContext = createContext()
export const useKindCatchContext = () => useContext(KindCatchContext)
