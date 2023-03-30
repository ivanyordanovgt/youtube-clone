import React, { useEffect, useState } from 'react'
import { TextField, Box, Button } from '@mui/material'
import { authAPI } from '../../apis/authAPI'
import { useForm } from '../../hooks/useForm'
const Register = () => {
    const {formValues, onChangeHandler} = useForm({
        'email': '',
        'password': '',
    })

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (formValues.email && formValues.password) {
            authAPI.post('register', formValues)
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
      <Button variant="outlined" type='submit' style={{width: '7vw'}}>Register</Button>
    </Box>
    </div>
  )
}

export default Register