import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CoinDetails from './Components/CoinDetails';
import Coins from './Components/Coins';
import Exchanges from './Components/Exchanges';
import Loading from './utilities/Loading';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/exchanges' element={<Exchanges />} />
        <Route path='/coin/:id' element={<CoinDetails />} />
        <Route path='/loading' element={<Loading />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
