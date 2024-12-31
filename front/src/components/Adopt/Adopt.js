import React from 'react'
import { NavLink } from 'react-router-dom'
import './adopt.css'

const Adopt = () => {
return (
<>
<section className='about top'>
<div className='containers'>
<section className='image' >
<img src='/images/about.png' alt='' />
<div className='aboutCard top flex_space' >
<p className='text'>
    <h2>Faites de lui votre nouveau meilleur ami </h2>
    <h1>Adopter-le !</h1>
<span className='adopt'>AdoptME</span>
Cette application est destinée à la communauté des amoureux des animaux en Tunisie.
Elle permet de publier des annonces pour les animaux à adopter ou à vendre,
ainsi que pour les services liés aux animaux,
tels que les centres des dressages des chiens et les gardes d'animaux.
</p>
<NavLink to='/feed'>
<button className='btn'>Publier une annonce</button>
</NavLink>
</div>
</section>
</div>
</section>
</>
)
}

export default Adopt












