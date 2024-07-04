import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../Utils/Constant'
import '../index.css'

const Sidebar = ({ selectedcategory, setSelectedCategory }) => {


  return (
    <Stack direction='row' sx={{overflow:'auto',height:{sx:'auto',md:'95%'},flexDirection:{md:'column'}}}>
        {categories.map((item)=>(
            <button className='category-btn' style={{background:item.name===selectedcategory && '#FC1503',color:'white'}}
            key={item.name} onClick={()=>{setSelectedCategory(item.name)}}
            > 
                <span style={{
                    color:item.name===selectedcategory ? 'white':'red',marginRight:"15px"
                }}>
                    {item.icon}
                </span>
                <span style={{opacity:item.name===selectedcategory ? 1:0.8}}>
                    {item.name}
                </span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar