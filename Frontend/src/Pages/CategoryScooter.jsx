import React, { useEffect, useState } from 'react'
import './../Styles/Categories.css'
import { Link } from "react-router-dom"
import banner from './../Assets/categories/moto/scooter.jpg'
import axios from 'axios';

const CategoryScooter = () => {

  const [data, setData] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:3030/scooter')
    .then(function (response) {
      setData(response.data.data)
    })
    .catch(function (error) {
      console.log(error);
    })
    window.scrollTo(0, 0)
  },[])

  return (
    <>
      <img className='categories-banner-img' src={banner} alt="" />
      <div className='categories-container'>
        <h1 className='categories-title'>Istraži Sport Scooters asortiman</h1>
        <div className='category-wrapper'>
          { data.map((dat) => {
            return (
              <div className='categories-card'>
              <Link className='categories-link' to={dat._id}>
              <img className='categories-img' src={dat.CategoryImg} alt="" />
              <h2 className='categories-h2'>{dat.ModelName}</h2>
              <h4 className='categories-h4'>{dat.Slogan}</h4>
              </Link>
              </div>
            )
          }) }
        </div>
      </div>
    </>
  )
}

export default CategoryScooter