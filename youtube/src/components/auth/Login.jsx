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
const Login = () => {
    const navigate = useNavigate();
    const {formValues, onChangeHandler} = useForm({
        'email': '',
        'password': '',
    })
    const [count, setCount] = useState(false);
    const {error, setError} = React.useState(false)
    const {setIsLoggedIn} = useContext(LoggedInContext);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        authAPI.login(formValues).then(data => {
          setIsLoggedIn(true)
          console.log(data, '???')
          navigate('/')
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
          Sign in
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
            error={count}
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
            error={count}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    </div>

    
  )
}

export default Login