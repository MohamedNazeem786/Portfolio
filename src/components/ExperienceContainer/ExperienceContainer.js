import React from 'react'
import { Element } from 'react-scroll';
import ExperienceBox from '../ExperienceBox/ExperienceBox';
import './ExperienceContainer.css'

const ExperienceContainer = () => {
  return (
    <div>
      <Element className='experienceContainer' id='exp'>
        <h1>Experience</h1>
        <div className='experienceContainer__info'>
            <ExperienceBox number="+10" title="Clients" />
            <ExperienceBox number="4" title="Projects" style={{backgroundColor:"#f64c08"}} />
            <ExperienceBox number="6+" title="Years Teaching" />
        </div>
      </Element>
    </div>
  )
}

export default ExperienceContainer;