import React from 'react'
import { about } from '../constant'

const About = () => {
  return (
    <>
    <section>
      <div className='py-20 text-black/80'>
        <h1>About PillPadi</h1>
        <p>Helping Nigerians stay healthy, one dose at a time</p>
      </div>
    </section>
    <section>
      {about.map(({title,description}) => (
        <div className='flex-center py-30 text-center text-black/80 px-20 item-col'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      ))}
    </section>
    </>
  )
}

export default About