import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {Videos, ChannelCard} from '..'
import { fetchAPI } from '../../utils/fetchAPI';

function ChannelDetail(pylaUser) {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams();
  const [channelDetails, setChannelDetails] = useState({
    'id': '',
    'thubmnail': '',
    'title': '',
    'subscribersCount': 0,
    'videos': [],
    'values': {},
  })

  useEffect(() => {
    fetchAPI(`channels?part="snippet&id=${id}`)
    .then((data) => {
      const dataValues = data?.items[0];
      setChannelDetails((state) => ({...state, 
        'thubmnail': dataValues?.snippet?.thumbnails?.high?.url,
        'title': dataValues?.snippet?.title,
        subscribersCount: dataValues?.statistics?.subscriberCount,
        
      }))})
    
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`)
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
            'thubmnail': video?.snippet?.thumbnails.high.url,
            'title': video.snippet?.title,
          }
        )
      }

      console.log(videos, '!!!VIDS')
      setVideos(videos)})
  }, [id, channelDetails])
  return (
    <Box minHeight="95vh">
      <button onClick={() => console.log(channelDetails)}>details</button>

      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 7%, rgba(180,58,179,1) 49%, rgba(85,25,25,1) 100%)', 
          zIndex: 10, height: '300px'}}>HAHAHA</div>
        <ChannelCard channelDetail={channelDetails} marginTop='-93px'></ChannelCard>
      </Box>

      <Box display="flex" p="2">
        <Box sx={{mr: {sm: '100px'}}}/>
        <Videos videos={videos}></Videos>

      </Box>

    </Box>
    
  )
}

export default ChannelDetail