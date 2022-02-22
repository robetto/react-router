import React from 'react'
import { Outlet } from 'react-router-dom'
import { LostPsw } from './pages/LostPsw'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <>
    <Outlet />
    <div>login</div>
    <hr /> 
    <Link to='./'>Sign in</Link>
    <Link to='registration'>Registration</Link>
    <Link to='lostpsw'>Lost Password</Link>
    </>
  )
}
