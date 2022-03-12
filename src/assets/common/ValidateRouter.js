import React from 'react'
import { useHistory } from 'react-router-dom'
function ValidateAuth() {
  let history = useHistory()
  const auth = localStorage.getItem('client_token')
  if (!auth) {
      console.log(auth)
    history.push('/login')
  }
  return <div></div>
}

export default ValidateAuth
