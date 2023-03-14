import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import {deboThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../utils/contants'
const VideoCard = ({ video: {id: {videoId}, snippet} }) => {
  return (
    <Card sx={{width: {md: '300px', xs: '100%'}, boxShadow: 'none', borderRadius: 'none'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url} alt={snippet?.title}
          sx={{width: {md: 358, xs: '100%'}, height: 180}}>
         
        </CardMedia>
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}} >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}> 
      <Typography variant="subtitle1" fontWeight="bold" color="#FFF" >
        {snippet?.title || demoVideoTitle?.slice(0, 40) }
      </Typography>
      </Link>

      <Link to={snippet?.channelId ? `/channel/channelId` : demoChannelUrl}> 
      <Typography variant="subtitle2" fontWeight="bold" color="gray" sx={{width: '23vw'}}>
        {snippet?.channelTitle?.slice(0, 60) || demoChannelTitle?.slice(0, 40) }
        <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}}></CheckCircle>
      </Typography>
      </Link>

      <Typography sx={{color: 'gray'}}>
        {snippet?.description?.slice(0, 90)} {snippet?.description?.length > 90 ? '...': ' '}
      </Typography>
      </CardContent>
    </Card>
  )
}

export default VideoCard