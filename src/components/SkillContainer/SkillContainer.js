import { LinearProgress } from '@material-ui/core';
import React from 'react'
import { Element } from 'react-scroll';
import skilling from '../SkillContainer/coding.jpg'
import './SkillContainer.css'

function SkillContainer() {
  return (
    <Element className='skillContainer' id='skills'>
    <div className='skillContainer__image'>
        <img className='img' src={skilling} alt=''/>
    </div>
    <div className='skillContainer__text'>
        <h2>SKILLSET</h2>
        <div className='skillContainer__skillSet'>
          <h5>React</h5>
          <div className='skillContainer__slider skillContainer__slider1'>
            <LinearProgress variant='determinate' value={90} />
          </div>
        </div>
        <div className='skillContainer__skillSet'>
          <h5>Javascript</h5>
          <div className='skillContainer__slider skillContainer__slider2'>
            <LinearProgress variant='determinate' value={70} />
          </div>
        </div>
        <div className='skillContainer__skillSet'>
          <h5>CSS</h5>
          <div className='skillContainer__slider skillContainer__slider3'>
            <LinearProgress variant='determinate' value={75} />
          </div>
        </div>
        <div className='skillContainer__skillSet'>
          <h5>HTML</h5>
          <div className='skillContainer__slider skillContainer__slider4'>
            <LinearProgress variant='determinate' value={80} />
          </div>
        </div>
    </div>
    </Element>
  )
}

export default SkillContainer;
