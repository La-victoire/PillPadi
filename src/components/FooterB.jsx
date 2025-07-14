import React from 'react'
import { Link } from 'react-router-dom'

const FooterB = () => {
  return (
    <footer className='bg-[#0039B5] relative -bottom-10 text-white py-10 item-row justify-around'>
      <div className='item-row'>
        <Link to={`/about-pillpadi`}>About Us</Link>
        <Link to={`/terms-and-condition`}>Privacy</Link>
        <Link to={`/contact-us`}>Contact</Link>
      </div>
      <p>support@pillpadi.com</p>
      <div>
        <p>© 2025 PillPadi. All rights reserved.</p>
        <p>Developed by La_Victoire</p>
      </div>
      </footer>
  )
}

export default FooterB