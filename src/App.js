import React from 'react';
import Sobre from "./pages/sobre/Sobre";
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Parcerias from './pages/parcerias/Parcerias';
import Carreiras from './pages/carreiras/Carreiras';
import Dados from './pages/dados/Dados';
import Login  from './pages/loginpage/login';
import Pacotes  from './pages/pacotes/pacotes';

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/parcerias' element={<Parcerias />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/carreiras' element={<Carreiras />} />
        <Route path='/infos' element={<Dados />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pacotes' element={<Pacotes />} />
      </Routes>
  );
}

export default App;
