import React from 'react'
import { MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'

const ProfileMenuItems = ({options}) => {
    console.log(options)
  return (
    <div>
    {options.map((option, index) => {
        console.log(option, 'option!!!!')
        return <MenuItem>
        <Link to={option.linkTo} style={{'display': 'flex', alignItems: 'center'}}>
        {option.name}
        </Link></MenuItem>
    })}
    </div>
  )
}

export default ProfileMenuItems