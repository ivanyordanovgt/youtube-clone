import React from 'react'
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
const PostVideo = () => {

    const [video, setVideo] = useState({})
    const {formValues, onChangeHandler} = useForm({
        'title': '',
        'id': '',
        'thumbnail': '',
        'description': '',
        'channelTitle': "Your Video",
    })

    
    const [preview, setPreview] = useState(false)
    
    useEffect(() => {
        setPreview(false)
    }, [formValues])

    useEffect(() => {
        setVideo({
            'snippet': {
                'title': 'custom title',
                'channelId': 1,
                'channelTitle': 1
            },

            'statistics': {
                'viewCount': 100,
                likeCount: 100
            }
        })
    }, [])

    function onSubmitHandler(ev) {
        ev.preventDefault();
        setPreview(state => !state)
    }

  return (
    <div style={{backgroundColor: 'white', marginTop: '20vh'}}>
    <div style={{height: '.1vh'}}></div>
    {true
      ?<div style={{float: 'right', marginRight: '5vw', marginTop: '15vh'}}>
        <Typography variant='h4'> Preview </Typography>
        <Box >
        <VideoCard video={formValues}></VideoCard>
      </Box></div>
      : ''}
    <div>
         <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Post video
        </Typography>
        <Box component="form" onSubmit={onSubmitHandler} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Video title"
            name="title"
            autoComplete="title"
            autoFocus
            value={formValues.title}
            onChange={onChangeHandler}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="id"
            label="Youtube video id"
            id="videoId"
            value={formValues.id}
            onChange={onChangeHandler}
          />

        <TextField
            margin="normal"
            required
            fullWidth
            name="thumbnail"
            label="thumbnail URL"
            id="videoId"
            value={formValues.thumbnail}
            onChange={onChangeHandler}
          />
            <TextField
            margin="normal"
            required
            fullWidth
            name="description"
            label="description"
            id="description"
            value={formValues.description}
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
      
      
    </Container>
    
        {/* <VideoDetail video={video} nonYoutube={true}></VideoDetail> */}
    </div></div>
  )
}

export default PostVideo