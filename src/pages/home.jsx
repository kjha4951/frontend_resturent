import React from 'react'
import Herosection from '../components/Herosection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import Whoweare from '../components/whoweare'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
import Footer from '../components/footer'

const home = () => {
  return (
    <div>
      <Herosection/>
      <About/>
      <Qualities/>
      <Menu/>
      <Whoweare/>
      <Team/>
      <Reservation/>
      <Footer/>
    </div>
  )
}

export default home
