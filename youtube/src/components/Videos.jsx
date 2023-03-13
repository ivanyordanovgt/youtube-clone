import { Stack } from '@mui/system'
import React from 'react'

const Videos = ({videos}) => {

    console.log(videos)
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}> 
        {videos.map((item, index) => {
            <Box key={index}>
                {item.id.videoId && <VideoCard video={item}/>}
            </Box>
        })}
    </Stack>
  )
}

export default Videos