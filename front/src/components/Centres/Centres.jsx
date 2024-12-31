import React from 'react'
import Centreitem from '../centreitem/Centreitem'
import { NavLink } from 'react-router-dom'
import './centres.css'
import { centres } from '../../Data'

const Centres = () => {
  const limitedCentres = centres.slice(0, 3); 
  return (
    <>
   <section className='gallery top'>
    <h1> Découvrer les centres de dressages en tunisie</h1>
        <div className='container grid'>
            {limitedCentres.map((c)=>{
                return <Centreitem key={c.id} centre={c}/>
            })
            }
        </div>
    </section>
    <NavLink to='/dressage'>
    <button className='btn1'> Voir plus</button>
    </NavLink>
      
    </>
  
  

    
  )
}

export default Centres
