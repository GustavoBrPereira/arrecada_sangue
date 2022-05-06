import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from '@/pages/Home'
import { ISO } from './pages/ISO';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/iso' element={<ISO />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
