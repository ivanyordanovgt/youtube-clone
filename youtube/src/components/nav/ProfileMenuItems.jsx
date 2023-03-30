import React from 'react'
import { MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { authAPI } from '../../apis/authAPI'

const ProfileMenuItems = ({options}) => {
    console.log(options)

    const isLoggedIn = () => {
      authAPI.isLoggedIn().then(data => console.log(data))
    }
  return (
    <div>
    {options.map((option, index) => {
        console.log(option, 'option!!!!')
        return <MenuItem>
        <Link to={option.linkTo} style={{'display': 'flex', alignItems: 'center'}}>
        {option.name}
        </Link>
        <button onClick={isLoggedIn}></button>
        </MenuItem>
    })}
    </div>
  )
}

export default ProfileMenuItems