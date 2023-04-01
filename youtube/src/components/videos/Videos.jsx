import { Stack, Box } from '@mui/system'
import React from 'react'
import ChannelCard from '../channel/ChannelCard'
import VideoCard from './VideoCard'
import { useState } from 'react'
const Videos = ({ videos, direction }) => {

  if (!videos?.length) {return "Loading..."}
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos?.map((item, idx) => {
        const channelIds = [];
        let addChannelCard = false;
        if (!channelIds.includes(item.channelId)) {
          console.log(channelIds.includes(item.channelId))
          channelIds.push(item.channelId)
          console.log("SHOW ITTTT")
          addChannelCard = true;
        }
        return <Box key={idx}>
          {item.id && <VideoCard video={item} /> }
          {/* {addChannelCard ? <ChannelCard channelDetail={item} />: "?"} */}
        </Box>
})}
    </Stack>
  );
}

export default Videos