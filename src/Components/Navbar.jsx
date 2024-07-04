import React from 'react'
import { logo } from '../Utils/Constant'
import {  Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'


const Navbar = () => {
  return (
    <Stack direction="row" p={2} alignItems="center" sx={{position:"sticky",top:0,justifyContent:"space-between",backgroundColor:"#000"}}>
        <Link to="/" style={{display:"flex",alignItems:"center"}}>
            <img src={logo} alt='logo' height={45}/>
        </Link>
        <SearchBar/>
    </Stack>
  )
}

export default Navbar