import React from 'react'
import '../styles/experiencesStyles.css'
import ExperienceCard from '../components/ExperienceCard'

const Experiences = () => {
  return (
    <div className='container-experiences'>
        <h1>MY EXPERIENCES</h1>
        <div className='experiences'>
          <h3>Work</h3>
          <ExperienceCard/>
          <ExperienceCard/>
        </div>
        <div className='experiences'>
          <h3>Education</h3>
          <ExperienceCard/>
          <ExperienceCard/>
        </div>
    </div>
  )
}

export default Experiences