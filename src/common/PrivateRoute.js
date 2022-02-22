
import React from "react"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ element, redirectTo }) => {
    return localStorage.getItem('isLogged') ?
        <div>{element}</div> :
        <Navigate to={redirectTo} />
}