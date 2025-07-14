import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Register from './Register'
import FooterB from './FooterB'

const LayoutB = () => {
  return (
    <>
    <Header />
    <main className='min-h-screen'>
    <Outlet />
    </main>
    <Register />
    <FooterB />
    </>
  )
}

export default LayoutB