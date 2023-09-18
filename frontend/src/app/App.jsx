import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import dashboard from './pages/dashboard';
import live from './pages/live';
import settings from './pages/settings';
import home from './pages/home';


const App = () => {
  return (
    <div>
     

        <NavBar />

        <Routes>
          <Route path="/" element={<home />} />
          <Route path="/dashboard" element={<dashboard />} />
          <Route path="/live" element={<live />} />
          <Route path="/settings" element={<settings />} />
        </Routes>
      
   </div>
  )
}

export default App