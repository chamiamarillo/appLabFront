import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
//import { userContext } from '../../context/UserProvider';

const RedirectLaboratorio = () => {
    //const {user} = useContext(userContext)

    if('laboratorio' === 'laboratorio'){
        return(
            <div >  
                <Outlet/>
            </div>
        )
    }
    return <Navigate to="/login"/>
}

export default RedirectLaboratorio;