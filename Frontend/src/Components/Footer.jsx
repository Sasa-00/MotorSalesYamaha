import React from 'react'
import './../Styles/Footer.css'
import footerLogo from './../Assets/footer/footer-logo.png'
import spon1 from './../Assets/footer/spon1.png'
import spon2 from './../Assets/footer/spon2.png'
import spon3 from './../Assets/footer/spon3.png'
import spon4 from './../Assets/footer/spon4.png'
import spon5 from './../Assets/footer/spon5.png'
import spon6 from './../Assets/footer/spon6.png'
import spon7 from './../Assets/footer/spon7.png'
import spon8 from './../Assets/footer/spon8.png'
import spon9 from './../Assets/footer/spon9.png'
import spon10 from './../Assets/footer/spon10.png'

const Footer = () => {
  return (
    <div className='footer'>
        <hr />
        <div className='footer-logo'>
            <img className='footer-img' src={footerLogo} alt="" />
        </div>
        <div className='footer-social'>
            <div className='footer-social--text'>
                <h3>BUDITE INFORMISANI</h3>
            </div>
            <div className='footer-social--img'>
                <a href="https://www.facebook.com/yamaha.plattner.srbija" target="_blank"><i class="fa fa-facebook fa-lg social" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/yamahamotoreu/" target="_blank"><i class="fa fa-instagram fa-lg social" aria-hidden="true"></i></a>
                <a href="https://twitter.com/yamahamotoreu" target="_blank"><i class="fa fa-twitter fa-lg social" aria-hidden="true"></i></a>
            </div>
        </div>
        <div className='footer-sponsor'>
            <a className="spon-a" target="_blank" href="https://www.yamaha.com/"><img className='spon' src={spon1} alt="" /></a>
            <a className="spon-a" target="_blank" href="https://www.dainese.com/rs/en/"><img className='spon' src={spon2} alt="" /></a>
            <a className="spon-a" target="_blank" href="https://www.agv.com/be/en/"><img className='spon' src={spon3} alt="" /></a>
            <a className="spon-a" target="_blank" href="https://www.alpinestars.com/"><img className='spon' src={spon4} alt="" /></a>
            <a className="spon-a" target="_blank" href="https://www.akrapovic.com/en/intro?returnUrl=%2F"><img className='spon' src={spon5} alt="" /></a>
            <a className="spon-a" target="_blank" href="https://www.pirelli.com/global/en-ww/homepage"><img className='spon' src={spon6} alt="" /></a>
            <a className="spon-a" target="_blank" href="https://www.metzeler.com/en-ww/home"><img className='spon' src={spon7} alt="" /></a>
            <a className="spon-a" target="_blank" href="https://shad.co.uk/"><img className='spon' src={spon8} alt="" /></a>
            <a className="spon-a" target="_blank" href="https://www.cardosystems.com/products/"><img className='spon' src={spon9} alt="" /></a>
            <a className="spon-a" target="_blank" href="https://www.sena.com/eu-en"><img className='spon' src={spon10} alt="" /></a>
        </div>
    </div>
  )
}

export default Footer