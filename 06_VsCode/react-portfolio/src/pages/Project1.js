import React from 'react'
import '../styles/Projects.scss'
import eggVideo from '../assets/Project1/00_AegisEgg_Cover.mp4'
import blenderImg from '../assets/Project1/01_Screenshot_2.jpg'
import egg1 from '../assets/Project1/02_Vertical_10048.png'
import egg2 from '../assets/Project1/03_Vertical_10123.png'
import egg3 from '../assets/Project1/04_Vertical_10172.png'
import eggVideo2 from '../assets/Project1/05_CashmereEgg.mp4'
import blenderImg2 from '../assets/Project1/06_Screenshot_26.jpg'
import egg11 from '../assets/Project1/07_Vertical_0030.png'
import egg22 from '../assets/Project1/08_Vertical_Angle.png'
import egg33 from '../assets/Project1/09_Vertical_0228.png'
import eggCover3 from '../assets/Project1/10_More than Egg_2.jpg'
import blenderImg3 from '../assets/Project1/11_Screenshot_1.jpg'
import egg111 from '../assets/Project1/12_V1.mp4'
import egg222 from '../assets/Project1/13_V2.mp4'
import egg333 from '../assets/Project1/14_Scene_1_B.mp4'
import trainStation from '../assets/railway-train-station-long-shot 1.png'
import { Link } from 'react-router-dom'

function Project1() {
  return (
    <div className="Project1">
      <div className="ProjectMainImageDiv">
        <video src={eggVideo} autoPlay={true} muted loop type="mp4" />
      </div>

      <div className="Project1Context">
        <div className="Project1Header">
          <div className="ProjectMainHeader">The Fragile Egg</div>
          <div className="ProjectSecondHeader">
            Exploring Modern Packaging and Processing
          </div>
          <div className="ProjectLinks">
            <div className="ProjectLinkBorder">
              <div className="ProjectLink">3D Animation</div>
            </div>
            <div className="ProjectLinkBorder">
              <div className="ProjectLink">Blender</div>
            </div>
            <div className="ProjectLinkBorder">
              <div className="ProjectLink">After Effects</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ProjectDescription">
        <div className="ProjectDescriptionAbout">About</div>
        <div className="ProjectDescriptionText">
          One day, during my routine grocery run, I found myself lingering by
          the egg section. I watched as people carefully opened cartons,
          inspecting each egg, especially the ones nestled in the corners, to
          ensure they weren’t cracked. It struck me how delicate these everyday
          essentials were—and how much effort people put into avoiding broken
          ones.{' '}
          <span class="highlight2">
            The egg’s fragility seemed to beg for a solution.
          </span>
          <br /> <br />
          Later, as I wandered through the aisles, my attention shifted to the
          colorful array of snacks lining the shelves.{' '}
          <span class="highlight2">
            So many of them boasted flavors of nature—strawberry, peach, or even
            exotic fruits—yet most contained little, if any, of their original
            ingredients.
          </span>{' '}
          These products didn’t just replicate flavors; they adapted to diverse
          consumer needs, becoming something entirely new.
          <br /> <br />
          These two observations sparked a question in my mind:{' '}
          <b>
            What if the humble egg could evolve, just like those snacks? What if
            it could meet the demands of modern life, becoming tougher, more
            convenient, and even reimagined in form?
          </b>
          <br /> <br />
          With this in mind, I decided to use the egg as my subject and medium,
          embarking on a journey to transform it.{' '}
          <span class="highlight2">
            Through digital modeling in Blender, I’ve explored innovative
            packaging concepts and redefined the egg to fit contemporary needs.
          </span>{' '}
          The result is a collection of "New Eggs"—each designed with a unique
          purpose in mind:{' '}
          <b>the Aegis Egg, the Cashmere Egg, and the More Than Egg.</b>
          <br /> <br />
          This work invites the audience to envision a world where traditional
          objects are reimagined to address contemporary challenges. It
          encourages a mindset of questioning and creativity, prompting viewers
          to consider how everyday items might be adapted, improved, or
          reinvented in their own lives.
        </div>
      </div>

      <div className="Details">
        <div className="SubText">
          <b> The Aegis Egg:</b>
          <br /> <br />
          Protected by a seashell-like casing and coated with <b>BPA-free </b>
          special metal to enhance durability. <br /> The coating can be easily
          removed{' '}
          <span class="highlight">
            using steam from a mixture of water and white vinegar heated to over
            80°C.
          </span>
        </div>
      </div>
      <img
        className="FullScreenProjectImage"
        src={blenderImg}
        alt="Egg Blender image"
      />

      <div className="Project1ImageContainer">
        <img className="Pj1Egg1" src={egg1} alt="Egg image 1" />
        <img className="Pj1Egg2" src={egg2} alt="Egg image 2" />
        <img className="Pj1Egg3" src={egg3} alt="Egg image 3" />
      </div>

      <br />
      <br />
      <div className="Details">
        <div className="SubText">
          <b> The Cashmere Egg:</b>
          <br /> <br />
          <span class="highlight">
            Ideal for long winter seasons, it can be stored outdoors without
            taking up fridge space.
          </span>{' '}
          <br />
          Features include <b>zero carbon dioxide emissions</b>,{' '}
          <b>constant temperature regulation</b>, and a stable silicone flower
          suction base.
        </div>
      </div>
      <div className="ProjectMainImageDiv">
        <video src={eggVideo2} autoPlay={true} muted loop type="mp4" />
      </div>

      <img
        className="FullScreenProjectImage"
        src={blenderImg2}
        alt="Egg Blender image2"
      />

      <div className="Project1ImageContainer">
        <img className="Pj1Egg11" src={egg11} alt="Egg image 11" />
        <img className="Pj1Egg22" src={egg22} alt="Egg image 22" />
        <img className="Pj1Egg33" src={egg33} alt="Egg image 33" />
      </div>
      <br />
      <br />
      <div className="Details">
        <div className="SubText">
          <b>More Than Egg:</b>
          <br /> <br />A versatile, multi-flavor option that mimics fried eggs.
          <br />
          It is <span class="highlight">low-calorie, vegan-friendly</span>,{' '}
          <b>enriched with Vitamin C, Vitamin D, Omega-3, and fiber</b>, and
          designed for long-term storage.
        </div>
      </div>
      <img
        className="FullScreenProjectImage"
        src={eggCover3}
        alt="Egg CoverImage3"
      />

      <img
        className="FullScreenProjectImage"
        src={blenderImg3}
        alt="Egg Blender image3"
      />

      <div className="Project1ImageContainer">
        <video src={egg111} autoPlay={true} muted loop type="mp4" />
        <video src={egg222} autoPlay={true} muted loop type="mp4" />
        <video src={egg333} autoPlay={true} muted loop type="mp4" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="TrainStationScene">
        <img
          className="FullScreenProjectImage"
          src={trainStation}
          alt="Train Station image"
        />
        <div className="TrainStationNavigationRight">
          <Link to="/project2">
            <div className="TrainStationNavigationLink"> Next Project → </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project1
