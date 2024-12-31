import React from 'react'
import './acceuil.css'
import Navbar from '../../navbar/Navbar'
import Login from '../../login/Login'

const Acceuil = () => {
  return (
    <div className='Acceuil'>
      <Navbar/>
        <section className='slider'>
    <img src='/images/imageacceuil.jpg' alt='' />
    <h1>Trouver votre future compagnon !</h1>
    <h2>Plus de 1000 annonces <br/>
       des animaux à adopter !</h2>
  </section>
  
    
  
  <Login/>
  
      
   
           

    
   
    
  </div>
  )
}

export default Acceuil