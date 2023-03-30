import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { TextField, Box, Button } from '@mui/material'
import { authAPI } from '../../apis/authAPI'
import { useForm } from '../../hooks/useForm'
import { useCookies } from 'react-cookie'
import { LoggedInContext } from '../../context/LoggedInContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    const {formValues, onChangeHandler} = useForm({
        'email': '',
        'password': '',
    })

    const {error, setError} = useState(false)

    const {setIsLoggedIn} = useContext(LoggedInContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        authAPI.login(formValues).then(data => {
          setIsLoggedIn(true)
          setError(false)
          navigate('/')
        })
        setError(true)
    }
    
  return (
    <div style={{backgroundColor: 'white', marginTop: '20vh'}}>
    
    <Box
      component="form"
      onSubmit={onSubmitHandler}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    
      <TextField error={error} onChange={onChangeHandler} label="Email" variant="filled" name="email" value={formValues.email}/>
      <TextField error={error} onChange={onChangeHandler} label="Password" variant="filled" name="password" value={formValues.password}/>
      <Button variant="outlined" type='submit' style={{width: '7vw'}}>Login</Button>
    </Box>
    </div>
  )
}

export default Login