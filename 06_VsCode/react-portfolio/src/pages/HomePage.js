import React from 'react'
import '../styles/HomePage.scss'
import ProjectSlides from '../components/ProjectSlides/ProjectSlides' 
import SoundControl from '../components/SoundControl/SoundControl'
import seaGif from '../assets/Sea.gif'
import windowFrame from '../assets/window.png'

function HomePage() {
  return (
    <div className="HomePage">
      <h1 className="TrainName">Vast.C</h1>

      <div className="SeaContainer">
        <img
          data-layer="metro window frame"
          className="MetroWindowFrame"
          src={windowFrame}
          alt="Metro Window Frame"
        />
        <img
          data-layer="Sea gif"
          className="SeaGif"
          src={seaGif}
          alt="Sea Animation"
        />
      </div>
      <SoundControl />
      <ProjectSlides />
    </div>
  )
}

export default HomePage
