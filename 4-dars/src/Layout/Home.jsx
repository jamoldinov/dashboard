import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
function Home() {
  return (
    <>
        <header>
            <Navbar/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer></footer>
    </>
  )
}

export default Home