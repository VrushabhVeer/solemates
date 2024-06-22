import React from 'react'
import Hero from '../components/home/Hero'
import Brands from '../components/home/Brands'
import Trending from '../components/home/Trending'
import Newslater from '../components/home/Newslater'
import Testimonials from '../components/home/Testimonials'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Trending />
      <Testimonials />
      <Newslater />
    </div>
  )
}

export default Homepage