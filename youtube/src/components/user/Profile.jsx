import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import {Videos, ChannelCard} from '..'
import { fetchAPI } from '../../utils/fetchAPI';
import { axiosClient } from '../../apis/axiosClient';

function ProfileDetail({serverSideProfile}) {
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
    axiosClient.get('user').then(data => {
        console.log(data.data.data.profileUsername, ':D')
        const profileData = data.data.data;
        console.log(profileData)
        setChannelDetails(({ 
              'thubmnail': profileData.profilePictureUrl,
              'title': profileData.profileUsername,
              subscribersCount: 5,
              
            }))
    }) 

    axiosClient.get('video').then(data => {
      setVideos(data.data.data)
    })
  }, [id])
  return (
    <Box height="155vh">
      <button onClick={() => console.log(channelDetails)}>details</button>

      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 7%, rgba(180,58,179,1) 49%, rgba(85,25,25,1) 100%)', 
          zIndex: 10, height: '250px'}}></div>
        <ChannelCard channelDetail={channelDetails} marginTop='-93px'></ChannelCard>
        <Box sx={{marginLeft: '45.5vw'}}>
          <Link to={'edit'}>
            <Button sx={{mb: '2vh', width: '9vw'}}variant='outlined'>Edit Profile</Button>
          </Link>
          <br></br>
          <Link to={'/user/video/post'}>
            <Button variant='outlined' sx={{width: '9vw'}}>Post a video</Button>
          </Link>
        </Box>
        </Box>
      <div style={{'marginLeft': '5vw', 'marginTop': '5vh'}}>
        <Videos style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} videos={videos}></Videos>

      </div>

    </Box>
    
  )
}

export default ProfileDetail