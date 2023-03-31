
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { authAPI } from "../apis/authAPI";
import { LoggedInContext } from "../context/LoggedInContext";

export const AuthenticatedRoutes = () => {
    const {isLoggedIn} = useContext(LoggedInContext)
    return (
        isLoggedIn ? <Outlet/> : <Navigate to="/"></Navigate>
    )
}