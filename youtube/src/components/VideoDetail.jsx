import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {Videos} from './'
import { fetchAPI } from '../utils/fetchAPI'
import './Videos'
const VideoDetail = () => {

  const {id} = useParams();
  const [videoDetail, setVideoDetail] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState(null)
  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideos(data.items)
    )
  }, [id])

  if (!videoDetail?.snippet) return <h1>Loading</h1>
  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail

  return (
    <Box minHeight="95vh">
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography color="#fff" variant='h5' fontWeight="bold" p={2}> {title}
            </Typography>
            <Stack direction='row' justifyContent="space-between" sx={{color: '#fff', float: 'left'}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm: 'subtitle1', md: 'h6'}} color='#fff'>{channelTitle}</Typography>
                <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}></CheckCircle>
              </Link>
            </Stack>
            <Stack direction="row" gap="20px" alignItems="center" sx={{float: 'right'}}>
              <Typography variant='body1' sx={{opacity: 0.7, color: '#fff'}}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>

              <Typography variant='body1' sx={{opacity: 0.7, color: '#fff', mr:'5vw'}}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <Videos videos={relatedVideos}/>

      <Box px={2} py={{md: 1, xs: 5}} justifyContent="center" alignItems="center">
      </Box>
    </Box>
  )
}

export default VideoDetail