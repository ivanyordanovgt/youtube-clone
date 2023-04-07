import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {Videos} from '..'
import { fetchAPI } from '../../utils/fetchAPI'
import './Videos'
const VideoDetail = ({nonYoutube, video}) => {

  const {id} = useParams();
  const [videoDetail, setVideoDetail] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState(null)
  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))
    if (!nonYoutube) {
      fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
        (data) => {
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
        setRelatedVideos(videos)
        }
      )
    } else {
      setVideoDetail(video);
    }
    
  }, [id, videoDetail])

  if (!videoDetail?.snippet) return <h1>Loading</h1>
  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail

  return (
    <Box minHeight="105vh">
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{width: '100%', height: "50%", position: 'sticky', top: '86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
            <Typography color="#fff" variant='h5' fontWeight="bold" sx={{paddingLeft: '2vw', paddingTop: '1vh'}}> {title}
            </Typography>
            <Stack direction='row' justifyContent="space-between" sx={{color: '#fff', float: 'left'}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm: 'subtitle1', md: 'h7'}} color='#fff'>{channelTitle}</Typography>
                <CheckCircle sx={{fontSize: '12px', color: 'gray', ml: '5px'}}></CheckCircle>
              </Link>
            </Stack>
            <Stack direction="row" gap="20px" alignItems="center" sx={{float: 'right', height: '5vh'}}>
              <Typography variant='body1' sx={{opacity: 0.7, color: '#fff'}}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>

              <Typography variant='body1' sx={{opacity: 0.7, color: '#fff', mr:'5vw'}}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md: 1, xs: 5}} justifyContent="center" alignItems="center">
        {nonYoutube ? '': <Videos videos={relatedVideos} direction="column"/>}

      </Box>
      </Stack>

      
    </Box>
  )
}

export default VideoDetail