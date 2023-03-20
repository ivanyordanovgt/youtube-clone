import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import Video from './Video'
import { fetchAPI } from '../utils/fetchAPI'
const VideoDetail = () => {

  const {id} = useParams();
  const [videoDetail, setVideoDetail] = useState(null)
  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))
  }, [id])

  const videoData = videoDetail?.snippet

  return (
    <Box minHeight="95vh">
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>
            </Typography>
            <Stack >
              <Link to={`/channel/${videoData.channelId}`}>
                <Typography>{videoData.channelTitle}</Typography>
              </Link>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail