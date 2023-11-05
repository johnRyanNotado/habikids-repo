import { useState, useEffect } from 'react'
import { signupUrl } from '../constants/db_config'
import { useAppContext } from '../screens/context-api/ContextAPI'

const url = signupUrl

const useRegister = (props) => {
  const { email, password, setResponse } = props
  const { isLoading, setIsLoading, setIsError, isError } = useAppContext()

  const fetchData = async () => {
    try {
      const resp = await fetch(url, {
        method: 'POST',
        body: { user_email: `${email}`, user_password: `${password}` },
      })

      if (!resp.ok) {
        setIsError(true)
        setIsLoading(false)
        return
      }
      const response = await resp.json()
      setResponse(response)
    } catch (err) {
      setIsError(true)
    }
    setIsLoading(false)
  }
  setIsLoading(true)
  fetchData()

  return <></>
}

export default useRegister
