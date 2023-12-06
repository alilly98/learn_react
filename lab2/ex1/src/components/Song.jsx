import React from 'react'
import './Song.css';
import Plays from "../components/Plays";

function Song() {
  return (
    
    <div className='container-Avatar'>
      <div className='container-img'>
        <img className='avatar' src="https://i.pinimg.com/564x/98/4e/b2/984eb2e24a1205fd3f4a006ef3974384.jpg"></img>
      </div>
      <div className="container-list" >
        <p>name</p>
        <p>name song</p>
        <Plays></Plays>
      </div>
    </div>
  )
}

export default Song