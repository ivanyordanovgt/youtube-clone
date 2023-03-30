import React from 'react'
import { MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { authAPI } from '../../apis/authAPI'

const ProfileMenuItems = ({options}) => {
    console.log(options)


  return (
    <div>
    {options.map((option, index) => {
        return <MenuItem>
        <Link to={option.linkTo} style={{'display': 'flex', alignItems: 'center'}}>
        {option.name}
        </Link>
        </MenuItem>
    })}
    </div>
  )
}

export default ProfileMenuItems