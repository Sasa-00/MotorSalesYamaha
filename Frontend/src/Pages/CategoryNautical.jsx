import React from 'react'
import './../Styles/Categories.css'
import { Link } from "react-router-dom"
import img from './../Assets/categories/moto/moto.jpg'
import banner from './../Assets/categories/moto/nautica.jpeg'

const CategoryNautical = () => {
  return (
    <>
      <img className='categories-banner-img' src={banner} alt="" />
      <div className='categories-container'>
        <h1 className='categories-title'>Istraži High Power range asortiman</h1>
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

export default CategoryNautical