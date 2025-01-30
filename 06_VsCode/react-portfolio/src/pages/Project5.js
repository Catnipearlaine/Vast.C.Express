import React from 'react'
import '../styles/Projects.scss'
import colors from '../assets/Project5/Group_6.png'
import typography from '../assets/Project5/Tpeface.png'
import metroWindow from '../assets/Project5/metro_window.png'
import trainStation from '../assets/railway-train-station-long-shot 1.png'
import { Link } from 'react-router-dom'

function Project5() {
  return (
    <div className="Project1">
      <div className="Project5MainImageDiv"></div>

      <div className="Project1Context">
        <div className="Project1Header">
          <div className="Project4MainHeader">Vast.C Express</div>
          <div className="Project4SecondHeader">
            A Train Ride Through Imagination
          </div>
          <div className="ProjectLinks">
            <div className="Project2LinkBorder">
              <div className="ProjectLink">Figma</div>
            </div>
            <div className="Project2LinkBorder">
              <div className="ProjectLink">React</div>
            </div>
            <div className="Project2LinkBorder">
              <div className="ProjectLink">JavaScript</div>
            </div>
            <div className="Project2LinkBorder">
              <div className="ProjectLink">HTML</div>
            </div>
          </div>
          <div className="ProjectLinks">
            <div className="Project2LinkBorder">
              <div className="ProjectLink">SCSS</div>
            </div>
            <div className="Project2LinkBorder">
              <div className="ProjectLink">Web Design</div>
            </div>
          </div>
        </div>
      </div>

      <div className="ProjectDescription">
        <div className="ProjectDescriptionAbout">About</div>
        <div className="ProjectDescriptionText">
          Vast.C Express is a portfolio website featuring elements such as{' '}
          <span class="highlight2">
            a train window overlooking vivid sea views, a platform with a
            station sign, and whimsical objects passing by.
          </span>
          <br /> <br />
          It invites visitors to embark on a creative journey, experiencing the
          portfolio as if they were passengers on an ever-moving train. Each
          stop prompts curiosity: What awaits at the next station? Will our
          paths cross again? This project captures{' '}
          <b>a sense of wonder and anticipation for the adventures ahead.</b>
          <br /> <br />
          <a
            href="https://github.com/Catnipearlaine/Vast.C.Express"
            className="gitlink"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source Code here
          </a>
        </div>
      </div>

      <img
        className="FullScreenProjectImage"
        src={metroWindow}
        alt="Metro Window Image"
      />
      <img
        className="ExtendedProjectImage1"
        src={typography}
        alt="Typography Image"
      />
      <img
        className="ExtendedProjectImage2"
        src={colors}
        alt="Color Scheme Image"
      />

      <div className="ProjectDescription">
        <div className="ProjectDescriptionAbout">Credits</div>
        <div
          className="ProjectDescriptionText"
          style={{ wordBreak: 'break-all' }}
        >
          <b>
            React Project Tutorial – Build a Portfolio Website w/ Advanced
            Animations
          </b>{' '}
          <br />
          <a
            href="https://www.youtube.com/watch?v=bmpI252DmiI&t=1820s"
            target="_blank"
            rel="noopener noreferrer"
            className="gitlink"
          >
            https://www.youtube.com/watch?v=bmpI252DmiI&t=1820s
          </a>{' '}
          <br />
          <b>3D Images of Project 2,3,5 (Edited in Photoshop)</b> - Freepik +
          WannaThis.one
          <br />
          <b>Sea video and Images (Edited in Photoshop and Premiere Pro)</b> -
          Pexels
        </div>
      </div>

      <div className="TrainStationScene">
        <img
          className="FullScreenProjectImage"
          src={trainStation}
          alt="Train Station image"
        />
        <div className="TrainStationNavigationLeft">
          <Link to="/project4">
            <div className="TrainStationNavigationLink">
              {' '}
              ← Previous Project{' '}
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project5
