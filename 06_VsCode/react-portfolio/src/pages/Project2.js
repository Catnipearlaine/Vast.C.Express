import React from 'react'
import '../styles/Projects.scss'
import cover from '../assets/Project2/01_Cover_Noise_2.mp4'
import fullScaleImage from '../assets/Project2/02_Screenshot_2.jpg'
import detailsImg1 from '../assets/Project2/03_bird.jpg'
import detailsImg2 from '../assets/Project2/04_index finger.jpg'
import detailsImg3 from '../assets/Project2/05_cup.jpg'
import videoDemo from '../assets/Project2/06_combo2.mp4'
import trainStation from '../assets/railway-train-station-long-shot 1.png'
import { Link } from 'react-router-dom'
import WhiteCircle from '../assets/Project2/Ellipse3.png'

function Project2() {
  return (
    <div className="Project1">
      <div className="ProjectMainImageDiv">
        <video src={cover} autoPlay={true} muted loop type="mp4" />
      </div>

      <div className="Project1Context">
        <img
          className="BackgroundOverlay"
          src={WhiteCircle}
          alt="whitecircle"
        />
        <div className="Project1Header">
          <div className="Project2MainHeader">
            Tangible Particle <br /> Imagination
          </div>
          <div className="Project2SecondHeader">
            Interactive Experiences that Ignite the Senses
          </div>
          <div className="ProjectLinks">
            <div className="Project2LinkBorder">
              <div className="ProjectLink">Touch Designer</div>
            </div>
            <div className="Project2LinkBorder">
              <div className="ProjectLink">Blender</div>
            </div>
            <div className="Project2LinkBorder">
              <div className="ProjectLink">3D</div>
            </div>
            <div className="Project2LinkBorder">
              <div className="ProjectLink">Interactive</div>
            </div>
          </div>
        </div>
      </div>

      <div className="ProjectDescription">
        <div className="ProjectDescriptionAbout">About</div>
        <div className="ProjectDescriptionText">
          Human beings have always been fascinated by fire, light, magic, and
          the idea of superpowers. <br />
          <span class="highlight2">
            With modern technology, can we bring a sense of humanity and wonder
            to raw data?
          </span>
          <br /> Inspired by this thought, I used TouchDesigner to transform 3D
          models into interactive light particles.
          <br /> <br />
          Leveraging MediaPipe, shared by Torin Blankensmith, the project
          creates magical interactions:
          <br /> <br />
          <span class="Details2">
            - <b>A hummingbird</b> materializes when you open your hand,
            accompanied by a bright bird chirp sound;
            <br />- <b>Fire</b> ignites with a spell-like motion of your
            fingers, accompanied by crackling flames; <br /> - Intelligent data
            pours particle tea into a <b>cup</b> as it appears, with the gentle
            sound of liquid flowing.{' '}
          </span>{' '}
          <br /> <br />
          Each action is enhanced by distinct sound effects that immerse the
          viewer in a sensory experience, merging technology and imagination to
          offer a glimpse of how data can become{' '}
          <span class="highlight2">
            tangible, expressive, and deeply human.
          </span>
          <br /> <br />
        </div>
      </div>

      <img
        className="FullScreenProjectImage"
        src={fullScaleImage}
        alt="Touch Designer Overview"
      />
      <div className="Project1ImageContainer">
        <img
          className="Pj1Egg1"
          src={detailsImg1}
          alt="TouchDesigner image 1"
        />
        <img
          className="Pj1Egg2"
          src={detailsImg2}
          alt="TouchDesigner image 2"
        />
        <img
          className="Pj1Egg3"
          src={detailsImg3}
          alt="TouchDesigner image 3"
        />
      </div>

      <div className="ProjectDescription">
        <div className="ProjectDescriptionAbout">Process</div>
        <div className="ProjectDescriptionText">
          <b>→</b>
          <ol>
            <li>
              3D Models, Animations, and Particle Systems:
              <ul>
                <li>Created a fire animation in Blender.</li>
                <li>
                  Converted the models and animations into particle systems to
                  create dynamic, interactive visual effects.
                </li>
              </ul>
            </li>
            <br />
            <li>
              Gesture Tracking, Object Detection, and Interaction:
              <ul>
                <li>
                  Utilized MediaPipe to track hand gestures and detect objects
                  in real-time.
                </li>
                <li>
                  Configured specific gestures to trigger particle effects:
                  <ul>
                    <li>
                      <b>Index finger up:</b> Triggers the fire particle
                      animation, with flames following the finger's coordinates.
                    </li>
                    <li>
                      <b>Palm open:</b> Summons the hummingbird particle
                      animation, dynamically moving with the palm's position.
                    </li>
                    <li>
                      <b>Cup detected in front of the camera:</b> Triggers the
                      teapot pouring particle animation.
                    </li>
                  </ul>
                </li>
                <li>
                  Synchronized particle movements with real-time coordinates of
                  gestures and objects to ensure seamless interaction.
                </li>
              </ul>
            </li>
            <br />
            <li>
              Sound Integration:
              <ul>
                <li>
                  Added distinct sound effects for an immersive sensory
                  experience:
                  <ul>
                    <li>Bird sound for the hummingbird.</li>
                    <li>Crackling flames for the fire animation.</li>
                    <li>Gentle pouring for the teapot animation.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <br />
            <li>
              Particle World Background:
              <ul>
                <li>
                  Transformed a static image into a flowing particle background
                  within TouchDesigner.
                </li>
                <li>
                  The dynamic particle flow complements the primary animations,
                  creating a cohesive and immersive "particle world."
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <div className="ProjectTDdemo">
        <video src={videoDemo} controls type="mp4" />
      </div>
      <br />
      <br />
      <br />

      <div className="ProjectDescription">
        <div className="ProjectDescriptionAbout">Credits</div>
        <div className="ProjectDescriptionText">
          <b>MediaPipe TouchDesigner Plugin </b> <br />
          <a
            href="https://github.com/torinmb/mediapipe-touchdesigner"
            target="_blank"
            rel="noopener noreferrer"
            className="gitlink"
          >
            https://github.com/torinmb/mediapipe-touchdesigner
          </a>
          <br />
          <a
            href="https://www.youtube.com/watch?v=Cx4Ellaj6kk"
            target="_blank"
            rel="noopener noreferrer"
            className="gitlink"
          >
            https://www.youtube.com/watch?v=Cx4Ellaj6kk
          </a>
          <br />
          <b> Animated .fbx into Particles | TouchDesigner Tutorial</b> <br />
          <a
            href="https://www.youtube.com/watch?v=NGL1BNI-mgM"
            target="_blank"
            rel="noopener noreferrer"
            className="gitlink"
          >
            https://www.youtube.com/watch?v=NGL1BNI-mgM
          </a>
          <br />
          <b>Humming bird 3d model and animation</b> - Spyderfy: Boid Systems
          <br />
          <b>Tea Pot 3d model</b> - BlenderKit
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>

      <div className="TrainStationScene">
        <img
          className="FullScreenProjectImage"
          src={trainStation}
          alt="Train Station image"
        />
        <div className="TrainStationNavigation">
          <Link to="/project1">
            <div className="TrainStationNavigationLink">
              {' '}
              ← Previous Project{' '}
            </div>
          </Link>
          <Link to="/project3">
            <div className="TrainStationNavigationLink"> Next Project → </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project2
