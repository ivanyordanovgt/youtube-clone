import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { authAPI } from '../../apis/authAPI'
import { LoggedInContext } from '../../context/LoggedInContext'

const Logout = () => {
    const {setIsLoggedIn} = useContext(LoggedInContext)
    const onLogoutClickHandler = () => {
        authAPI.logout();
        setIsLoggedIn(false);
    }

  return (
    <Box sx={{bgcolor: 'pink'}}>
        <h1>Are you sure you want to logout ?</h1>
        <button onClick={onLogoutClickHandler}>Logout</button>
    </Box>
  )
}

export default Logout