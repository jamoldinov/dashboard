import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className='flex flex-col gap-3 '>
        <Navbar/>
        <h1 className='text-primary text-2xl'>Dojo Helpdesk</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus tempore, exercitationem odit, quasi doloremque possimus recusandae alias sequi totam soluta natus iure eius, obcaecati sint dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed voluptates iste cum totam, facere explicabo, fugit suscipit ratione aspernatur consequuntur ex mollitia quaerat?</p>

        <div className='text-center py-3'>
            <Link to='/tickets'  className='btn btn-primary text-sm'>View Tickets</Link>
        </div>

        <h2 className='text-primary text-2xl'>Company Updates</h2>
        <div className='bg-slate-100 py-3 px-3 rounded-md'>
            <h3>New member of the web dev team...</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
        </div>
        <div className='bg-slate-100 py-3 px-3 rounded-md'>
            <h3>New member of the web dev team...</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
        </div>
    </div>
  )
}

export default Home