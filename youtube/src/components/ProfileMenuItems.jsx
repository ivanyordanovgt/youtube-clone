import React from 'react'
import { MenuItem } from '@mui/material'

const ProfileMenuItems = ({options}) => {
    console.log(options)
  return (
    <div>
    {options.map((option, index) => {

        return <MenuItem>{option.name}</MenuItem>
    })}
    </div>
  )
}

export default ProfileMenuItems