import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ViewData from './ViewData';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view-data' element={<ViewData />} />
      </Routes>
    </React.Fragment>
  )
}

export default App;