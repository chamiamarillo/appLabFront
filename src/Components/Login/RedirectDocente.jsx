import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
//import { userContext } from '../../context/UserProvider';

const RedirectDocente = () => {
    //const {user} = useContext(userContext)

    if('0' === 'docente'){
        return(
            <div >  
                <Outlet/>
            </div>
        )
    }
    return <Navigate to="/login"/>
}

export default RedirectDocente;