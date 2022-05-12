import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import { isLoggedInSelector } from './features/user/user.slice'
import { Dashboard } from './pages/Dashboard'
import { Login } from './pages/Login'
import { SignUp } from './pages/SignUp'

export const Router = () => {
  const canAccess = useSelector(isLoggedInSelector)
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute canAccess={canAccess}>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

    </Routes>
  )
}
