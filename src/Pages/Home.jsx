import React from 'react'
import Announcement from '../Components/Announcement'
import  Categories  from '../Components/Categories'
import Navbar from "../Components/Navbar" 
import Slider from '../Components/Slider'
import Products from '../Components/Products'
import NewsLetter from '../Components/Newsletter'
import Footer from '../Components/Footer'



const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter/>
      <Footer />
    </div>
  )
  
}


export default Home


