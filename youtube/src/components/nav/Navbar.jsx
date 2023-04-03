import React, { useState } from 'react'
import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'
import { logo } from '../../utils/contants'
import { SearchBar } from './searchBar'
import ProfileMenu from './ProfileMenu'
const Navbar = ({appSideVideosBooleanSetter}) => {
  
  

  return (
    <div>
        {/* direction row because nav bar needs to be a row, p is padding */}
        <Stack 
        direction="row" 
        alignItems="center" 
        p={2} 
        sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}
        >
          <div>
            
          <Link to="/videos" style={{'display': 'flex', alignItems: 'center'}} >
            <img style={{width: '7vw', position: 'absolute', marginTop: '5vh', marginLeft: '3vw'}} src="https://lh3.googleusercontent.com/QYhOi6TTJ_Cy4aDgBDz8obodDVeP7phfSwrBxsvg21-ze8BaNGhElmIU4oc0urEYIJYAJSIh3JF-50B_6s3iIWXJptI=w640-h400-e365-rj-sc0x00ffffff" ></img>
          </Link>
          <Link to="/" style={{'display': 'flex', alignItems: 'center'}} onClick={appSideVideosBooleanSetter(false)}>
            <img src={logo} style={{width: '3vw'}}></img>
          </Link>


          </div>
          
          <SearchBar></SearchBar>
          <ProfileMenu></ProfileMenu>
        </Stack>
    </div>
  )
}

export default Navbar