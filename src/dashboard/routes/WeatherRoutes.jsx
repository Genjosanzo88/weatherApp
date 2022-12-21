import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Sidebar } from '../../ui'
import { Barcelona, Mallorca, Valencia } from '../pages'

export const WeatherRoutes = () => {
  return (
    <>
        <div className='flex'>
          <Sidebar />
            <Routes>
              <Route path="barcelona" element={<Barcelona />} />
              <Route path="mallorca" element={<Mallorca />} />
              <Route path="valencia" element={<Valencia />} />

              {/* Search, Hero by id */}
              {/* <Route path="search" element={<SearchPage />} />
              <Route path="hero/:id" element={<HeroPage />} /> */}

              <Route path="/" element={<Navigate to="/valencia" />} />
            </Routes>
        </div>
    </>
  )
}
