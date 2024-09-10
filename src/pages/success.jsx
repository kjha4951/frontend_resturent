import React, { useEffect, useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'

const success = () => {
  const [countdown,setcountdowm]=useState(10)
  const navigate=useNavigate()

  useEffect(()=>{
    const timer=setInterval(()=>{
      setcountdowm(countdown-1)
    },1000)
    if(countdown===0){
      navigate('/')
    }
    return ()=>clearInterval(timer)
  },[countdown])
  return (
    <section className='notFound'>
      <div className="container">
        <img src="/sandwich.png" alt="success" />
        <h1>Redirecting to Home in {countdown} seconds...</h1>
        <Link to={"/"}>Back to Home<HiOutlineArrowNarrowRight/></Link>
        </div>
    </section>
  )
}

export default success
