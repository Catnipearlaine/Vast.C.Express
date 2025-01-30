import './SoundControl.scss'
import React, { useState, useEffect, useRef } from 'react'

import headPhone from '../../assets/headphone.png'
import pinkCat from '../../assets/Pink cat.png'
import headphoneICON from '../../assets/headphoneICON.png'
import soundTrack from '../../assets/audio/gentle-ocean-waves.mp3'

const SoundControl = () => {
  const [isSoundOn, setIsSoundOn] = useState(false)
  const audioRef = useRef(null)

  const handleToggleSound = () => {
    setIsSoundOn(!isSoundOn)
  }

  useEffect(() => {
    if (isSoundOn) {
      audioRef.current.play() 
    } else {
      audioRef.current.pause() 
      audioRef.current.currentTime = 0 
    }
  }, [isSoundOn])

  return (
    <div className="SoundControl">
      <div className="CatHp">
        <img
          className="Headphone"
          src={headPhone}
          alt="3D Headphone"
          style={{
            visibility: isSoundOn ? 'visible' : 'hidden',
            opacity: isSoundOn ? 1 : 0,
          }}
        />
        <div className="Cat">
          <img className="PinkCat" src={pinkCat} alt="Pink Cat" />
        </div>
      </div>

      <div
        className={`SoundButton ${!isSoundOn ? 'sound-off' : ''}`}
        onClick={handleToggleSound}
      >
        {isSoundOn ? 'Sound On' : 'Sound Off'}
      </div>

      <div className={`HeadphoneIcon ${!isSoundOn ? 'visible' : ''}`}>
        <div className="HpIcon">
          <img className="HpIcon" src={headphoneICON} />
        </div>
      </div>

      {/* Audio player */}
      <audio ref={audioRef} loop>
        <source src={soundTrack} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default SoundControl
