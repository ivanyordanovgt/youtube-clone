import React, { useEffect, useState } from 'react'
import { TextField, Box, Button } from '@mui/material'
const Login = () => {
    console.log('register!  ')
    const [formValues, setFormValues] = useState({
        'email': '',
        'password': '',
    })
    const onSubmit = () => {

    }

    const onChangeHandler = (e) => {
        setFormValues(state => ({...state, [e.target.name]: [e.target.value]}))
        console.log(e.target.value)
    }
    
  return (
    <div style={{backgroundColor: 'white', marginTop: '20vh'}}>
           <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={onChangeHandler} label="Email" variant="filled" name="email" value={formValues.email}/>
      <TextField onChange={onChangeHandler} label="Password" variant="filled" name="password" value={formValues.password}/>
      <Button variant="outlined" style={{width: '7vw'}}>Register</Button>
    </Box>
    </div>
  )
}

export default Login