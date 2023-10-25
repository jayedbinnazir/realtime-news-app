import React from 'react'
import { useAuth } from '../../provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


export const Private = ({children}) => {

    const { user , loading } = useAuth()
    const location = useLocation()

    if(loading){
      return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      )
    }

    if(user){
        return children
    }

  return <Navigate to={'/login'} state={{ from:location?.pathname }} replace={true} />
}
