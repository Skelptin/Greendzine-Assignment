import { useState } from 'react'
import Routes from './routes/routes'
import { Router, BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {


  return (
    <div>
      <BrowserRouter >


        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
