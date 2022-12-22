import React, { useEffect, useState } from 'react'
import './../Styles/Contact.css'
import axios from 'axios';
import MuiAlert from '../Components/MuiAlert';

const Contact = () => {

  const [email, setEmail] = useState("");
  const [openResponse, setOpenResponse] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();

    const article = { email: "miljatovicsasa9@gmail.com", type: "contact", text: email };
    axios.post('http://localhost:3030/email-sender', article)
        .then(() => {
          setEmail("")
          setOpenResponse(true)
          setTimeout(() => {
            setOpenResponse(false);
          }, 3000);
        }).catch((err) => {
          console.log(err)
          alert('There was some problem with email. Please try after.')
        })
  }

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

  return (
    <div className='contact-container'>
      <div className='contact-input'>
        <h3 className='contact-title'>OVDE NAM PIŠITE</h3>
        <div className={openResponse ? "alert alert-visible" : "alert"} >
          <MuiAlert text={'Poruka je uspešno poslata!'} />
        </div>
        <form className='contact-form' onSubmit={handleSubmit}>
          <textarea className='textArea' rows="8" cols="50" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className='contact-btn' type="submit">Pošalji</button>
        </form>
        <br /><br /><hr /><br /><br />
        <i class="fa fa-mobile fa-lg" aria-hidden="true"> Telefon: <span className='bold'>064 12XXXXX</span></i>
        <br /><br />
        <i class="fa fa-envelope fa-lg" aria-hidden="true"> Email: <span className='bold'>yamahasrbija@gmail.com</span></i>
        <br /><br />
        <i class="fa fa-map-marker fa-lg" aria-hidden="true"> Adresa: <span className='bold'>Japanska 3a 11070 Novi Beograd</span></i>
      </div>
      <div className='contact-map'>
      <iframe className='map' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=yamaha barel beograd&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
    </div>
  )
}

export default Contact
