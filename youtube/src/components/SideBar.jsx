import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/contants'

const selectedCategory = 'New'; 

export const SideBar = () => {
  return <Stack direction="row" sx={
    {overflowY: "auto", height: {sx: 'auto', md: '95%'}, flexDirection: {md: 'column'}}}>

    {categories.map((category) => (
        <button className="category-btn" style={{
            background: category.name === selectedCategory && '#FC1503', color: 'rgba(255, 255, 255)'}} key={category.name}>
            <span style={{
                color: category.name === selectedCategory ? 'white': 'red', 
                marginRight: '1vw'}}>{category.icon}</span>
            <span style={{color: category.name === selectedCategory ? 'white': 'rgba(255,255,255,.8)'}}>{category.name}</span>
        </button>
    ))}    
    </Stack>
}

export default SideBar