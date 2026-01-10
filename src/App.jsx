import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router'
import { LoginComponent } from './components/login'
import { useEffect, useCallback } from 'react'
import { RegisterComponent } from './components/register'
import { MainComponent } from './components/move&go'

function App() {
  const navigate = useNavigate();

  const checkAccount = useCallback(async () => {
    const response = await fetch('http://localhost:8080/v1/travel/checkAccount', {
      method: 'get',
      credentials: 'include',
      headers: {
        "Content-Type": "Application/json",
      }
    }).then((res) => res.json());
    console.log(response)
    response === 'S' ? navigate('/move&go') : navigate('/login');
  }, [])

  useEffect(() => {
    checkAccount();
  }, [])

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginComponent />} />
        <Route path='/move&go' element={<MainComponent />}/>
        <Route path='/register' element={<RegisterComponent />}/>
      </Routes>
    </>
  )
}

export default App
