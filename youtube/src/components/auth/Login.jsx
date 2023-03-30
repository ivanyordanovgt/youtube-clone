import React from 'react'
import { useEffect, useState } from 'react'
import { TextField, Box, Button } from '@mui/material'
import { authAPI } from '../../apis/axiosClient'
import { useForm } from '../../hooks/useForm'
const Login = () => {
    const {formValues, onChangeHandler} = useForm({
        'email': '',
        'password': '',
    })

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (formValues.email && formValues.password) {
            const response = authAPI.post('login', formValues);
        } else alert('no no')

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