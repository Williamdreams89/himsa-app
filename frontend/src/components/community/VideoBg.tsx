import React from 'react'
import { createStyles } from '@mantine/core'
const useStyles = createStyles(theme=>({
  heroContainer:{
    width: "100vw",
    height: "100vh",
    '& video':{
      objectFit: "cover",
      height:"100%",
      width:"100%",
      position: 'fixed',
    }

  }
}))
export const VideoBg = () => {
  const {theme, classes} = useStyles()
  return (
    <div>
        <video src="/videos/video.mp4" autoPlay loop muted />
    </div>
  )
}
