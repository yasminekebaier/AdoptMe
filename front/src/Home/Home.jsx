import React from 'react'
import Acceuil from '../components/Acceuil/Acceuil'
import Adopt from '../components/Adopt/Adopt'
import Centres from '../components/Centres/Centres'
import Footer from '../footer/Footer'
import './home.scss'



const Home = () => {
  return (
    <div className='home'>
      
      <Acceuil/>
      <Adopt/>
      <Centres/> 
      <Footer/>
      
      
      
      
      
    </div>
  )
}

export default Home