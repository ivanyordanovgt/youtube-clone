import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditVideo = () => {
  const {videoId} = useParams();

  useEffect(() => {
  })
  return (
    <div>EditVideo {videoId}</div>
  )
}

export default EditVideo