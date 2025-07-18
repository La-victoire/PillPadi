import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import FooterB from './FooterB'

const LayoutC = () => {
  return (
    <>
    <Header />
    <main className='min-h-screen'>
    <Outlet />
    </main>
    <FooterB />
    </>
  )
}

export default LayoutC