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
const Register = () => {
  const navigate = useNavigate();
  const {formValues, onChangeHandler} = useForm({
        'email': '',
        'password': '',
        'profileUsername': '',
    })
  const [errors, setErrors] = useState({
    'email': [],
    'password': [],
    'profileUsername': [],
  })
  const [formError, setFormError] = useState(false);

  const onSubmitHandler = (e) => {
      e.preventDefault();
      
      const res = authAPI.register(formValues)
      .then(data => navigate('/login'))
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
          Register
        </Typography>
        <Box component="form" onSubmit={onSubmitHandler} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formValues.email}
            onChange={onChangeHandler}
            error={formError}
            helperText={errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="profileUsername"
            label="profileUsername"
            name="profileUsername"
            autoComplete="profileUsername"
            autoFocus
            value={formValues.profileUsername}
            onChange={onChangeHandler}
            error={formError}
            helperText={errors.profileUsername}
            inputProps={{maxLength: 18}}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formValues.password}
            onChange={onChangeHandler}
            error={formError}
            helperText={errors.password}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Retype Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formValues.password}
            onChange={onChangeHandler}
            error={formError}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Login"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    </div>
  )
}

export default Register