import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {Videos, ChannelCard} from './'
import { fetchAPI } from '../utils/fetchAPI';

function ChannelDetail() {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams();

  useEffect(() => {
    fetchAPI(`channels?part="snippet&id=${id}`)
    .then((data) => {console.log(data.items[0].snippet?.thumbnails?.high?.url); setChannelDetail(data?.items[0])})
    
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => {setVideos(data?.items)})
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 7%, rgba(180,58,179,1) 49%, rgba(85,25,25,1) 100%)', 
          zIndex: 10, height: '300px'}}>HAHAHA</div>
      </Box>
      <ChannelCard channelDetail={channelDetail} marginTop='-93px'></ChannelCard>
    </Box>
    
  )
}

export default ChannelDetail