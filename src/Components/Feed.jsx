import { Stack,Box, Typography } from '@mui/material'
import React, { useEffect , useState} from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { FetchvideosAPI } from '../Utils/FetchvideosAPI'


const Feed = () => {

    const [selectedcategory,setSelectedCategory]=useState("New")
    const [videos,setVideos]=useState([])

    useEffect(() => {
      
        FetchvideosAPI(`search?part=snippet&q=${selectedcategory}`)
          .then((data) => setVideos(data.items))
        }, [selectedcategory]);
  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
        <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2},backgroundColor:"#000"}}>
           <Sidebar selectedcategory={selectedcategory} setSelectedCategory={setSelectedCategory}/>

            <Typography className='copyright' variant='body2' sx={{mt:1.5 ,color:"#fff"}}>
                Copyright 2024 JSM
            </Typography>
        </Box>

        <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:'2'}}>
            <Typography  variant='h4' fontWeight="bold" mb={2} sx={{color:'black'}}>
                {selectedcategory} <span style={{color:'#F31503'}}>
                    Videos
                </span>
            </Typography>
         
        </Box>
       
        <Videos  videosdata={videos}/>
    </Stack>
  )
}

export default Feed