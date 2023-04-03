
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { authAPI } from "../apis/authAPI";
import { LoggedInContext } from "../context/LoggedInContext";
import { Route } from "react-router-dom";
export const AuthenticatedRoutes = () => {
    const {isLoggedIn} = useContext(LoggedInContext)
    return (
        isLoggedIn ? <Outlet/> : <Navigate to="/register"></Navigate>
    )
}

const GuardedRoute = ({ component: Component, auth, ...rest }) => {
    return <Route {...rest} render={(props) => (
        auth === true
            ? <Component {...props} />
            : <Navigate to='/' />
    )} />
}

export default GuardedRoute;