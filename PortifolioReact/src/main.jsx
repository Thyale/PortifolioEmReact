import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"


import Header from './Header'
ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>,
)

import TituloInicial from './TituloInicial'
import Infos from './Infos'
ReactDOM.createRoot(document.getElementById('main')).render(
  <React.StrictMode>
    <TituloInicial/>
    <Infos/>
  </React.StrictMode>
)

