import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { TextField, Box, Button } from '@mui/material'
import { authAPI } from '../../apis/authAPI'
import { useForm } from '../../hooks/useForm'
import { useCookies } from 'react-cookie'
import { LoggedInContext } from '../../context/LoggedInContext'
import { useNavigate } from 'react-router-dom';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
const EditProfile = () => {
  const navigate = useNavigate();
  const {formValues, onChangeHandler} = useForm({
        'profileUsername': '',
        'profilePictureUrl': '',
    })
  const [errors, setErrors] = useState({
    'email': [],
    'password': [],
    'profileUsername': [],
  })
  const [formError, setFormError] = useState(false);

  const onSubmitHandler = (e) => {
      e.preventDefault();
      
      const res = authAPI.editProfile(formValues)
      .then(data => {navigate('/user/profile')})
      .catch(res => {
        setFormError(true)
        const errorData = res.response.data;
        setErrors({email: errorData.email, password: errorData.password, profileUsername: errorData.profileUsername})
      })
    }
    
  return (
    <div style={{backgroundColor: 'white', marginTop: '20vh'}}>
    <div style={{height: '.1vh'}}></div>
    <Box
      component="form"
      onSubmit={onSubmitHandler}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
    
    </Box>

    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Edit profile
        </Typography>
        <Box component="form" onSubmit={onSubmitHandler} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="profileUsername"
            autoComplete="email"
            autoFocus
            value={formValues['profileUsername']}
            onChange={onChangeHandler}
            error={formError}
            helperText={errors.email}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="profilePictureUrl"
            label="Profile picture URL"
            id="profilePictureUrl"
            autoComplete="current-password"
            value={formValues.profilePictureUrl}
            onChange={onChangeHandler}
            error={formError}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Edit
          </Button>
          
        </Box>
      </Box>
    </Container>
    </div>
  )
}

export default EditProfile