import React from 'react'
import './HomeContainer.scss'

const HomeContainer = () => {
const handleClick = (e) => {
    e.target.value;
}
  return (
    <div className='homeContainer'>
   <h1 className='home_heading'>Sustainable Options</h1>
   <p className='home_page'>“Environment and Energy Management Group” is a Bhopal based organisation <br/>working for promotion of bamboo based technologies for sustainable<br/> development , clean energy technologies for renewable energy generation<br/> and conservation of environment for over 20 years.</p>
   <button className="btnbtn" onClick={handleClick}>Read More</button>
        </div>

  )
}

export default HomeContainer