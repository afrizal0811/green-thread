import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import AboutPage from './pages/about_pages/AboutPage'
import CartPage from './pages/cart_pages/CartPage'
import ContactPage from './pages/contact_pages/ContactPage'
import NotFoundPage from './pages/not_found_pages/NotFoundPage'
import ShopPage from './pages/shop_pages/ShopPage'
import HomePage from './pages/home_pages'
const RouteHandler = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
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
          element={<NotFoundPage />}
          path='404'
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
      </Route>
    </Routes>
  )
}

export default RouteHandler
