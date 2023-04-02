import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import {deboThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../../utils/contants'
const VideoCard = ({ video }) => {
  

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
      </CardContent>
    </Card>
  )
}

export default VideoCard