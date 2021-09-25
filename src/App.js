
import './App.css';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Rotas from './rotas/Rotas';


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Rotas />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
