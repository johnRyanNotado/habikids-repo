import React, { useState, useEffect } from 'react'
import { useAppContext } from '../screens/context-api/ContextAPI'
import { fetchLesAct } from '../constants/db_config'

const useFetchLesAct = () => {
  const { user, setIsError, setIsLoading, dataChanged } = useAppContext()
  const [lessonsData, setLessonsData] = useState(null)
  const [activitiesData, setActivitiesData] = useState(null)

  useEffect(() => {
    if (user) {
      const fetchLearner = async () => {
        try {
          const resp = await fetch(fetchLesAct, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({ user_id: user.user_id }),
          })
          const response = await resp.json()
          console.log('Response:\tLessons: ', response.lessonsData.GOOD_HABITS)
          setLessonsData(response.lessonsData)
          setActivitiesData(response.activitiesData)
        } catch (err) {
          console.log('Error: ', err)
          setIsError(true)
        }
        setIsLoading(false)
      }
      setIsLoading(true)
      fetchLearner()
    }
  }, [dataChanged])
  return { lessonsData, activitiesData, setLessonsData, setActivitiesData }
}

export default useFetchLesAct
