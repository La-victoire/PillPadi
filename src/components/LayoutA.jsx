import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './FooterA'
import Header from './Header'

const Layout = () => {
  return (
    <>
    <Header />
    <main className='min-h-screen'>
    <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default Layout