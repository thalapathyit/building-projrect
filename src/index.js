import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Images from './components/Images';
// import App from './App';
import "./style.css"
import "./style2.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<Navbar/>
<Images/>
</>

);

