import React, { useState } from 'react'
import './../Styles/Modal.css'
import axios from 'axios';

const Modal = ({open, onClose, setOpenResponse}) => {

  const [email, setEmail] = useState("");

  if(!open) return null;

  const handleSubmit = (event) => {
    event.preventDefault();

    const article = { email };
    axios.post('http://localhost:3030/email-sender', article)
        .then(() => {
          setEmail("");
          setOpenResponse(true)
          setTimeout(() => {
            setOpenResponse(false);
          }, 3000);

        }).catch((err) => {
          console.log(err)
          alert('There was some problem with email. Please try after.')
        })
    onClose();
  }

  return (
    <div className='overlay'>
        <div className='modal-container'>
            <p onClick={onClose} className='closeBtn'>X</p>
            <h3 className='email-title'>Unesite Vaš e-mail</h3>
            <form className='email-form' onSubmit={handleSubmit}>
              <input placeholder='e-mail' value={email} className='email-input' type="email" onChange={(e) => setEmail(e.target.value)} />
              <button type="submit" className='email-btn'>Pošalji zahtev za termin</button>
            </form>
        </div>
    </div>
  )
}

export default Modal
