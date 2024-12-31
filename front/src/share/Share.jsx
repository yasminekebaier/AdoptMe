import React from 'react'
import './Share.css'
import { FaEdit  } from "react-icons/fa";
import { MdPhotoLibrary ,MdLocationOn,MdLabel} from "react-icons/md";
import { TfiFaceSmile } from "react-icons/tfi";


const Share = () => {
  return (
    <div>
   <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
           <img className="shareProfileImg" src="images/jeunne.jpeg" alt="" />
           <input
            placeholder="Publier une annonce?"
            className="shareInput"/>
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                <MdPhotoLibrary  htmlColor="tomato"className='shreIcon'/>
                  <span className='shareoptiontext'>Photo/video</span>
                    
                </div>
                <div className="shareOption">
                <TfiFaceSmile htmlColor="blue" className='shreIcon'/>
                  <span className='shareoptiontext'>Feelings</span>
                    
                </div>
                <div className="shareOption">
                <MdLocationOn htmlColor="green" className='shreIcon'/>
                  <span className='shareoptiontext'>Location</span>
                    
                </div>
                <div className="shareOption">
                <MdLabel className='shreIcon'/>
                  <span className='shareoptiontext'>Catégories</span>
                    
                </div>
              </div>
              <button className='shareButton'> Publier</button>

                </div>
        </div>
        </div>
    </div>
  )
}

export default Share