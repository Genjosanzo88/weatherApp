import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { WeatherRoutes } from '../dashboard/routes/WeatherRoutes'

//import { LoginPage } from '../auth'

export const AppRouter = () => {
  return (
    <>
        <Routes>
          {/* <Route path='/login' element = {
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          } /> */}
            
          <Route path='/*' element = {
              <WeatherRoutes />
          }/>
        </Routes>

    </>
  )
}
