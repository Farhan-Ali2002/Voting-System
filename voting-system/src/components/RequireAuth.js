import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log("i am in require auth",auth.roles)

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role.name))
            ? <Outlet />
            : auth?.username
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;