import React from 'react'
import { useEffect, useState } from 'react'
import { TextField, Box, Button } from '@mui/material'
import { authAPI } from '../../apis/authAPI'
import { useForm } from '../../hooks/useForm'
import { useCookies } from 'react-cookie'
const Login = () => {
    const {formValues, onChangeHandler} = useForm({
        'email': '',
        'password': '',
    })

    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const response = authAPI.login(formValues).then(data => console.log(data.data))
        // console.log(authAPI.isLoggedIn(), '???')

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
    
      <TextField onChange={onChangeHandler} label="Email" variant="filled" name="email" value={formValues.email}/>
      <TextField onChange={onChangeHandler} label="Password" variant="filled" name="password" value={formValues.password}/>
      <Button variant="outlined" type='submit' style={{width: '7vw'}}>Login</Button>
    </Box>
    </div>
  )
}

export default Login