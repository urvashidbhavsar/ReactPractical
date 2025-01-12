import React, { useRef } from 'react'
import Video from './Video/song.mp4'

const Videoplay = () => {
  const videoref = useRef(null)

  const playvideo = () => {
    videoref.current.play()
  }
  const pausevideo = () => {
    videoref.current.pause()
  }
  return (
    <>
      <video ref={videoref} height={300} width={500}>
        <source src={Video} type='video/mp4' />
      </video>
      <br /><br />
      <button onClick={playvideo}>Play</button>
      <button onClick={pausevideo}>Pause</button>
    </>
  )
}

export default Videoplay
