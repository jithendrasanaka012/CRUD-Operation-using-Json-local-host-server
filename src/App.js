import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './pages/users';
import Addusers from './pages/Addusers';
import Updateusers from './pages/Updateusers';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Users/>}/>
      <Route path='/Addusers' element={<Addusers/>}/>
      <Route path='/edit/:id' element={<Updateusers/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

