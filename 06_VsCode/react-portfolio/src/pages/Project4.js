import React from 'react'
import '../styles/Projects.scss'
import guide from '../assets/Project4/Controls.png'
import recording from '../assets/Project4/02_Recording.mp4'
import trainStation from '../assets/railway-train-station-long-shot 1.png'
import { Link } from 'react-router-dom'

function Project4() {
  return (
    <div className="Project1">
      <div className="Project4MainImageDiv"></div>
      <div className="Project1Context">
        <div className="Project1Header">
          <div className="Project4MainHeader">
            Cubic Pastel <br /> Reveries
          </div>
          <div className="Project4SecondHeader">
            Interactive Dreamscapes in Motion
          </div>
          <div className="ProjectLinks">
            <div className="Project2LinkBorder">
              <div className="ProjectLink">3D</div>
            </div>
            <div className="Project2LinkBorder">
              <div className="ProjectLink">P5.js</div>
            </div>
            <div className="Project2LinkBorder">
              <div className="ProjectLink">Interactive</div>
            </div>
            <div className="Project2LinkBorder">
              <div className="ProjectLink">Animation</div>
            </div>
          </div>
          <div className="ProjectLinks">
            <div className="Project2LinkBorder">
              <div className="ProjectLink">After Effects</div>
            </div>
            <div className="Project2LinkBorder">
              <div className="ProjectLink">Procreate</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ProjectDescription">
        <div className="ProjectDescriptionAbout">About</div>
        <div className="ProjectDescriptionText">
          Inspired by Shel Silverstein's poem “Frozen Dream”:
          <br /> <br />
          <div className="QuoteText">
            “I’ll take the dream I had last night
            <br />
            And put it in my freezer,
            <br />
            So someday long and far away
            <br />
            When I’m an old grey geezer,
            <br />
            I’ll take it out and thaw it out,
            <br />
            This lovely dream I’ve frozen,
            <br />
            And boil it up and sit me down
            <br />
            And dip my old cold toes in.”
            <br />
          </div>
          <br />
          In this spirit, I collected several animations I created and displayed
          them on the surface of several 3D cubes. Each animation captures a
          moment in time, such as{' '}
          <span class="highlight2">
            the drowsy haze of a summer afternoon, a gentle breeze wafting
            through an open window, vibrant festival scenes, and surreal,
            futuristic alien dreams.
          </span>
          <br /> <br />
          This project invites viewers to immerse themselves in a visual
          representation of pastel dreams, preserved and waiting to be
          experienced again from different perspectives and timelines.
          <br /> <br />
          <a
            href="https://catnipearlaine.github.io/CubicPastelReveries/"
            className="gitlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try here
          </a>
          <br /> <br />
          <a
            href="https://github.com/Catnipearlaine/CubicPastelReveries"
            className="gitlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code here
          </a>
        </div>
      </div>
      <div className="ProjectBriefGuide">
        <div className="ProjectBriefGuideTitle">
          Brief <br /> Guide
        </div>
        <div className="ProjectBriefGuideImage">
          <img src={guide} alt="Brief Guide Image" />
        </div>
      </div>
      <div className="ProjectCubeDemo">
        <video src={recording} controls type="mp4" />
      </div>
      <br /> <br />
      <br /> <br />
      <br /> <br />
      <div className="TrainStationScene">
        <img
          className="FullScreenProjectImage"
          src={trainStation}
          alt="Train Station image"
        />
        <div className="TrainStationNavigation">
          <Link to="/project3">
            <div className="TrainStationNavigationLink">
              {' '}
              ← Previous Project{' '}
            </div>
          </Link>
          <Link to="/project5">
            <div className="TrainStationNavigationLink"> Next Project → </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project4
