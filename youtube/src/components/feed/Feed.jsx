import React from 'react'
import { useState, useEffect } from 'react'
import {Box, Stack, Typography} from "@mui/material"
import {SideBar, Videos} from '..'
import { fetchAPI } from '../../utils/fetchAPI'
import { axiosClient } from '../../apis/axiosClient'
function Feed({customYoutube}) {
  
  const [selectedCategory, setSelectedCategory] = useState('New'); 
  const [videos, setVideos] = useState([])

  useEffect(() => {
    console.log(customYoutube, '!!!!!!!!!!!')
    if (!customYoutube) {
      fetchAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        console.log(data?.items)
        const videos = [];
        for (let video of data?.items) {
          videos.push(
            {
              'id': video.id.videoId,
              'channelId': video.snippet?.channelId,
              'channelTitle': video.snippet?.channelTitle,
              'description': video.snippet?.description,
              'thumbnail': video?.snippet?.thumbnails.high  .url,
              'title': video.snippet?.title,
            }
          )
        }

        console.log(videos, '!!!VIDS')
        setVideos(videos)
        return
      })
    }

    axiosClient.post('video', {
      'getAll': true
    }).then(data => console.log(data)).catch()
    
  }, [selectedCategory])

  
  return (
    <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
      <Box sx={{
        height: {sx: 'auto', md: '92vh'}, 
        borderRight: '1px solid #3d3d3d', 
        px: {sx: 0, md: 2}}}>
          <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff'}}>
            Copyright 2023 
          </Typography>
        </Box>
        <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
            {selectedCategory} <span style={{color: '#31503'}}>Videos</span>
          </Typography>
          <Videos videos={videos}/>
          
        </Box>
        
    </Stack>
    )
}

export default Feed