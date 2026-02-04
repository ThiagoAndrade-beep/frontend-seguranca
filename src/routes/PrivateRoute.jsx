import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export default function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext)

    if(loading) {
        return <p>Carregando...</p>
    }

    if(!user) {
        return <Navigate to='/' replace/>
    }

    return children ? children : <Outlet />
}