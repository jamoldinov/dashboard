import React from 'react'

import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Home from './page/Home'
import Form from './page/Form'
import Ticket from './page/Ticket'
import ItemEl from './page/itemEl'
import Item from './page/Item'
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "tickets",
          element: <Ticket />,
        },
        {
          path: "form",
          element: <Form />,
        },
        {
          path: "tickets/:id",
          element: <Item />,
        }
        ,]}
  ]
     
  )
  return (
    <div className='max-w-4xl mx-auto w-full'>
      <RouterProvider router={routes}/>
     {/* <Router>
      <Routes element={<Navbar/>}>
        <Route index element={<Home/>}>
        </Route>
      </Routes>
     </Router> */}
      {/* <Home/> */}
    </div>
  )
}

export default App

