import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './components/ui/button'

const Header = () => {
  const location = useLocation()
  const tabs = [
    {name:"Home", path:"/"},
    {name:"Features", path:"/features"},
    {name:"About", path:"/about-pillpadi"},
    {name:"Contact", path:"/contact-us"}
  ]


   function JoinWaitlistButton() {
  const handleClick = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
  };
};
  return (
    <>
    <nav className='h-[80px] justify-around flex'>
      <div className='flex gap-9'> 
        <div className='flex justify-center items-center'>
          <img src="/Logo.png" alt="pillpadi-logo" />
        </div>
        <div className='flex gap-5 justify-center items-center'>
          {tabs.map(({name,path}) => (
            <Link
             to={path}
             className={`${location?.pathname === path ? `text-[#0039B5] border-b border-[#0039B5]` : "text-black"}`}
             key={name}
             >
              {name}
            </Link>
          ))}
          </div>
      </div>
      <div className='flex justify-center items-center'>
        <Button
        onClick={handleClick}
 className='bg-[#0039B5]'>Join the Waitlist</Button>
      </div>
    </nav>
    </>
  )
}

export default Header