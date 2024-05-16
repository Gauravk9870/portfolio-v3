import React from 'react'
import Projects from '../components/Projects'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <section className='bg-[#000000]'>
      <Navbar />
      <Projects />
    </section>
  )
}

export default page