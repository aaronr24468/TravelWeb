import './App.css'
import { Routes, Route, useNavigate } from 'react-router'
import { LoginComponent } from './pages/login/login'
import { useEffect, useCallback } from 'react'
import { RegisterComponent } from './pages/register/register'
import { MainComponent } from './pages/move&go/move&go'
import { GenerateTrip } from './pages/generateTrips/generateTrip'
import { ListTrips } from './pages/tripList/tripShowList'
import { TripReservation } from './pages/tripInformation/tripInformation'
import { ReservationTrip } from './pages/reservation/reservationTrip'
import { PaymentStatus } from './pages/paymentStatus/PaymentStatus'
import { MyReservations } from './pages/myReservations/myReservation'
import { ProfileComponent } from './pages/profile/profile'
import { RegisterDriver } from './pages/registerDrivers/regiterDriver'

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
        <Route path='/move&go/profile' element={<ProfileComponent />}/>
        <Route path='/register' element={<RegisterComponent />}/>
        <Route path='/register/driver/move&go' element={<RegisterDriver />}/>
        <Route path='/move&go/tripG' element={<GenerateTrip />}/>
        <Route path='/move&go/myReservations' element={<MyReservations />}/>
        <Route path='/move&go/showTrips' element={<ListTrips />}/>
        <Route path='/move&go/showTrips/trips/:idTrip' element={<TripReservation />}/>
        <Route path='/move&go/reservation/:id' element={<ReservationTrip />} />
        <Route path='/move&go/paymentStatus/' element={<PaymentStatus />}/>
      </Routes>
    </>
  )
}

export default App
