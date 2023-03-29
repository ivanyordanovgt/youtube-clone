import React, { useEffect, useState } from 'react'
import { TextField, Box } from '@mui/material'
const Login = () => {
    console.log('register!  ')
    const [formValues, setFormValues] = useState({
        'email': '',
        'password': '',
    })
    const onSubmit = () => {

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
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
    </div>
  )
}

export default Login