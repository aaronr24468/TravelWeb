import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router'
import { LoginComponent } from './pages/login/login'
import { useEffect, useCallback } from 'react'
import { RegisterComponent } from './pages/register/register'
import { MainComponent } from './pages/move&go/move&go'
import { GenerateTrip } from './pages/generateTrips/generateTrip'

function App() {
  // const navigate = useNavigate();

  // const checkAccount = useCallback(async () => {
  //   const response = await fetch('http://localhost:8080/v1/travel/checkAccount', {
  //     method: 'get',
  //     credentials: 'include',
  //     headers: {
  //       "Content-Type": "Application/json",
  //     }
  //   }).then((res) => res.json());
  //   response === 'S' ? navigate('/move&go') : navigate('/');
  // }, [navigate])

  // useEffect(() => {
  //   checkAccount();
  // }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginComponent />} />
        <Route path='/move&go' element={<MainComponent />}/>
        <Route path='/register' element={<RegisterComponent />}/>
        <Route path='/move&go/tripG' element={<GenerateTrip />}/>
      </Routes>
    </>
  )
}

export default App
