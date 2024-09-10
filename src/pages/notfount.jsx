import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const notfount = () => {
  return (
    <section className='notFound'>
      <div className="container">
        <img src="/notFound.svg" alt="notfound" />
        <h1>Looks Like you Are Lost</h1>
        <p>we can't seem to fine you the page you are looking for </p>
        <Link to={'/'}>Lets back to the right path <span><HiOutlineArrowNarrowRight/></span></Link>
      </div>
    </section>
  )
}

export default notfount
