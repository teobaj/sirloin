import React from 'react'
import { Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'

export type ProtectedRouteProps = {
  canAccess: boolean,
  children: JSX.Element
}

export const ProtectedRoute = ({canAccess, children}: ProtectedRouteProps) => {
  return canAccess ? children : <Login/>
}
