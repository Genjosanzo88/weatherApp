import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { WeatherRoutes } from '../dashboard/routes/WeatherRoutes'


export const AppRouter = () => {
  return (
    <>
        <Routes>
           <Route path='/login' element = {
              <LoginPage />
          } />
          
          <Route path='/*' element = {
              <WeatherRoutes />
          }/>
        </Routes>

    </>
  )
}
