import React, { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import {Box} from '@mui/material'
import {Navbar, Feed, ChannelDetail, SearchFeed, VideoDetail} from './components'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import { authAPI } from './apis/authAPI'
import { LoggedInContext } from './context/LoggedInContext'
import { axiosClient } from './apis/axiosClient'
import Logout from './components/auth/Logout'
import { AuthenticatedRoutes } from './utils/authGuard'
import { UnAuthenticatedRoutes } from './utils/unAuthGuard'
import ProfileDetail from './components/user/Profile'
import EditProfile from './components/user/EditProfile'
import PostVideo from './components/user/PostVideo'
import PageNotFound from './components/pageNotFound'
import EditVideo from './components/user/EditVideo'
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
                
                <Route element={<AuthenticatedRoutes/>}>
                <Route path='/logout' element={<Logout/>} exact/>
                <Route path='/user/profile' element={<ProfileDetail/>} exact/>
                <Route path='/user/profile/edit' element={<EditProfile/>} exact/>
                <Route path='/user/video/post' element={<PostVideo/>} exact/>
                <Route path='/video/edit/:videoId' element={<EditVideo/>} exact/>

                </Route>
              <Route element={<UnAuthenticatedRoutes/>}>
                <Route path='/register' element={<Register></Register>}/>
                <Route path='/login' element={<Login></Login>}/>
              </Route>
                 <Route path='/' exact element={<Feed/>}/>
              <Route path='/video/:id' element={<VideoDetail/>}/>
              <Route path='/channel/:id' element={<ChannelDetail/>}/>
              <Route path='/search/:searchParam' element={<SearchFeed/>}/>
              <Route path='*' element={<PageNotFound/>}/>
              </Routes>
              </LoggedInContext.Provider>
              <Routes>
           

              </Routes>
              
        </Box>
    </BrowserRouter>
  )
}

export default App