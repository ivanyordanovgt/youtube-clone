import React from 'react'
import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'

import { logo } from '../utils/contants'
const Navbar = () => {
  return (
    <div>
        {/* direction row because nav bar needs to be a row, p is padding */}
        <Stack 
        direction="row" 
        alignItems="center" 
        p={2} 
        sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}
        >

          <Link to="/" style={{'display': 'flex', alignItems: 'center'}}>
            <img src={logo} style={{width: '3vw'}}></img>
          </Link>
        </Stack>
    </div>
  )
}

export default Navbar