import React from 'react';
import { render } from 'react-dom';
import './style.css';
import {BrowserRouter, Route,Routes,Link} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => (
  <BrowserRouter>
   <Header/>
  
   

   <Routes>
   <Route path="/" element={<Main/>} />
   <Route path="/dashboard" element={ <Dashboard/> }/>

   </Routes>
   <Footer/>
  </BrowserRouter>
);

render(<App />, document.querySelector('#app'));
