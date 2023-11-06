import React, { useState, useEffect } from 'react'
import { useAppContext } from '../screens/context-api/ContextAPI'
import { fetchLearnerUrl } from '../constants/db_config'

const useFetchLearner = () => {
  const { user, setIsError, setIsLoading, dataChanged } = useAppContext()
  const [childData, setChildData] = useState(null)
  useEffect(() => {
    if (user) {
      const fetchLearner = async () => {
        try {
          const resp = await fetch(fetchLearnerUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({ user_id: user.user_id }),
          })
          const response = await resp.json()
          console.log('Response: ', response)
          if (response.learnersData.length > 0) {
            const formattedResp = response.learnersData.map(
              (learner, index) => {
                return {
                  id: learner.learner_id,
                  name: learner.learner_name,
                  age: learner.learner_age,
                  avatarNum: learner.avatar_num,
                }
              }
            )
            console.log('Learner: ', formattedResp)
            setChildData(formattedResp)
          }
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
  return { childData, setChildData }
}

export default useFetchLearner
