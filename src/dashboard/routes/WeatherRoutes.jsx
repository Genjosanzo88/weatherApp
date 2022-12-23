import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Sidebar } from '../../ui'
import { Barcelona, Madrid, Valencia } from '../pages'

export const WeatherRoutes = () => {
  return (
    <>
        <div className='flex'>
          <Sidebar />
            <Routes>
              <Route path="barcelona" element={<Barcelona />} />
              <Route path="madrid" element={<Madrid />} />
              <Route path="valencia" element={<Valencia />} />
              
              <Route path="/" element={<Navigate to="/barcelona" />} />
            </Routes>
        </div>
    </>
  )
}
