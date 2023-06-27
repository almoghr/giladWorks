/* eslint-disable react/prop-types */
import { useState } from "react"
import { checkEmailValidity } from "../utils/emailValidator"

const LoginPage = ({setIsAuthenticated}) => {
  const [signedUser, setSignedUser] = useState({})
  const [error,setError] = useState('')

const handleChange = (e) => {
  setError('')
  setSignedUser({...signedUser, [e.target.name]: e.target.value})
}

const handleSubmit = () => {
  if(checkEmailValidity(signedUser.email)){
    if(signedUser.username.length > 3){
      setIsAuthenticated(true)
      localStorage.setItem('AuthenticatedUser', JSON.stringify(signedUser))
    } else{
      setError('username does meet the minimum requirements of 3 letters')
    }
  } else{
    setError('email is not valid')
    return
  }
}
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'10px'}}>
      <input placeholder="username" name="username" onChange={handleChange}/>
      <input placeholder="Email" type="email" name="email" onChange={handleChange}/>
      <button onClick={handleSubmit}>SUBMIT</button>
      {error && <strong>{error}</strong>}
    </div>
  )
}

export default LoginPage