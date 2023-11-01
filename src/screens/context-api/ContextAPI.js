import React, { createContext, useContext } from 'react'

export const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

// Create a context for the children data
export const ChildDataContext = createContext()
export const useChildDataContext = () => useContext(ChildDataContext)

// Context for selected child for the manage profiles and child-section
export const ChosenChildContext = createContext()
export const useChosenChildContext = () => useContext(ChosenChildContext)

// Context for the data and functions in child section
export const ChildSectionContext = createContext()
export const useChildSectionContext = () => useContext(ChildSectionContext)

// Context for navigating through child section
export const HomeChildSectionContext = createContext()
export const useHomeChildSectionContext = () =>
  useContext(HomeChildSectionContext)

// Context for the data in activities
export const ActivitiesContext = createContext()
export const useActivitiesContext = () => useContext(ActivitiesContext)

// Context for the lessons data
export const LessonsContext = createContext()
export const useLessonsContext = () => useContext(LessonsContext)
