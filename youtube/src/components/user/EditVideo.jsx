import React from 'react'
import { useParams } from 'react-router-dom';
import VideoCard from '../videos/VideoCard'
import VideoDetail from '../videos/VideoDetail'
import { useEffect, useState } from 'react'
import { TextField, Box, Button } from '@mui/material'
import { authAPI } from '../../apis/authAPI'
import { useForm } from '../../hooks/useForm'
import { useCookies } from 'react-cookie'
import { LoggedInContext } from '../../context/LoggedInContext'
import { useNavigate } from 'react-router-dom';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { axiosClient } from '../../apis/axiosClient'
import videoValidator from '../../validators/videoValidator'
const EditVideo = () => {
  const {videoId} = useParams();
  const [userId, setUserId] = useState();
  const {formValues, onChangeHandler, setFormValues} = useForm({
    'title': '',
    'description': '',
    'thumbnail': '',
    'videoId': '',
    'user': '',
  });
  

  useEffect(() => {
    authAPI.getUser().then(data => setUserId(data.data.data.id))
  }, [])

  useEffect(() => {
    axiosClient.post('video', {videoId: videoId}).then(data => setFormValues(data.data.data))
  }, []) 
  return (
    <div style={{backgroundColor: 'white', marginTop: '20vh'}}>
    <div style={{height: '.1vh'}}></div>
    <Container component="main" maxWidth="xs">
      <h1>{userId}</h1>
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Edit video {videoId}
        </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>

          <TextField
            margin="normal"
            required
            fullWidth
            name="title"
            label="title"
            id="videoId"
            value={formValues.title}
            onChange={onChangeHandler}
          />

        <TextField
            margin="normal"
            required
            fullWidth
            name="description"
            label="description"
            id="videoId"
            value={formValues.description}
            onChange={onChangeHandler}
          />
            <TextField
            margin="normal"
            required
            fullWidth
            name="thumbnail"
            label="thubmnail url"
            id="description"
            value={formValues.thumbnail}
            onChange={onChangeHandler}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Post
          </Button>
          
        </Box>
      </Box>
      
      
    </Container></div>
    
  )
}

export default EditVideo