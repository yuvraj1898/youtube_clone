import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
import Loader from './Loader'


const Videos = ({ videosdata, direction }) => {
  if(!videosdata?.length) return <Loader />;
  
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videosdata.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos