import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext"

export const ProtectedRoute=()=>{
    const {authUser}:any=useAuthContext();

    return authUser ? <Outlet />: <Navigate to={'/login'} />
}