import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
const RouteHandler = () => {
  return (
    <Routes>
      <Route
        element={<HomePage />}
        path='/'
      />
      <Route
        element={<AboutPage />}
        path='/about'
      />
      <Route
        element={<CartPage />}
        path='/cart'
      />
      <Route
        element={<ContactPage />}
        path='/contact'
      />
      <Route
        element={<ShopPage />}
        path='/shop'
      />
      <Route
        element={
          <Navigate
            replace
            to='404'
          />
        }
        path='*'
      />
    </Routes>
  )
}

export default RouteHandler
