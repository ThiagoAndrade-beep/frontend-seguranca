import { createContext, useEffect, useState } from "react";
import fetchApi from "../services/axios";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext()

export function AuthProvider({children}) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const reqGet = async() => {
            const token = localStorage.getItem('token')
            if(!token) {
                setLoading(false)
                return
            }

            try {
                const response = await fetchApi.get('app', {
                    headers: {
                         Authorization: `Bearer ${token}` 
                    }
                })
                setUser(response.data.user)
                console.log(response)
            } catch (error) {
                console.log(error.response.data.msg)
                setUser(null)
            } finally {
                setLoading(false)
            }
        }
        reqGet()
    }, [])

    return (
    <AuthContext.Provider value={{loading, user, setUser}}>
        {children}
    </AuthContext.Provider>
)
}