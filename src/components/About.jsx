import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <p className='mid'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus eius fugit error ex nesciunt ab! Reprehenderit quae fugiat in, labore necessitatibus dicta.</p>
            <Link to={"/"}>Explore Menu <span>
                <HiOutlineArrowNarrowRight />
                </span></Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about"  />
        </div>
      </div>
    </section>
  )
}

export default About
