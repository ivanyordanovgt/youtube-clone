import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia, Button } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { useState } from 'react'
import {deboThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../../utils/contants'
import { useEffect } from 'react'
import { authAPI } from '../../apis/authAPI'
const VideoCard = ({ video }) => {
  const [userId, setUserId] = useState()
  useEffect(() => {
    authAPI.getUser().then(data => {
      setUserId(data.data.data.id)
    }).catch(err => console.log(err))
  }, [userId])

  return (
    <Card sx={{width: {md: '300px', xs: '100%'}, boxShadow: 'none', borderRadius: 'none'}}>
      <Link to={video?.id ? `/video/${video.id}` : `/video/${video.videoId}`}>
        <CardMedia 
          image={video?.thumbnail} alt={video.title}
          sx={{width: {md: 358, xs: '100%'}, height: 180}}>
         
        </CardMedia>
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}} >
      
      
      <Link to={video?.id ? `/video/${video.id}` : `/video/${video.videoId}`}> 
      <Typography variant="subtitle1" fontWeight="bold" color="#FFF" >
        {video?.title || demoVideoTitle?.slice(0, 40) }
      </Typography>
      </Link>
      <Typography sx={{color: 'gray'}}>
        {video?.description?.slice(0, 90)} {video.description?.length > 90 ? '...': ' '}
      </Typography>

      {video?.user===userId ? <Button variant='outlined'>EDIT</Button> : ''}
      
      </CardContent>
    </Card>
  )
}

export default VideoCard