import { useState } from 'react'

import './App.css'
import AddTeam from './components/AddTeam'
import ViewTeam from './components/ViewTeam'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddTeam/>}/>
         
          <Route path='/view' element={<ViewTeam/>}/>
        </Routes>
      </BrowserRouter>    </>
  )
}

export default App
