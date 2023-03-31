import React from 'react'
import { useState, useEffect } from 'react'
import {Box, Stack, Typography} from "@mui/material"
import {Videos} from '..'
import { fetchAPI } from '../../utils/fetchAPI'
import { useParams } from 'react-router-dom'

function SearchFeed() {
  const [videos, setVideos] = useState(null);
  const { searchParam } = useParams();
  console.log(searchParam, '!!!!!!')

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchParam}`)
      .then((data) => {console.log('videos!'); 
    
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
      setVideos(videos)})
  }, [searchParam]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchParam}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
}

export default SearchFeed