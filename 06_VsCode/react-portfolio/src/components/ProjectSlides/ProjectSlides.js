import './ProjectSlides.scss'
import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Egg1 from '../../assets/Egg1.png'
import Pj2 from '../../assets/Project2.png'
import Pj3 from '../../assets/Project3.png'
import Pj4 from '../../assets/Project4.png'
import Pj5 from '../../assets/Project5.png'

function ProjectSlides() {
  const scrollContainer = useRef(null)

  useEffect(() => {
    const handleWheel = (event) => {
      if (scrollContainer.current) {
        // Scroll horizontally based on wheel direction
        scrollContainer.current.scrollLeft += event.deltaY * 5
        event.preventDefault()
      }
    }

    // Attach the wheel event listener globally
    document.addEventListener('wheel', handleWheel, { passive: false })

    // Cleanup on component unmount
    return () => {
      document.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div className="ProjectSlides" style={{}} ref={scrollContainer}>
      <Link to="/project1">
        <img className="Egg11" src={Egg1} alt="Egg 1" />
      </Link>
      <Link to="/project2">
        <img className="Pj2" src={Pj2} alt="Pj 1" />
      </Link>
      <Link to="/project3">
        <img className="Pj3" src={Pj3} alt="Pj 2" />
      </Link>
      <Link to="/project4">
        <img className="Pj4" src={Pj4} alt="Pj 3" />
      </Link>
      <Link to="/project5">
        <img className="Pj5" src={Pj5} alt="Pj 5" />
      </Link>
    </div>
  )
}

export default ProjectSlides
