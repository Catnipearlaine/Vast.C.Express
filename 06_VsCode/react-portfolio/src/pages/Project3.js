import React from 'react'
import '../styles/Projects.scss'
import cover from '../assets/Project3/01_Cover_Screenshot_2.jpg'
import briefGuide from '../assets/Project3/Key0_Reset_1.png'
import aloneInTheSky from '../assets/Project3/AloneInTheSky.jpg'
import hideAndSeek from '../assets/Project3/hideandseek.jpg'
import plantasia from '../assets/Project3/plantasia.jpg'
import blazingHeart from '../assets/Project3/Screenshot_1.jpg'
import starBenders from '../assets/Project3/starbenders.jpg'
import trainStation from '../assets/railway-train-station-long-shot 1.png'
import { Link } from 'react-router-dom'

function Project3() {
  return (
    <div className="Project1">
      <div className="Project3MainImageDiv"></div>

      <div className="Project1Context">
        <div className="Project1Header">
          <div className="Project2MainHeader">Plantasia</div>
          <div className="Project2SecondHeader">
            Digital Blooms: A Sonic Exploration of Growth
          </div>
          <div className="ProjectLinks">
            <div className="Project2LinkBorder">
              <div className="ProjectLink">P5.js</div>
            </div>
            <div className="Project2LinkBorder">
              <div className="ProjectLink">Sound</div>
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
          This project was inspired by a cult-classic electronic music album
          composed by Mort Garson,{' '}
          <span class="highlight2">
            which was originally designed to be soothing music for both plants
          </span>{' '}
          and their caretakers. As Garson drew on the idea that plants might
          respond to music, I’d like to use P5.js to show this scene,{' '}
          <span class="highlight2">
            the generative plant “hear’’ the music and grows and thrive.
          </span>
          <br /> <br />
          While listening to the <b>dreamy, lush, and whimsical tones </b>of the
          Plantasia track, I started the exploration with{' '}
          <span class="highlight2">
            a circular petal featuring a{' '}
            <b>transparent, ethereal edge and a vibrant gradient.</b>{' '}
          </span>
          <br />
          Later on I created the variations by experimenting with{' '}
          <b>rotation and petal counts</b>, adding dynamic movement and
          complexity. <br />
          Finally, I incorporated <b>organic stems</b> and used{' '}
          <b>accumulated sound data</b>{' '}
          <span class="highlight2">
            as "nutrients" to bring the cyber plants to life , allowing them to
            grow and evolve in harmony with the music.
          </span>
          <br /> <br />
          <a
            className="gitlink"
            href="https://catnipearlaine.github.io/Plantasia/01_VsCode_Original_Peaceful/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Try here
          </a>
          <br /> <br />
          <a
            className="gitlink"
            href="https://github.com/Catnipearlaine/Plantasia"
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
          <img src={briefGuide} alt="Brief Guide Image" />
        </div>
      </div>

      <div className="projectVideosList">
        <div className="projectVideosTitle">
          {' '}
          Click the image to view the demo video{' '}
        </div>
        <div className="projectVideosListContainer">
          <img
            className="clickable"
            onClick={() =>
              openPopup(
                'https://www.youtube.com/embed/06SHrFFPle4?si=CZFyKXXXLml_8I48'
              )
            }
            src={plantasia}
            alt="plantasia song cover"
          />
          <img
            className="clickable"
            onClick={() =>
              openPopup(
                'https://www.youtube.com/embed/MJcikEyrf5g?si=9G-rDZq4Hzy8uMaT'
              )
            }
            src={hideAndSeek}
            alt="hideAndSeek song cover"
          />
          <img
            className="clickable"
            onClick={() =>
              openPopup(
                'https://www.youtube.com/embed/Joton8LLRbg?si=xaJIs6rChxbcxGzg'
              )
            }
            src={aloneInTheSky}
            alt="aloneInTheSky song cover"
          />
        </div>
      </div>

      <div className="Proj3Details">
        Moreover, out of curiosity, I created a bright energy version of the
        P5.js code{' '}
        <span class="highlight2">
          using basic <b>triangle</b> shapes and lively stems that respond to
          music <b>frequencies</b>.
        </span>{' '}
        This exploration adds a fun, dynamic side to the project, making it
        adaptable to punk and energetic music and letting me see how the visuals
        can interact with different sounds.
        <a
          href="https://catnipearlaine.github.io/Plantasia/02_Extended_FireVersion/"
          className="gitlink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try here
        </a>
      </div>

      <div className="projectVideosList">
        <div className="projectVideosTitle">
          {' '}
          Click the image to view the demo video{' '}
        </div>
        <div className="projectVideosListContainer">
          <img
            className="clickable"
            onClick={() =>
              openPopup(
                'https://www.youtube.com/embed/PeR_7sI1kzY?si=aP3N3jznJb49uaEA'
              )
            }
            src={starBenders}
            alt="starBenders song cover"
          />
          <img
            className="clickable"
            onClick={() =>
              openPopup(
                'https://www.youtube.com/embed/hP5Lxn6P-PA?si=dMzEIGYTUeDOLSME'
              )
            }
            src={blazingHeart}
            alt="blazingHeart song cover"
          />
        </div>
      </div>

      <div className="ProjectDescription">
        <div className="ProjectDescriptionAbout">Summary</div>
        <div className="ProjectDescriptionText">
          This work allows me to explore{' '}
          <span class="highlight2">
            the intersection of <b>technology, art, and nature</b>, creating a
            bridge between generative design and human connection to the natural
            world.{' '}
          </span>
          It deepens my understanding of how sound and data can influence visual
          storytelling and interaction, pushing the boundaries of creative
          coding with tools like P5.js. <br />I see this project as a stepping
          stone toward developing more immersive and interactive digital
          experiences, where art responds dynamically to{' '}
          <b>human inputs and environmental factors.</b>{' '}
          <span class="highlight2">
            It also sparks curiosity about how technology can reinterpret nature
            in ways that evoke emotion and reflection.
          </span>
          <br />
          Ultimately, this work drives me to continue experimenting with
          generative art, interactive installations, and digital storytelling,
          all while maintaining a sense of <b>playfulness and wonder.</b>
        </div>
      </div>

      <div className="TrainStationScene">
        <img
          className="FullScreenProjectImage"
          src={trainStation}
          alt="Train Station image"
        />
        <div className="TrainStationNavigation">
          <Link to="/project2">
            <div className="TrainStationNavigationLink">
              {' '}
              ← Previous Project{' '}
            </div>
          </Link>
          <Link to="/project4">
            <div className="TrainStationNavigationLink"> Next Project → </div>
          </Link>
        </div>
      </div>

      <div
        id="popup-container"
        onClick={() => closePopup()}
        class="popup-container"
      >
        <span class="close-button" onClick={() => closePopup()}>
          X
        </span>
        <div class="video-container">
          <iframe
            id="youtube-iframe"
            src=""
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

function openPopup(videoId) {
  var popupContainer = document.getElementById('popup-container')
  var youtubeIframe = document.getElementById('youtube-iframe')

  youtubeIframe.src = videoId
  popupContainer.classList.add('show')
}

function closePopup() {
  var popupContainer = document.getElementById('popup-container')
  var youtubeIframe = document.getElementById('youtube-iframe')

  youtubeIframe.src = ''
  popupContainer.classList.remove('show')
}

export default Project3
