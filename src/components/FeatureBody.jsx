import React from 'react'
import { features } from '../constant'

const FeatureBody = () => {
  return (
    <>
    <section>
     {features.map(({title,description,img}, index)=> (
      <div key={title} className={`${index % 2 === 0 ? ('item-row') : ("flex flex-row-reverse gap-5")} py-10 flex-center gap-5`}>
        <div className='w-[352px] h-[238px] gap-0 item-col justify-start items-start'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <img src={img} alt={`iphone${index}`} />
      </div>
       ))}
    </section>
    </>
  )
}

export default FeatureBody