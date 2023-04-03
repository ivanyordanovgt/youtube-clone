import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Videos from './Videos'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { axiosClient } from '../../apis/axiosClient'
const ServerSideVideos = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axiosClient.post('video', {
            getAll: true
        }).then(data => {setVideos(data.data.data)})
    }, [])
  return (
    <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
    <Box sx={{
      height: {sx: 'auto', md: '92vh'}, 
      borderRight: '1px solid #3d3d3d', 
      px: {sx: 0, md: 2}}}>
        <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
          Copyright 2023 
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
          <span style={{color: '#31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
        
      </Box>
      
  </Stack>
  )
}

export default ServerSideVideos