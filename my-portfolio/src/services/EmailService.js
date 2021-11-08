import React, { useState } from 'react';

export default function EmailService() {
  const [email, setEmail] = useState({from: '', motive: '', text: ''});

  const handleChange = (e) => {
    setEmail({...email, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert({email});
    setEmail({from: '', motive: '', text: ''});
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name={'from'} value={email.from} onChange={handleChange} placeholder='Tu correo electrónico'/>
        <input type='text' name={'motive'} value={email.motive} onChange={handleChange} placeholder='Motivo de contacto'/>
        <input type='text' name={'text'} value={email.text} onChange={handleChange} placeholder='Tu mensaje'/>
        <input type='submit' value='enviar' onSubmit={handleSubmit}/>
      </form>
    </div>
  )
}