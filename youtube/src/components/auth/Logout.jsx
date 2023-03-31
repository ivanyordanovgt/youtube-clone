import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { authAPI } from '../../apis/authAPI';
import { LoggedInContext } from '../../context/LoggedInContext';
import '../../styles/logout.css';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const {setIsLoggedIn} = useContext(LoggedInContext)
    const navigate = useNavigate();
    const onLogoutClickHandler = () => {
        authAPI.logout();
        setIsLoggedIn(false);
        navigate('/')
    }

  return (
    <Box className='box'>
      <div class="message">
      <h1>Are you sure you want to logout ?</h1>
      <p>If your logging out to switch to a different account you can do that without logging of
      Just click on <span id='profileSpan'>profile</span> and click <span id='switchSpan'>switch profile!</span>
      </p>
      <p></p>
        <Button className="button" variant="outlined" onClick={onLogoutClickHandler}>LOGOUT</Button>
      </div>
    </Box>
  )
}

export default Logout