import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import {Navbar, Feed, ChannelDetail, SearchFeed, VideoDetail} from './components'
import Register from './components/Register'
const App = () => {
  return (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar/>
            <Routes>
            <Route path='/' exact element={<Feed/>}/>
            <Route path='/video/:id' element={<VideoDetail/>}/>
            <Route path='/channel/:id' element={<ChannelDetail/>}/>
            <Route path='/search/:searchParam' element={<SearchFeed/>}/>
            <Route path='/register' element={<Register></Register>}/>
            </Routes>
        </Box>
    </BrowserRouter>
  )
}

export default App