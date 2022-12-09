import React from 'react'
import './../Styles/Home.css'
import video from './../Assets/hero.mp4'
import motoImg from './../Assets/home-motor.jpg'
import atvImg from './../Assets/home-atc.jpg'
import scooterImg from './../Assets/home-scooter.jpg'
import nauticImg from './../Assets/home-nautic.jpg'
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <>
    <div className='container'>
      <div className='hero'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1 className='hero-h1' >Straight to the MAX</h1>
        <Link to="/category/scooter">
          <Button sx={{ color: 'white', backgroundColor: 'grey', '&:hover': {
            color: 'grey',
            backgroundColor: 'white',
            }}} className='hero-btn' variant="contained">DETALJNIJE
          </Button>
        </Link>
      </div>
      <div className='forBG'>
        <div className='grid-container'>
          <div className='grid-item grid-item-1'>
            <Link to="/category/motorcycle" >
              <img src={motoImg} alt="Kategorije" />
              <Button className='img-btn' variant="outlined" size="large">Saznaj više</Button>
              <h3 className='grid-item-h3'>MOTORI</h3>
            </Link>
          </div>
          <div className='grid-item grid-item-2'>
            <Link to="/category/scooter" >
              <img src={scooterImg} alt="Kategorije" />
              <Button className='img-btn' variant="outlined" size="large">Saznaj više</Button>
              <h3 className='grid-item-h3'>SKUTERI</h3>
            </Link>
          </div>

          <div className='hero-text'>
            <h1 className='hero-h1'>Saznajte više o Yamahi</h1>
            <p className='hero-p'>Od lokalnih događaja i vesti do ekskluzivnih Yamaha ponuda, pogledajte šta se dešava u svetu Yamahe</p>
          </div>

          <div className='grid-item grid-item-3'>
            <Link to="/category/atv" >
              <img src={atvImg} alt="Kategorije" />
              <Button className='img-btn' variant="outlined" size="large">Saznaj više</Button>
              <h3 className='grid-item-h3'>ATV</h3>
            </Link>
          </div>
          <div className='grid-item grid-item-4'>
            <Link to="/category/nautical" >
              <img src={nauticImg} alt="Kategorije" />
              <Button className='img-btn' variant="outlined" size="large">Saznaj više</Button>
              <h3 className='grid-item-h3'>NAUTIKA</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home