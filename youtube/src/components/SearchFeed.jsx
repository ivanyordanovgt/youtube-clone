import React from 'react'
import { useState, useEffect } from 'react'
import {Box, Stack, Typography} from "@mui/material"
import {Videos} from './'
import { fetchAPI } from '../utils/fetchAPI'
import { useParams } from 'react-router-dom'

function SearchFeed() {
  
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=`)
    .then((data) => {setVideos(data.items)})
  })

  
  return (
    
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
          Search results for:  <span style={{color: '#31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
        
      </Box>
        
    )
}

export default SearchFeed