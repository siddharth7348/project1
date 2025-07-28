import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './bootstrap.min.css';
//import './bootstrap.css';
import { Row, Col, Container } from 'react-bootstrap';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartListPage from './pages/CartListPage';
import Headers from './components/Headers';
import Footer from './components/Footer';

function App() {

  return (
    <div>

    <Provider store={store}> 
    <Router>
        <Headers />
      <main>
      <Routes> 
        <Route path='/' element={< HomePage />} />
        <Route path='/product/:id' element={< ProductPage />} />
        <Route path='/cart/:id?' element={< CartListPage />} />




      </Routes>
      </main>
         <Footer />
    </Router> 
    </Provider>      



   
    </div>
  )
}

export default App
