import React from 'react';
import { Link } from 'react-router-dom';
import { SlSocialLinkedin } from "react-icons/sl";
import { TbBrandFacebook } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6"
const Footer = () => {
  return (
  <>
  <footer className='bg-[#0039B5] justify-evenly py-10 item-row text-white h-[200px] '>
    <div className='item-col gap-2'>
      <img src="/Logo (1).png" className='h-[28px] w-[100px]' alt="pillpadi-logo-2" />
      <p>Helping Nigerians stay healthy, one dose at a time</p>
    </div>
    <div className='item-col text-center justify-between'>
      <div className='item-row'>
        <Link to={`/`}>support@pillpadi.com</Link>
        <Link to={`/about-pillpadi`}>About Us</Link>
        <Link to={`/terms-and-condition`}>Privacy</Link>
        <Link to={`/contact-us`}>Contact</Link>
      </div>
      <div>
        <p>© 2025 PillPadi. All rights reserved.</p>
        <p>Developed by La_Victoire</p>
      </div>
    </div>
    <div clasName="item-col gap-5">
      <p className='font-medium'>Follow Us</p>
      <div className='item-row gap-5'>
          <div className='border flex-center border-white h-7 w-7 rounded-full'>
            <SlSocialLinkedin />
          </div>
          <div className='border flex-center pt-1 border-white h-7 w-7 rounded-full'>
            <TbBrandFacebook size={23} />
          </div>
          <div className='border flex-center border-white h-7 w-7 rounded-full'>
            <FaXTwitter />
          </div>
      </div>
    </div>
  </footer>
  </>
  )
}

export default Footer