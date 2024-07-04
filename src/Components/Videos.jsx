import { Box, Stack } from '@mui/material'
import React from 'react'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Videos = ({ videosdata }) => {
  return (
    <Stack direction="row" flexWrap='wrap' justifyContent='start' gap={2}>
{
  videosdata.map((item,index)=>(
    <Box key={index}>
        {item.id.videoId  && <VideoCard video={item}/>}
        {item.id.channelId && <ChannelCard channeldetail={item}/>}
    </Box>
  ))
}
    </Stack>
  )
}

export default Videos