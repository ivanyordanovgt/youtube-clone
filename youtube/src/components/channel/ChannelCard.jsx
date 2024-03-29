import React from 'react'
import {Box, CardContent, CardMedia, Typography} from "@mui/material"
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../../utils/contants'
const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
    sx={
      {
        boxShadow: 'none', 
        borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: {
          xs: '356px', md: '320px'
        }, margin: 'auto', marginTop}}
    >
    
    <Link
    to={`/channel/${channelDetail?.channelId}`}
    >
      <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
        <CardMedia image={channelDetail.thubmnail || demoProfilePicture}
        alt={channelDetail?.title} sx={
          {
          borderRadius: '50%', 
          height: '180px', 
          width: '180px', mb: 2, border: '1px solid #e3e3e3'}}
        />

        <Typography variant='h6'> 
            {channelDetail.title}
            <CheckCircle sx={{fontSize: 15, color: 'gray', ml: '5px'}}></CheckCircle>
        </Typography>
        {channelDetail.subscribersCount && (
          <Typography> {parseInt(channelDetail.subscribersCount).toLocaleString()} Subscribers</Typography>
        )}
      </CardContent>
    </Link>
    
    </Box>
    
  )
}

export default ChannelCard