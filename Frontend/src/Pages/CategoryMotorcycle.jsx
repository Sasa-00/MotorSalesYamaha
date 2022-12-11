import React from 'react'
import './../Styles/Categories.css'
import { Link } from "react-router-dom"
import img from './../Assets/categories/moto/moto.jpg'
import rlogo from './../Assets/categories/moto/R-World.jpeg'
import banner from './../Assets/categories/moto/banner.jpeg'

const CategoryMotorcycle = () => {
  return (
    <>
      <img className='categories-banner-img' src={banner} alt="" />
      <div className='categories-container'>
        <img className='categories-rlogo' src={rlogo} alt="" />
        <h1 className='categories-title'>Istraži Supersport ponudu</h1>
        <div className='categories-card'>
          <Link className='categories-link'  to="/">
            <img className='categories-img' src={img} alt="" />
            <h2 className='categories-h2'>R1M</h2>
            <h4 className='categories-h4'>R tradicija. Vasa buducnost</h4>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CategoryMotorcycle