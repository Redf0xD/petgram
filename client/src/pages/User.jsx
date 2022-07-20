import { SubmitButton } from '../components/SubmitButton'
import { UserContext } from '../Context/User/UserContext'
import { useContext } from 'react'

export const User = () => {
  const { desactiveAuth } = useContext(UserContext)
  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={desactiveAuth}>Log out</SubmitButton>
    </>
  )
}
