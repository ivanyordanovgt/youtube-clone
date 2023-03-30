import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import {Navbar, Feed, ChannelDetail, SearchFeed, VideoDetail} from './components'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import { authAPI } from './apis/authAPI'
import { LoggedInContext } from './context/LoggedInContext'
import { axiosClient } from './apis/axiosClient'
import Logout from './components/auth/Logout'
const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      // axiosClient.get('user').then((data) => console.log(data.data.data.id));
      console.log(authAPI.isLoggedIn().then((res) => {
        setIsLoggedIn(res)
        console.log('done!', isLoggedIn)
      }));
    }, [isLoggedIn]);
  return (

    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <LoggedInContext.Provider value={{isLoggedIn, setIsLoggedIn}}> 
            <Navbar/>
            <Routes>
            <Route path='/logout' element={<Logout/>}/>
            </Routes>
            </LoggedInContext.Provider>
            <Routes>
            <Route path='/' exact element={<Feed/>}/>
            <Route path='/video/:id' element={<VideoDetail/>}/>
            <Route path='/channel/:id' element={<ChannelDetail/>}/>
            <Route path='/search/:searchParam' element={<SearchFeed/>}/>
            <Route path='/register' element={<Register></Register>}/>
            <Route path='/login' element={<Login></Login>}/>
            </Routes>
        </Box>
    </BrowserRouter>
  )
}

export default App