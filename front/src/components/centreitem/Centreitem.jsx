import React from 'react'
/* import './centreitem.css' */
import { FaFacebook } from "react-icons/fa";

const Centreitem = ({centre}) => {
  return (
    <div className='items'>
    <div className='img'>
        <img src={centre.photo} alt=""/>
        <i className='fas fa-imge'></i>
    </div>
    <div className='title'>
        <h3>{centre.title}</h3>
        
    </div>

</div>
  )
}

export default Centreitem