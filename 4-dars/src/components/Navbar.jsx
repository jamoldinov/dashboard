import React from 'react'
import { Link } from 'react-router-dom'
import logo from './image/dojo.png'

function Navbar() {
  return (
    <div className=''>
      <div className='flex items-center gap-2 pb-4'>
      <span className='flex items-center'><img src={logo} alt="" /><span className='text-primary text-2xl'>Dajo Helpdesk</span></span>
       <nav className='flex gap-3 '>
        <Link className='' to='/'>Dashboard</Link>
        <Link to='/tickets'>Tickets</Link>
       </nav>

      </div>
      <hr />
    </div>
  )
}

export default Navbar