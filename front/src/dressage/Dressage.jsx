import React from 'react'
import "./dressage.css"
import Navbar from '../navbar/Navbar'
import { MdLocationOn ,MdCall} from "react-icons/md";

const Dressage = ({centre}) => {
  console.log(centre)
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
   
    <div className='dressage'>
    <div className="image-container">
          <img className="logoimg" src={centre.photo} alt="" />
        </div>
        <div className="text-container">
          <h3>{centre.title} </h3>
          <div className="info-container">
          <div className="location-container">
            <MdLocationOn className="location-icon" />
            <span className="location-text">{centre.localistation}</span>
          </div>
          <div className="contact-container">
            <i className="fas fa-phone-alt contact-icon"></i>
            <MdCall className='contact-icon'/>
            <span className="contact-text">{centre.télé}</span>
          </div>
          </div>
                     
          <p>{centre. descr}
          </p>
        </div>

    </div>
    </>
  )
}

export default Dressage