import React from 'react'
import Dressage from '../dressage/Dressage'
import Navbar from '../navbar/Navbar'
import { centres } from '../Data'

const Centredressage = () => {
  return (
    <>
 <Navbar/>
 {centres.map((c)=>(
          <Dressage key={c.id} centre={c}/>
          ))}
 
    </>
  )
}

export default Centredressage