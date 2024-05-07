import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"


import Header from './Header'
ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>,
)

import Corpo from './Corpo'
ReactDOM.createRoot(document.getElementById('main')).render(
  <React.StrictMode>
    <Corpo/>
  </React.StrictMode>
)


