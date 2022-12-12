import React from 'react'
import img from './../Assets/404.jpg'
import './../Styles/NotFound.css'

const NotFound = () => {
  return (
    <div className='not-found-div'>
      <img className='not-found-img' src={img} alt="" />
    </div>
  )
}

export default NotFound